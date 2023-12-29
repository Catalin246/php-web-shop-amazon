<?php
require __DIR__ . '/repository.php';
require __DIR__ . '/../models/user.php';

class UserRepository extends Repository
{
    function getAll()
    {
        try {
            $stmt = $this->connection->prepare("SELECT * FROM users");
            $stmt->execute();

            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

            return $result ? $result : [];
        } catch (PDOException $e) {
            echo $e;
            return [];
        }
    }

    function create($user)
    {
        try {
            $stmt = $this->connection->prepare("INSERT INTO users (email, name, phone, user_role_id) VALUES (?, ?, ?, ?)");

            $stmt->execute([
                $user->getEmail(),
                $user->getName(),
                $user->getPhone(),
                $user->getUserRoleId()
            ]);

        } catch (PDOException $e) {
            echo $e;
        }
    }
}