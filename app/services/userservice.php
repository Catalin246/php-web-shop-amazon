<?php
require __DIR__ . '/../repositories/userrepository.php';


class UserService
{
    public function create($user)
    {
        $repository = new UserRepository();
        $repository->create($user);
    }
}

?>