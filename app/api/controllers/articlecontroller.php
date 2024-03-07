<?php
require __DIR__ . '/../../services/articleservice.php';

class ArticleController
{

    private $articleService;

    private $filters = [
        'id' => FILTER_VALIDATE_INT,
        'category_id' => FILTER_VALIDATE_INT,
        'name' => FILTER_SANITIZE_FULL_SPECIAL_CHARS,
        'description' => FILTER_SANITIZE_FULL_SPECIAL_CHARS,
        'image' => FILTER_SANITIZE_FULL_SPECIAL_CHARS,
        'price' => FILTER_VALIDATE_FLOAT,
        'discount' => FILTER_VALIDATE_FLOAT,
        'num_sales' => FILTER_VALIDATE_INT,
        'amount' => FILTER_VALIDATE_INT,
        'display' => FILTER_VALIDATE_INT
    ];

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

        if ($data !== null) {
            $sanitizedData = filter_var_array($data, $this->filters, false);

            if ($sanitizedData !== false && !in_array(false, $sanitizedData, true)) {
                $this->articleService->create($sanitizedData);
                echo json_encode(['status' => 'success', 'message' => 'Article created successfully']);
            } else {
                http_response_code(400);
                echo json_encode(['status' => 'error', 'message' => 'Invalid input data']);
            }
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
                if ($data !== null) {
                    $sanitizedData = filter_var_array($data, $this->filters, false);

                    if ($sanitizedData !== false && !in_array(false, $sanitizedData, true)) {
                        $updatedArticle = new Article($sanitizedData);
                        $updatedArticle->setId($articleId);

                        $this->articleService->update($updatedArticle);

                        echo json_encode(['status' => 'success', 'message' => 'Article updated successfully', 'article' => $updatedArticle->toArray()]);
                    } else {
                        http_response_code(400);
                        echo json_encode(['status' => 'error', 'message' => 'Invalid input data']);
                    }
                } else {
                    http_response_code(400);
                    echo json_encode(['status' => 'error', 'message' => 'Invalid JSON data']);
                }
            } else {
                http_response_code(404);
                echo json_encode(['status' => 'error', 'message' => 'Article not found']);
            }
        } else {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'Missing article ID']);
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