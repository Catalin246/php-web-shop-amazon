<?php
require __DIR__ . '/repository.php';
require __DIR__ . '/../models/user.php';

class UserRepository extends Repository
{
    function getAll()
    {
        try {
            $stmt = $this->connection->prepare("SELECT * FROM user");
            $stmt->execute();

            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

            return $result ? $result : [];
        } catch (PDOException $e) {
            echo $e;
            return [];
        }
    }

    function getUserByEmail($email)
    {
        try {
            $stmt = $this->connection->prepare("SELECT * FROM user WHERE email = ?");
            $stmt->execute([$email]);

            $result = $stmt->fetch(PDO::FETCH_ASSOC);

            return $result ? $result : null;
        } catch (PDOException $e) {
            echo $e;
            return null;
        }
    }

    function create($user)
    {
        try {
            $stmt = $this->connection->prepare("INSERT INTO user (email, name, phone, user_role_id, `password`) VALUES (?, ?, ?, ?, ?)");

            $stmt->execute([
                $user->getEmail(),
                $user->getName(),
                $user->getPhone(),
                $user->getUserRoleId(),
                $user->getPassword()
            ]);

        } catch (PDOException $e) {
            echo $e;
        }
    }

    public function getUserById($userId)
    {
        try {
            $stmt = $this->connection->prepare("SELECT * FROM user WHERE id = ?");
            $stmt->execute([$userId]);

            $result = $stmt->fetch(PDO::FETCH_ASSOC);

            return $result ? $result : null;
        } catch (PDOException $e) {
            echo $e;
            return null;
        }
    }

    // Update a user
    public function update($user)
    {
        try {

        } catch (PDOException $e) {
            echo $e;
        }
    }

    // Delete a user by ID
    public function delete($userId)
    {
        try {
            $stmt = $this->connection->prepare("DELETE FROM user WHERE id = ?");
            $stmt->execute([$userId]);
        } catch (PDOException $e) {
            echo $e;
        }
    }
}