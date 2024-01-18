<?php

session_start();
class ArticleController
{
    function __construct()
    {
    }

    public function index()
    {
        $this->checkArticleRole('/../views/article/index.php');
    }

    public function add()
    {
        $this->checkArticleRole('/../views/article/add.php');
    }

    public function edit()
    {
        $this->checkArticleRole('/../views/article/edit.php');
    }

    private function checkArticleRole(string $path)
    {
        if (isset($_SESSION['article'])) {
            if ($_SESSION['article']['article_role_id'] == 2) {
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