<?php

session_start();
class OrderController
{
    function __construct()
    {
    }

    public function index()
    {
        $this->checkOrderRole('/../views/order/index.php');
    }

    private function checkOrderRole(string $path)
    {
        if (isset($_SESSION['order'])) {
            if ($_SESSION['order']['order_role_id'] == 2) {
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