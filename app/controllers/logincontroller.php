<?php

session_start();
require __DIR__ . '/../services/userservice.php';
class LoginController
{
    private $userService;

    function __construct()
    {
        $this->userService = new UserService();
    }

    public function index()
    {
        require __DIR__ . '/../views/login/index.php';
    }

    public function signIn()
    {
        if (isset($_POST['email']) && isset($_POST['password'])) {
            $email = $_POST['email'];
            $password = $_POST['password'];

            $user = new User($this->userService->getUserByEmail($email));

            if ($user && $password === $user->getPassword()) {
                if ($user->getUserRoleId() == 1) {
                    $redirectTo = '/';
                    $_SESSION['user'] = $user->toArray();
                } else {
                    $redirectTo = '/admin';
                }

                header("Location: $redirectTo");
                exit();
            } else {
                http_response_code(401);
                echo 'Invalid email or password.';
                exit();
            }
        } else {
            http_response_code(400);
            echo 'Email and password are required.';
            exit();
        }
    }

    public function register()
    {
        require __DIR__ . '/../views/login/register.php';
    }

    public function logout()
    {
        session_destroy();

        $redirectTo = '/';
        header("Location: $redirectTo");
        exit();
    }
}