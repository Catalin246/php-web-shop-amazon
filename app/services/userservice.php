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

    function getUserByEmail($email)
    {
        $repository = new UserRepository();
        $user = $repository->getUserByEmail($email);
        return $user;
    }

    public function create($user)
    {
        $repository = new UserRepository();
        $repository->create($user);
    }

    public function getUserById($userId)
    {
        $repository = new UserRepository();
        $user = $repository->getUserById($userId);
        return $user;
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