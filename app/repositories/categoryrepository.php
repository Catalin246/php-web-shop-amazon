<?php

require __DIR__ . '/repository.php';
require __DIR__ . '/../models/category.php';

class CategoryRepository extends Repository
{
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

    public function getById($categoryId)
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

    public function create($category)
    {
        try {
            $stmt = $this->connection->prepare("INSERT INTO category (name, description, display, image_url) VALUES (?, ?, ?, ?)");

            $stmt->execute([
                $category->getName(),
                $category->getDescription(),
                $category->getDisplay(),
                $category->getImageUrl()
            ]);
        } catch (PDOException $e) {
            echo $e;
        }
    }

    public function update($category)
    {
        try {
            $stmt = $this->connection->prepare("UPDATE category SET name = :name, description = :description, display = :display, image_url = :image_url WHERE id = :id");

            $stmt->bindValue(':name', $category->getName());
            $stmt->bindValue(':description', $category->getDescription());
            $stmt->bindValue(':display', $category->getDisplay() ? 1 : 0);
            $stmt->bindValue(':image_url', $category->getImageUrl());
            $stmt->bindValue(':id', $category->getId());

            $stmt->execute();
        } catch (PDOException $e) {
            echo $e;
        }
    }

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