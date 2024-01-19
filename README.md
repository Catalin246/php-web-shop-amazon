# php-web-shop-amazon

This repository demonstrates the implementation of the MVC design pattern using PHP. It includes a user page that allows customers to shop, similar to other commercial websites. The application's design is inspired by Amazon.com, although some elements may differ. Additionally, the application provides an admin page where administrators can manage stock and users. You can use the same login screen to acces both of them.

It contains a docker configuration with:

- NGINX webserver
- PHP FastCGI Process Manager with PDO MySQL support
- MariaDB (GPL MySQL fork)
- PHPMyAdmin

## Installation

1. Install Docker Desktop on Windows or Mac, or Docker Engine on Linux.
2. Clone the project: https://github.com/Catalin246/php-web-shop-amazon
3. Install npm

In a terminal, run:

`npm install`

4. Install webpack

In a terminal, run:

`npm install -g webpack webpack-cli`

5. Bundle the css and javascript

In a terminal, run:

`npm run watch`

6. Run the project

In a terminal, run:

`docker-compose up`

NGINX will now serve files in the app/public folder. Visit localhost in your browser to check.
PHPMyAdmin is accessible on localhost:8080

If you want to stop the containers, press Ctrl+C.
Or run:

`docker-compose down`

## Login credentials

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

## Features provided

## Additional features should be implemented to enhance the overall quality of the project.
