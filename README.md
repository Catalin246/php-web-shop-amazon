# php-web-shop-amazon

This repository demonstrates how the MVC design pattern can be implemented using PHP.

It contains a docker configuration with:

- NGINX webserver
- PHP FastCGI Process Manager with PDO MySQL support
- MariaDB (GPL MySQL fork)
- PHPMyAdmin

## Installation

1. Install Docker Desktop on Windows or Mac, or Docker Engine on Linux.
2. Clone the project
3. Install npm

```bash
npm install
```

4. Install webpack

```bash
npm install -g webpack webpack-cli
```

5. Start the project

In a terminal, run:

```bash
docker-compose up
```

NGINX will now serve files in the app/public folder. Visit localhost in your browser to check.
PHPMyAdmin is accessible on localhost:8080

If you want to stop the containers, press Ctrl+C.
Or run:

```bash
docker-compose down
```

## Credentials

- Database:

  - user
    - username: root
    - password: secret123

- Application:

  - admin:
    - username: admin@example.com
    - password: password
  - user:
    - username: catalin@example.com
    - password: password
