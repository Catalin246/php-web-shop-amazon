<?php

session_start();
class CategoryController
{
    function __construct()
    {
    }

    public function index()
    {
        $this->checkUserRole('/../views/category/index.php');
    }

    public function add()
    {
        $this->checkUserRole('/../views/category/add.php');
    }

    public function edit()
    {
        $this->checkUserRole('/../views/category/edit.php');
    }

    private function checkUserRole(string $path)
    {
        if (isset($_SESSION['user'])) {
            if ($_SESSION['user']['user_role_id'] == 2) {
                require __DIR__ . $path;
            } else {
                http_response_code(403);
                echo 'Forbidden';
                exit();
            }
        } else {
            http_response_code(404);
            echo 'Not Found';
            exit();
        }
    }
}