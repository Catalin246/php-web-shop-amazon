<?php

class User
{
    private int $id;
    private string $email;
    private string $name;
    private string $lastName;
    private string $phone;
    private int $userRoleId;
    private string $password;

    /**
     * User constructor.
     *
     * @param array $userData
     */
    public function __construct(array $userData)
    {
        $this->setId($userData['id'] ?? 0);
        $this->setEmail($userData['email'] ?? '');
        $this->setName($userData['name'] ?? '');
        $this->setPhone($userData['phone'] ?? '');
        $this->setUserRoleId($userData['userRoleId'] ?? 0);
        $this->setPassword($userData['password'] ?? '');
    }

    /**
     * Get the user data as an array.
     *
     * @return array
     */
    public function toArray(): array
    {
        return [
            'id' => $this->id,
            'email' => $this->email,
            'name' => $this->name,
            'phone' => $this->phone,
            'user_role_id' => $this->userRoleId,
            'password' => $this->password,
        ];
    }

    /**
     * Get the value of id
     *
     * @return int
     */
    public function getId(): int
    {
        return $this->id;
    }

    /**
     * Set the value of id
     *
     * @param int $id
     *
     * @return self
     */
    public function setId(int $id): self
    {
        $this->id = $id;

        return $this;
    }

    /**
     * Get the value of email
     *
     * @return string
     */
    public function getEmail(): string
    {
        return $this->email;
    }

    /**
     * Set the value of email
     *
     * @param string $email
     *
     * @return self
     */
    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    /**
     * Get the value of name
     *
     * @return string
     */
    public function getName(): string
    {
        return $this->name;
    }

    /**
     * Set the value of name
     *
     * @param string $name
     *
     * @return self
     */
    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get the value of phone
     *
     * @return string
     */
    public function getPhone(): string
    {
        return $this->phone;
    }

    /**
     * Set the value of phone
     *
     * @param string $phone
     *
     * @return self
     */
    public function setPhone(string $phone): self
    {
        $this->phone = $phone;

        return $this;
    }

    /**
     * Get the value of userRoleId
     *
     * @return int
     */
    public function getUserRoleId(): int
    {
        return $this->userRoleId;
    }

    /**
     * Set the value of userRoleId
     *
     * @param int $userRoleId
     *
     * @return self
     */
    public function setUserRoleId(int $userRoleId): self
    {
        $this->userRoleId = $userRoleId;

        return $this;
    }

    /**
     * Get the value of password
     *
     * @return string
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    /**
     * Set the value of password
     *
     * @param string $password
     *
     * @return self
     */
    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }
}

?>