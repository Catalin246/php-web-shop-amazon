<?php
require __DIR__ . '/../repositories/userrepository.php';


class UserService
{
    public function getAll()
    {
        $repository = new UserRepository();
        $users = $repository->getAll();
        return $users;
    }

    public function getById($userId)
    {
        $repository = new UserRepository();
        $user = $repository->getById($userId);
        return $user;
    }

    function getByEmail($email)
    {
        $repository = new UserRepository();
        $user = $repository->getByEmail($email);
        return $user;
    }

    public function create($user)
    {
        $repository = new UserRepository();
        $repository->create($user);
    }

    public function update($user)
    {
        $repository = new UserRepository();
        $repository->update($user);
    }

    public function delete($userId)
    {
        $repository = new UserRepository();
        $repository->delete($userId);
    }
}

?>