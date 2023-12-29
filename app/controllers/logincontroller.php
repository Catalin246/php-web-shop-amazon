<?php
class LoginController
{

    public function index()
    {
        require __DIR__ . '/../views/login/index.php';
    }
    public function register()
    {
        require __DIR__ . '/../views/login/register.php';
    }
}