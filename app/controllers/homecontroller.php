<?php
class HomeController
{

    public function index()
    {
        require __DIR__ . '/../views/home/index.php';
    }

    public function category()
    {
        require __DIR__ . '/../views/home/category.php';
    }
}