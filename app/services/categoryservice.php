<?php
require __DIR__ . '/../repositories/categoryrepository.php';

class CategoryService
{
    public function getAll()
    {
        $repository = new CategoryRepository();
        $categories = $repository->getAll();
        return $categories;
    }

    public function getCategoryById($categoryId)
    {
        $repository = new CategoryRepository();
        $category = $repository->getCategoryById($categoryId);
        return $category;
    }

    public function create($category)
    {
        $repository = new CategoryRepository();
        $repository->create($category);
    }

    public function update($category)
    {
        $repository = new CategoryRepository();
        $repository->update($category);
    }

    public function delete($categoryId)
    {
        $repository = new CategoryRepository();
        $repository->delete($categoryId);
    }
}
?>