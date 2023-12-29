<?php
class LoginController
{

    public function signIn()
    {
        require __DIR__ . '/../views/login/sign-in.php';
    }
    public function register()
    {
        require __DIR__ . '/../views/login/register.php';
    }
}