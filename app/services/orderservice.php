<?php
require __DIR__ . '/../repositories/orderrepository.php';


class OrderService
{
    public function getAll()
    {
        $repository = new OrderRepository();
        $orders = $repository->getAll();
        return $orders;
    }

    public function getById($orderId)
    {
        $repository = new OrderRepository();
        $order = $repository->getById($orderId);
        return $order;
    }

    function getByEmail($email)
    {
        $repository = new OrderRepository();
        $order = $repository->getByEmail($email);
        return $order;
    }

    public function create($order)
    {
        $repository = new OrderRepository();
        $repository->create($order);
    }

    public function update($order)
    {
        $repository = new OrderRepository();
        $repository->update($order);
    }

    public function delete($orderId)
    {
        $repository = new OrderRepository();
        $repository->delete($orderId);
    }
}

?>