<?php

session_start();
class PaymentController
{
    function __construct()
    {
    }

    public function index()
    {
        require __DIR__ . '/../views/payment/index.php';
    }
}