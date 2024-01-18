<?php
require __DIR__ . '/../../services/articleservice.php';

class ArticleController
{

    private $articleService;

    function __construct()
    {
        $this->articleService = new ArticleService();
    }

    public function index()
    {
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $this->create();
        } elseif ($_SERVER["REQUEST_METHOD"] == "GET") {
            $id = $_GET['id'] ?? null;
            $categoryId = $_GET['categoryId'] ?? null;

            if ($id !== null) {
                $this->getById($id);
            } else if ($categoryId !== null) {
                $this->getAllByCategory($categoryId);
            } else {
                $this->getAll();
            }
        } elseif ($_SERVER["REQUEST_METHOD"] == "PUT") {
            $this->update();
        } elseif ($_SERVER["REQUEST_METHOD"] == "DELETE") {
            $this->delete();
        }
    }

    public function getAll()
    {
        $articles = $this->articleService->getAll();
        echo json_encode(['status' => 'success', 'data' => $articles]);
    }

    public function getAllByCategory($categoryId)
    {
        $articles = $this->articleService->getAllByCategory($categoryId);
        echo json_encode(['status' => 'success', 'data' => $articles]);
    }

    public function getById($articleId)
    {
        $article = $this->articleService->getById($articleId);

        if ($article) {
            echo json_encode(['status' => 'success', 'data' => $article]);
        } else {
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'Article not found']);
        }
    }

    public function create()
    {
        $jsonInput = file_get_contents('php://input');
        $data = json_decode($jsonInput, true);

        if ($data) {
            $this->articleService->create($data);

            echo json_encode(['status' => 'success', 'message' => 'Article created successfully']);
        } else {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'Invalid JSON data']);
        }
    }

    public function update()
    {
        $jsonInput = file_get_contents('php://input');
        $data = json_decode($jsonInput, true);

        $articleId = $_GET['id'] ?? null;

        if ($articleId) {
            $existingArticle = $this->articleService->getById($articleId);

            if ($existingArticle) {

                $updatedArticle = new Article($data);
                $updatedArticle->setId($articleId);

                $this->articleService->update($updatedArticle);

                echo json_encode(['status' => 'success', 'message' => 'Category updated successfully', 'category' => $updatedArticle->toArray()]);
            } else {
                http_response_code(404);
                echo json_encode(['status' => 'error', 'message' => 'Category not found']);
            }
        } else {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'Missing category ID']);
        }
    }

    public function delete()
    {
        $articleId = $_GET['id'] ?? null;

        if ($articleId) {
            $existingArticle = $this->articleService->getById($articleId);

            $this->articleService->delete($articleId);

            if ($existingArticle) {
                echo json_encode(['status' => 'success', 'message' => 'Article deleted successfully']);
            } else {
                http_response_code(404);
                echo json_encode(['status' => 'error', 'message' => 'Article not found or already deleted']);
            }
        } else {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'Missing Article ID']);
        }
    }
}
?>