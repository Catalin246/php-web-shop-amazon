<?php
require __DIR__ . '/../../services/userservice.php';

class UserController
{

    private $userService;

    function __construct()
    {
        $this->userService = new UserService();
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

    public function getAll()
    {
        $categories = $this->userService->getAll();
        echo json_encode(['status' => 'success', 'data' => $categories]);
    }

    public function getById($userId)
    {
        $user = $this->userService->getById($userId);

        if ($user) {
            echo json_encode(['status' => 'success', 'data' => $user]);
        } else {
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'User not found']);
        }
    }

    public function create()
    {
        $jsonInput = file_get_contents('php://input');
        $data = json_decode($jsonInput, true);

        if ($data) {
            $user = new User($data);

            $this->userService->create($user);

            echo json_encode(['status' => 'success', 'message' => 'User created successfully']);
        } else {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'Invalid JSON data']);
        }
    }

    public function update()
    {
        $jsonInput = file_get_contents('php://input');
        $data = json_decode($jsonInput, true);

        $userId = $_GET['id'] ?? null;

        if ($userId) {
            $existingUser = $this->userService->getById($userId);

            if ($existingUser) {
                $updatedUser = new User($data);
                $updatedUser->setId($userId);

                $this->userService->update($updatedUser);

                echo json_encode(['status' => 'success', 'message' => 'User updated successfully', 'user' => $updatedUser->toArray()]);
            } else {
                http_response_code(404);
                echo json_encode(['status' => 'error', 'message' => 'User not found']);
            }
        } else {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'Missing User ID']);
        }
    }

    public function delete()
    {
        $userId = $_GET['id'] ?? null;

        if ($userId) {
            $existingUser = $this->userService->getById($userId);

            $this->userService->delete($userId);

            if ($existingUser) {
                echo json_encode(['status' => 'success', 'message' => 'User deleted successfully']);
                $existingUser = null;
            } else {
                http_response_code(404);
                echo json_encode(['status' => 'error', 'message' => 'User not found or already deleted']);
            }
        } else {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'Missing user ID']);
        }
    }
}
?>