<?php
require __DIR__ . '/../../services/orderservice.php';

class OrderController
{

    private $orderService;

    private $filters = [
        'id' => FILTER_VALIDATE_INT,
        'delivered' => FILTER_VALIDATE_BOOLEAN,
        'paid' => FILTER_VALIDATE_BOOLEAN,
        'user_id' => FILTER_VALIDATE_INT,
        'items' => [
            'filter' => FILTER_CALLBACK,
            'options' => [
                'options' => function ($itemData) {
                        return new Item($itemData);
                    }
            ]
        ]
    ];


    function __construct()
    {
        $this->orderService = new OrderService();
    }

    public function index()
    {
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $this->create();
        } elseif ($_SERVER["REQUEST_METHOD"] == "GET") {
            $id = $_GET['id'] ?? null;

            if ($id !== null) {
                $this->getById($id);
            } else {
                $this->getAll();
            }
        } elseif ($_SERVER["REQUEST_METHOD"] == "PUT") {
            $this->update();
        } elseif ($_SERVER["REQUEST_METHOD"] == "DELETE") {
            $this->delete();
        }
    }

    public function getAll()
    {
        $orders = $this->orderService->getAll();
        echo json_encode(['status' => 'success', 'data' => $orders]);
    }

    public function getById($orderId)
    {
        $order = $this->orderService->getById($orderId);

        if ($order) {
            echo json_encode(['status' => 'success', 'data' => $order]);
        } else {
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'Order not found']);
        }
    }

    public function create()
    {
        $jsonInput = file_get_contents('php://input');
        $data = json_decode($jsonInput, true);

        if ($data !== null) {
            $sanitizedData = filter_var_array($data, $this->filters, false);

            if ($sanitizedData !== false && !in_array(false, $sanitizedData, true)) {
                $order = new Order($sanitizedData);

                $this->orderService->create($order);

                echo json_encode(['status' => 'success', 'message' => 'Order created successfully']);
            } else {
                http_response_code(400);
                echo json_encode(['status' => 'error', 'message' => 'Invalid input data']);
            }
        } else {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'Invalid JSON data']);
        }
    }

    public function update()
    {
        $jsonInput = file_get_contents('php://input');
        $data = json_decode($jsonInput, true);

        $orderId = $_GET['id'] ?? null;

        if ($orderId) {
            $existingOrder = $this->orderService->getById($orderId);

            if ($existingOrder) {
                if ($data !== null) {
                    $sanitizedData = filter_var_array($data, $this->filters, false);

                    if ($sanitizedData !== false && !in_array(false, $sanitizedData, true)) {
                        $updatedOrder = new Order($sanitizedData);
                        $updatedOrder->setId($orderId);

                        $this->orderService->update($updatedOrder);

                        echo json_encode(['status' => 'success', 'message' => 'Order updated successfully', 'order' => $updatedOrder->toArray()]);
                    } else {
                        http_response_code(400);
                        echo json_encode(['status' => 'error', 'message' => 'Invalid input data']);
                    }
                } else {
                    http_response_code(400);
                    echo json_encode(['status' => 'error', 'message' => 'Invalid JSON data']);
                }
            } else {
                http_response_code(404);
                echo json_encode(['status' => 'error', 'message' => 'Order not found']);
            }
        } else {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'Missing Order ID']);
        }
    }

    public function delete()
    {
        $orderId = $_GET['id'] ?? null;

        if ($orderId) {
            $existingOrder = $this->orderService->getById($orderId);

            $this->orderService->delete($orderId);

            if ($existingOrder) {
                echo json_encode(['status' => 'success', 'message' => 'Order deleted successfully']);
                $existingOrder = null;
            } else {
                http_response_code(404);
                echo json_encode(['status' => 'error', 'message' => 'Order not found or already deleted']);
            }
        } else {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'Missing Order ID']);
        }
    }
}
?>