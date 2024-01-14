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

    public function user()
    {
        $this->checkUserRole('/../views/admin/user.php');
    }

    public function article()
    {
        $this->checkUserRole('/../views/admin/article.php');
    }

    public function category()
    {
        $this->checkUserRole('/../views/admin/category.php');
    }

    public function order()
    {
        $this->checkUserRole('/../views/admin/order.php');
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