<?php
require __DIR__ . '/../../services/categoryservice.php';

class CategoryController
{
    private $categoryService;

    public function __construct()
    {
        $this->categoryService = new CategoryService();
    }

    public function index()
    {
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $this->create();
        } elseif ($_SERVER["REQUEST_METHOD"] == "GET") {
            $id = $_GET['id'] ?? null;

            if ($id !== null) {
                $this->getById($id);
            } else {
                $this->getAll();
            }
        } elseif ($_SERVER["REQUEST_METHOD"] == "PUT") {
            $this->update();
        } elseif ($_SERVER["REQUEST_METHOD"] == "DELETE") {
            $this->delete();
        }
    }

    public function create()
    {
        $jsonInput = file_get_contents('php://input');
        $data = json_decode($jsonInput, true);

        if ($data) {
            $category = new Category($data);

            $this->categoryService->create($category);

            echo json_encode(['status' => 'success', 'message' => 'Category created successfully']);
        } else {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'Invalid JSON data']);
        }
    }

    public function getAll()
    {
        $categories = $this->categoryService->getAll();
        echo json_encode(['status' => 'success', 'data' => $categories]);
    }

    public function getById($categoryId)
    {
        $category = $this->categoryService->getCategoryById($categoryId);

        if ($category) {
            echo json_encode(['status' => 'success', 'data' => $category]);
        } else {
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'Category not found']);
        }
    }

    public function update()
    {
        $jsonInput = file_get_contents('php://input');
        $data = json_decode($jsonInput, true);

        $categoryId = $_GET['id'] ?? null;

        if ($categoryId) {
            $existingCategory = $this->categoryService->getCategoryById($categoryId);

            if ($existingCategory) {
                $updatedCategory = new Category($data);
                $updatedCategory->setId($categoryId);

                $this->categoryService->update($updatedCategory);

                echo json_encode(['status' => 'success', 'message' => 'Category updated successfully', 'category' => $updatedCategory->toArray()]);
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
        $categoryId = $_GET['id'] ?? null;

        if ($categoryId) {
            $deleted = $this->categoryService->delete($categoryId);

            if ($deleted) {
                echo json_encode(['status' => 'success', 'message' => 'Category deleted successfully']);
            } else {
                http_response_code(404);
                echo json_encode(['status' => 'error', 'message' => 'Category not found or already deleted']);
            }
        } else {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'Missing category ID']);
        }
    }

}
?>