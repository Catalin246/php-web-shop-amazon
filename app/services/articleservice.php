<?php
require __DIR__ . '/../repositories/articlerepository.php';

class ArticleService
{
    public function getAll()
    {
        $repository = new ArticleRepository();
        $articles = $repository->getAll();
        return $articles;
    }

    public function getById($articleId)
    {
        $repository = new ArticleRepository();
        $article = $repository->getById($articleId);
        return $article;
    }

    public function create($articleData)
    {
        $repository = new ArticleRepository();
        $article = new Article($articleData);
        $repository->create($article->toArray());
    }

    public function update($article)
    {
        $repository = new ArticleRepository();
        $repository->update($article);
    }

    public function delete($articleId)
    {
        $repository = new ArticleRepository();
        $repository->delete($articleId);
    }
}
?>