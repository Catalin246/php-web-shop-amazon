<?php

class Article
{
    private int $id;
    private ?int $categoryId;
    private ?string $name;
    private ?string $description;
    private ?string $image;
    private float $price;
    private float $discount;
    private int $numSales;
    private ?int $amount;
    private ?int $display;

    /**
     * Article constructor.
     *
     * @param array $articleData
     */
    public function __construct(array $articleData)
    {
        $this->setId($articleData['id'] ?? 0);
        $this->setCategoryId($articleData['category_id'] ?? null);
        $this->setName($articleData['name'] ?? null);
        $this->setDescription($articleData['description'] ?? null);
        $this->setImage($articleData['image'] ?? null);
        $this->setPrice($articleData['price'] ?? 0.0);
        $this->setNumSales($articleData['num_sales'] ?? 0);
        $this->setAmount($articleData['amount'] ?? null);
        $this->setDisplay($articleData['display'] ?? null);
    }

    /**
     * Get the article data as an array.
     *
     * @return array
     */
    public function toArray(): array
    {
        return [
            'id' => $this->id,
            'category_id' => $this->categoryId,
            'name' => $this->name,
            'description' => $this->description,
            'image' => $this->image,
            'price' => $this->price,
            'num_sales' => $this->numSales,
            'amount' => $this->amount,
            'display' => $this->display,
        ];
    }

    /**
     * Get the value of id.
     *
     * @return int
     */
    public function getId(): int
    {
        return $this->id;
    }

    /**
     * Set the value of id.
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
     * Get the value of category_id.
     *
     * @return int|null
     */
    public function getCategoryId(): ?int
    {
        return $this->categoryId;
    }

    /**
     * Set the value of category_id.
     *
     * @param int|null $categoryId
     *
     * @return self
     */
    public function setCategoryId(?int $categoryId): self
    {
        $this->categoryId = $categoryId;

        return $this;
    }

    /**
     * Get the value of name.
     *
     * @return string|null
     */
    public function getName(): ?string
    {
        return $this->name;
    }

    /**
     * Set the value of name.
     *
     * @param string|null $name
     *
     * @return self
     */
    public function setName(?string $name): self
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get the value of description.
     *
     * @return string|null
     */
    public function getDescription(): ?string
    {
        return $this->description;
    }

    /**
     * Set the value of description.
     *
     * @param string|null $description
     *
     * @return self
     */
    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }

    /**
     * Get the value of image.
     *
     * @return string|null
     */
    public function getImage(): ?string
    {
        return $this->image;
    }

    /**
     * Set the value of image.
     *
     * @param string|null $image
     *
     * @return self
     */
    public function setImage(?string $image): self
    {
        $this->image = $image;

        return $this;
    }

    /**
     * Get the value of price.
     *
     * @return float
     */
    public function getPrice(): float
    {
        return $this->price;
    }

    /**
     * Set the value of price.
     *
     * @param float $price
     *
     * @return self
     */
    public function setPrice(float $price): self
    {
        $this->price = $price;

        return $this;
    }

    /**
     * Get the value of num_sales.
     *
     * @return int
     */
    public function getNumSales(): int
    {
        return $this->numSales;
    }

    /**
     * Set the value of num_sales.
     *
     * @param int $numSales
     *
     * @return self
     */
    public function setNumSales(int $numSales): self
    {
        $this->numSales = $numSales;

        return $this;
    }

    /**
     * Get the value of amount.
     *
     * @return int|null
     */
    public function getAmount(): ?int
    {
        return $this->amount;
    }

    /**
     * Set the value of amount.
     *
     * @param int|null $amount
     *
     * @return self
     */
    public function setAmount(?int $amount): self
    {
        $this->amount = $amount;

        return $this;
    }

    /**
     * Get the value of display.
     *
     * @return int|null
     */
    public function getDisplay(): ?int
    {
        return $this->display;
    }

    /**
     * Set the value of display.
     *
     * @param int|null $display
     *
     * @return self
     */
    public function setDisplay(?int $display): self
    {
        $this->display = $display;

        return $this;
    }
}

?>