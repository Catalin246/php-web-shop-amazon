<?php

session_start();

class PaymentController
{
    function __construct()
    {
        // Check if user is logged in
        if (!isset($_SESSION['user'])) {
            // Not logged in, set a session flag to show a login required message
            $_SESSION['login_required'] = true;
            // Redirect to login page
            header("Location: /login");
            exit();
        }
    }

    public function index()
    {
        // Include payment view
        require __DIR__ . '/../views/payment/index.php';
    }
}
