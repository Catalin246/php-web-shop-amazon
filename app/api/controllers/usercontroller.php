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
        }
    }

    public function create()
    {
        $jsonInput = file_get_contents('php://input');
        $data = json_decode($jsonInput, true);

        if ($data) {
            $user = new User();
            $user->setEmail($data['email'] ?? '');
            $user->setName($data['name'] ?? '');
            $user->setPhone($data['phone'] ?? null);
            $user->setUserRoleId($data['userRoleId'] ?? 0);

            $this->userService->create($user);

            echo json_encode(['status' => 'success', 'message' => 'User created successfully']);
        } else {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'Invalid JSON data']);
        }
    }

}
?>