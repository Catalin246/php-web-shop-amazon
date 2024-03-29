<?php

class Category
{
    private int $id;
    private string $name;
    private string $description;
    private bool $display;

    private string $image_url;

    /**
     * Category constructor.
     *
     * @param array $categoryData
     */
    public function __construct(array $categoryData)
    {
        $this->setName($categoryData['name'] ?? '');
        $this->setDescription($categoryData['description'] ?? '');
        $this->setDisplay($categoryData['display'] ?? false);
        $this->setImageUrl($categoryData['image_url'] ?? false);
    }

    /**
     * Get the category data as an array.
     *
     * @return array
     */
    public function toArray(): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'description' => $this->description,
            'display' => $this->display,
            'image_url' => $this->image_url
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
     * Get the value of description
     *
     * @return string
     */
    public function getDescription(): string
    {
        return $this->description;
    }

    /**
     * Set the value of description
     *
     * @param string $description
     *
     * @return self
     */
    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    /**
     * Get the value of display
     *
     * @return bool
     */
    public function getDisplay(): bool
    {
        return $this->display;
    }

    /**
     * Set the value of display
     *
     * @param bool $display
     *
     * @return self
     */
    public function setDisplay(bool $display): self
    {
        $this->display = $display;

        return $this;
    }

    /**
     * Get the value of image url
     *
     * @return string
     */
    public function getImageUrl(): string
    {
        return $this->image_url;
    }

    /**
     * Set the value of description
     *
     * @param string $image_url
     *
     * @return self
     */
    public function setImageUrl(string $image_url): self
    {
        $this->image_url = $image_url;

        return $this;
    }
}

?>