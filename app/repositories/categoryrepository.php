<?php

require __DIR__ . '/repository.php';
require __DIR__ . '/../models/category.php';

class CategoryRepository extends Repository
{
    // Get all categories
    public function getAll()
    {
        try {
            $stmt = $this->connection->prepare("SELECT * FROM category");
            $stmt->execute();

            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

            return $result ? $result : [];
        } catch (PDOException $e) {
            echo $e;
            return [];
        }
    }

    // Get a category by ID
    public function getCategoryById($categoryId)
    {
        try {
            $stmt = $this->connection->prepare("SELECT * FROM category WHERE id = ?");
            $stmt->execute([$categoryId]);

            $result = $stmt->fetch(PDO::FETCH_ASSOC);

            return $result ? $result : null;
        } catch (PDOException $e) {
            echo $e;
            return null;
        }
    }

    // Create a new category
    public function create($category)
    {
        try {
            $stmt = $this->connection->prepare("INSERT INTO category (name, description, display) VALUES (?, ?, ?)");

            $stmt->execute([
                $category->getName(),
                $category->getDescription(),
                $category->getDisplay()
            ]);
        } catch (PDOException $e) {
            echo $e;
        }
    }

    // Update a category
    public function update($category)
    {
        try {
            $stmt = $this->connection->prepare("UPDATE category SET name = ?, description = ?, display = ? WHERE id = ?");

            $stmt->execute([
                $category->getName(),
                $category->getDescription(),
                $category->getDisplay() ? 1 : 0,
                $category->getId()
            ]);
        } catch (PDOException $e) {
            echo $e;
        }
    }

    // Delete a category by ID
    public function delete($categoryId)
    {
        try {
            $stmt = $this->connection->prepare("DELETE FROM category WHERE id = ?");
            $stmt->execute([$categoryId]);
        } catch (PDOException $e) {
            echo $e;
        }
    }
}

?>