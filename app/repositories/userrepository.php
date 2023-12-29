<?php
require __DIR__ . '/repository.php';
require __DIR__ . '/../models/user.php';

class UserRepository extends Repository
{
    function create($user)
    {
        try {
            $stmt = $this->connection->prepare("INSERT INTO users (email, first_name, last_name, phone, user_role_id) VALUES (?, ?, ?, ?, ?)");

            $stmt->execute([
                $user->getEmail(),
                $user->getFirstName(),
                $user->getLastName(),
                $user->getPhone(),
                $user->getUserRoleId()
            ]);

        } catch (PDOException $e) {
            echo $e;
        }
    }
}