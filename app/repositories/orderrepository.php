<?php
require __DIR__ . '/repository.php';
require __DIR__ . '/../models/order.php';

class OrderRepository extends Repository
{
    function getAll()
    {
        try {
            $stmt = $this->connection->prepare("SELECT * FROM `order`");
            $stmt->execute();

            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

            return $result ? $result : [];
        } catch (PDOException $e) {
            echo $e;
            return [];
        }
    }

    public function getById($orderId)
    {
        try {
            $stmt = $this->connection->prepare("SELECT * FROM `order` WHERE id = ?");
            $stmt->execute([$orderId]);

            $result = $stmt->fetch(PDO::FETCH_ASSOC);

            return $result ? $result : null;
        } catch (PDOException $e) {
            echo $e;
            return null;
        }
    }

    public function create($order)
    {
        try {
            $stmt = $this->connection->prepare("INSERT INTO `order` (delivered, paid, user_id) VALUES (?, ?, ?)");

            $delivered = $order->isDelivered() ? 1 : 0;
            $paid = $order->isPaid() ? 1 : 0;

            $stmt->execute([$delivered, $paid, $order->getUserId()]);
        } catch (PDOException $e) {
            echo $e;
        }
    }


    public function update($order)
    {
        try {
            $stmt = $this->connection->prepare("UPDATE `order` SET delivered = :delivered, paid = :paid, user_id = :user_id WHERE id = :id");

            $stmt->bindValue(':delivered', $order->isDelivered());
            $stmt->bindValue(':paid', $order->isPaid());
            $stmt->bindValue(':user_id', $order->getUserId());
            $stmt->bindValue(':id', $order->getId());

            $stmt->execute();

        } catch (PDOException $e) {
            echo $e;
        }
    }


    public function delete($orderId)
    {
        try {
            $stmt = $this->connection->prepare("DELETE FROM `order` WHERE id = ?");
            $stmt->execute([$orderId]);
        } catch (PDOException $e) {
            echo $e;
        }
    }
}