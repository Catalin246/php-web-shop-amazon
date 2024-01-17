<?php
require __DIR__ . '/repository.php';
require __DIR__ . '/../models/article.php';

class ArticleRepository extends Repository
{
    function getAll()
    {
        try {
            $stmt = $this->connection->prepare("SELECT * FROM article");
            $stmt->execute();

            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

            return $result ? $result : [];
        } catch (PDOException $e) {
            echo $e;
            return [];
        }
    }

    public function getById($articleId)
    {
        try {
            $stmt = $this->connection->prepare("SELECT * FROM article WHERE id = ?");
            $stmt->execute([$articleId]);

            $result = $stmt->fetch(PDO::FETCH_ASSOC);

            return $result ? $result : null;
        } catch (PDOException $e) {
            echo $e;
            return null;
        }
    }

    function create($article)
    {
        try {
            $stmt = $this->connection->prepare("INSERT INTO article (category_id, name, description, image, price, discount, num_sales, amount, display) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");

            $stmt->execute([
                $article['category_id'],
                $article['name'],
                $article['description'],
                $article['image'],
                $article['price'],
                $article['discount'],
                $article['num_sales'],
                $article['amount'],
                $article['display']
            ]);

        } catch (PDOException $e) {
            echo $e;
        }
    }

    public function update($article)
    {
        try {
            $stmt = $this->connection->prepare("UPDATE article SET category_id = :category_id, name = :name, description = :description, image = :image, price = :price, discount = :discount, num_sales = :num_sales, amount = :amount, display = :display WHERE id = :id");

            $stmt->bindValue(':category_id', $article->getCategoryId());
            $stmt->bindValue(':name', $article->getName());
            $stmt->bindValue(':description', $article->getDescription());
            $stmt->bindValue(':image', $article->getImage());
            $stmt->bindValue(':price', $article->getPrice());
            $stmt->bindValue(':discount', $article->getDiscount());
            $stmt->bindValue(':num_sales', $article->getNumSales());
            $stmt->bindValue(':amount', $article->getAmount());
            $stmt->bindValue(':display', $article->getDisplay());
            $stmt->bindValue(':id', $article->getId());

            $stmt->execute();
        } catch (PDOException $e) {
            echo $e;
        }
    }


    public function delete($articleId)
    {
        try {
            $stmt = $this->connection->prepare("DELETE FROM article WHERE id = ?");
            $stmt->execute([$articleId]);
        } catch (PDOException $e) {
            echo $e;
        }
    }
}
?>