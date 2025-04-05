<?php

require __DIR__ . '/item.php';

class Order
{
    private int $id;
    private bool $delivered;
    private bool $paid;
    private int $userId;
    private array $items = [];
    private string $name;
    private string $phone;
    private string $deliveryAddress;

    /**
     * Order constructor.
     *
     * @param array $orderData
     */
    public function __construct(array $orderData)
    {
        $this->setId($orderData['id'] ?? 0);
        $this->setDelivered($orderData['delivered'] ?? false);
        $this->setPaid($orderData['paid'] ?? false);
        $this->setUserId($orderData['user_id'] ?? 0);
        $this->setName($orderData['name'] ?? '');
        $this->setPhone($orderData['phone'] ?? '');
        $this->setDeliveryAddress($orderData['delivery_address'] ?? '');

        if (isset($orderData['items']) && is_array($orderData['items'])) {
            foreach ($orderData['items'] as $itemData) {
                $this->addItem(new Item($itemData));
            }
        }
    }

    /**
     * Get the order data as an array.
     *
     * @return array
     */
    public function toArray(): array
    {
        $orderArray = [
            'id' => $this->id,
            'delivered' => $this->delivered,
            'paid' => $this->paid,
            'user_id' => $this->userId,
            'name' => $this->name,
            'phone' => $this->phone,
            'delivery_address' => $this->deliveryAddress,
            'items' => [],
        ];

        foreach ($this->items as $item) {
            $orderArray['items'][] = $item->toArray();
        }

        return $orderArray;
    }

    /**
     * Get the value of id
     *
     * @return int
     */
    public function getId(): int
    {
        return $this->id;
    }

    /**
     * Set the value of id
     *
     * @param int $id
     *
     * @return self
     */
    public function setId(int $id): self
    {
        $this->id = $id;

        return $this;
    }

    /**
     * Get the value of delivered
     *
     * @return bool
     */
    public function getDelivered(): bool
    {
        return $this->delivered;
    }

    /**
     * Set the value of delivered
     *
     * @param bool $delivered
     *
     * @return self
     */
    public function setDelivered(bool $delivered): self
    {
        $this->delivered = $delivered;

        return $this;
    }

    /**
     * Get the value of paid
     *
     * @return bool
     */
    public function getPaid(): bool
    {
        return $this->paid;
    }

    /**
     * Set the value of paid
     *
     * @param bool $paid
     *
     * @return self
     */
    public function setPaid(bool $paid): self
    {
        $this->paid = $paid;

        return $this;
    }

    /**
     * Get the value of userId
     *
     * @return int
     */
    public function getUserId(): int
    {
        return $this->userId;
    }

    /**
     * Set the value of userId
     *
     * @param int $userId
     *
     * @return self
     */
    public function setUserId(int $userId): self
    {
        $this->userId = $userId;

        return $this;
    }

    /**
     * Get the array of items
     *
     * @return array
     */
    public function getItems(): array
    {
        return $this->items;
    }

    /**
     * Add an item to the order
     *
     * @param Item $item
     *
     * @return self
     */
    public function addItem(Item $item): self
    {
        $this->items[] = $item;

        return $this;
    }

    /**
     * Get the value of name
     *
     * @return string
     */
    public function getName(): string
    {
        return $this->name;
    }

    /**
     * Set the value of name
     *
     * @param string $name
     *
     * @return self
     */
    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get the value of phone
     *
     * @return string
     */
    public function getPhone(): string
    {
        return $this->phone;
    }

    /**
     * Set the value of phone
     *
     * @param string $phone
     *
     * @return self
     */
    public function setPhone(string $phone): self
    {
        $this->phone = $phone;

        return $this;
    }

    /**
     * Get the value of delivery address
     *
     * @return string
     */
    public function getDeliveryAddress(): string
    {
        return $this->deliveryAddress;
    }

    /**
     * Set the value of delivery address
     *
     * @param string $deliveryAddress
     *
     * @return self
     */
    public function setDeliveryAddress(string $deliveryAddress): self
    {
        $this->deliveryAddress = $deliveryAddress;

        return $this;
    }
}
