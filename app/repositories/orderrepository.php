<?php
require __DIR__ . '/repository.php';
require __DIR__ . '/../models/order.php';

class OrderRepository extends Repository
{
    public function getAll()
    {
        try {
            $stmt = $this->connection->prepare("SELECT o.*, i.id as item_id, i.article_id, i.quantity FROM `order` o LEFT JOIN item i ON o.id = i.order_id");
            $stmt->execute();

            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

            $orders = [];
            foreach ($result as $row) {
                $orderId = $row['id'];
                if (!isset($orders[$orderId])) {
                    $orders[$orderId] = [
                        'id' => $row['id'],
                        'delivered' => $row['delivered'],
                        'paid' => $row['paid'],
                        'user_id' => $row['user_id'],
                        'items' => [],
                    ];
                }

                if ($row['item_id'] !== null) {
                    $orders[$orderId]['items'][] = [
                        'id' => $row['item_id'],
                        'article_id' => $row['article_id'],
                        'quantity' => $row['quantity'],
                    ];
                }
            }

            return array_values($orders);

        } catch (PDOException $e) {
            echo $e;
            return [];
        }
    }

    public function getById($orderId)
    {
        try {
            $stmt = $this->connection->prepare("SELECT o.*, i.id as item_id, i.article_id, i.quantity FROM `order` o LEFT JOIN item i ON o.id = i.order_id WHERE o.id = ?");
            $stmt->execute([$orderId]);

            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

            $order = null;
            foreach ($result as $row) {
                if ($order === null) {
                    $order = [
                        'id' => $row['id'],
                        'delivered' => $row['delivered'],
                        'paid' => $row['paid'],
                        'user_id' => $row['user_id'],
                        'items' => [],
                    ];
                }

                if ($row['item_id'] !== null) {
                    $order['items'][] = [
                        'id' => $row['item_id'],
                        'article_id' => $row['article_id'],
                        'quantity' => $row['quantity'],
                    ];
                }
            }

            return $order;

        } catch (PDOException $e) {
            echo $e;
            return null;
        }
    }


    public function create($order)
    {
        try {
            $this->connection->beginTransaction();

            $stmtOrder = $this->connection->prepare("INSERT INTO `order` (delivered, paid, user_id) VALUES (?, ?, ?)");
            $delivered = $order->getDelivered() ? 1 : 0;
            $paid = $order->getPaid() ? 1 : 0;
            $stmtOrder->execute([$delivered, $paid, $order->getUserId()]);

            $orderId = $this->connection->lastInsertId();

            $stmtItem = $this->connection->prepare("INSERT INTO item (order_id, article_id, quantity) VALUES (?, ?, ?)");
            foreach ($order->getItems() as $item) {
                $stmtItem->execute([$orderId, $item->getArticleId(), $item->getQuantity()]);
            }

            $this->connection->commit();

        } catch (PDOException $e) {
            $this->connection->rollBack();
            echo $e;
        }
    }

    public function update($order)
    {
        try {
            $this->connection->beginTransaction();

            $stmtOrder = $this->connection->prepare("UPDATE `order` SET delivered = :delivered, paid = :paid, user_id = :user_id WHERE id = :id");
            $stmtOrder->bindValue(':delivered', $order->getDelivered());
            $stmtOrder->bindValue(':paid', $order->getPaid() ? 1 : 0);
            $stmtOrder->bindValue(':user_id', $order->getUserId());
            $stmtOrder->bindValue(':id', $order->getId());
            $stmtOrder->execute();

            $stmtDeleteItems = $this->connection->prepare("DELETE FROM item WHERE order_id = ?");
            $stmtDeleteItems->execute([$order->getId()]);

            $stmtInsertItems = $this->connection->prepare("INSERT INTO item (order_id, article_id, quantity) VALUES (?, ?, ?)");
            foreach ($order->getItems() as $item) {
                $stmtInsertItems->execute([$order->getId(), $item->getArticleId(), $item->getQuantity()]);
            }

            $this->connection->commit();

        } catch (PDOException $e) {
            $this->connection->rollBack();
            echo $e;
        }
    }

    public function delete($orderId)
    {
        try {
            $this->connection->beginTransaction();

            $stmtDeleteItems = $this->connection->prepare("DELETE FROM item WHERE order_id = ?");
            $stmtDeleteItems->execute([$orderId]);

            $stmtDeleteOrder = $this->connection->prepare("DELETE FROM `order` WHERE id = ?");
            $stmtDeleteOrder->execute([$orderId]);

            $this->connection->commit();

        } catch (PDOException $e) {
            $this->connection->rollBack();
            echo $e;
        }
    }

}