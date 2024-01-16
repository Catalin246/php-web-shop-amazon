<?php

session_start();
class AdminController
{
    function __construct()
    {
    }

    public function index()
    {
        $this->checkUserRole('/../views/admin/index.php');
    }

    private function checkUserRole(string $path)
    {
        if (isset($_SESSION['user'])) {
            if ($_SESSION['user']['user_role_id'] == 2) {
                require __DIR__ . $path;
            } else {
                http_response_code(403);
                require __DIR__ . '/../views/response/403.php';
                exit();
            }
        } else {
            http_response_code(404);
            require __DIR__ . '/../views/response/404.php';
            exit();
        }
    }
}