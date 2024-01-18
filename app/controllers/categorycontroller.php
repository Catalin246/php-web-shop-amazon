<?php

session_start();
class CategoryController
{
    function __construct()
    {
    }

    public function index()
    {
        $this->checkCategoryRole('/../views/category/index.php');
    }

    public function add()
    {
        $this->checkCategoryRole('/../views/category/add.php');
    }

    public function edit()
    {
        $this->checkCategoryRole('/../views/category/edit.php');
    }

    private function checkCategoryRole(string $path)
    {
        if (isset($_SESSION['category'])) {
            if ($_SESSION['category']['category_role_id'] == 2) {
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