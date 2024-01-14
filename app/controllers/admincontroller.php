<?php

session_start();
class AdminController
{
    function __construct()
    {
    }

    public function index()
    {
        require __DIR__ . '/../views/admin/index.php';
    }
}