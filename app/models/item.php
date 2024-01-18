<?php

class Item
{
    private int $id;
    private int $orderId;
    private int $articleId;
    private int $quantity;

    /**
     * Item constructor.
     *
     * @param array $itemData
     */
    public function __construct(array $itemData)
    {
        $this->setId($itemData['id'] ?? 0);
        $this->setOrderId($itemData['order_id'] ?? 0);
        $this->setArticleId($itemData['article_id'] ?? 0);
        $this->setQuantity($itemData['quantity'] ?? 0);
    }

    /**
     * Get the item data as an array.
     *
     * @return array
     */
    public function toArray(): array
    {
        return [
            'id' => $this->id,
            'order_id' => $this->orderId,
            'article_id' => $this->articleId,
            'quantity' => $this->quantity,
        ];
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
     * Get the value of orderId
     *
     * @return int
     */
    public function getOrderId(): int
    {
        return $this->orderId;
    }

    /**
     * Set the value of orderId
     *
     * @param int $orderId
     *
     * @return self
     */
    public function setOrderId(int $orderId): self
    {
        $this->orderId = $orderId;

        return $this;
    }

    /**
     * Get the value of articleId
     *
     * @return int
     */
    public function getArticleId(): int
    {
        return $this->articleId;
    }

    /**
     * Set the value of articleId
     *
     * @param int $articleId
     *
     * @return self
     */
    public function setArticleId(int $articleId): self
    {
        $this->articleId = $articleId;

        return $this;
    }

    /**
     * Get the value of quantity
     *
     * @return int
     */
    public function getQuantity(): int
    {
        return $this->quantity;
    }

    /**
     * Set the value of quantity
     *
     * @param int $quantity
     *
     * @return self
     */
    public function setQuantity(int $quantity): self
    {
        $this->quantity = $quantity;

        return $this;
    }
}

?>