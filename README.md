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

`npm install`

4. Install webpack

`npm install -g webpack webpack-cli`

5. Run the project and build the project

`docker-compose up --build`

6. Bundle the css and javascript

`npm run watch`

You are ready to explore the wewsite!

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

1. Login, Register functionalities are provided;
2. User roles (customer, admin); As a customer you don't have access to the admin page;
3. The application has an API for data manipulation;
4. A shopping cart functionality where users can add and delete products to their cart;
5. The categories and articles are loaded dynamically use the api endpoints in the customer app;
6. The admin panel provide full CRUD operation only for user (In the order panel only the Read operation is provided; In the article panel Read and Delete operations provided);
7. Save hashed passwords on the DB;
8. The app is Bootstrap as well as CSS for styling;
9. The app stores the user into the session after log-in;
10. Sanitize the data in the data layer; Prevent SQL injection;

## Additional features should be implemented to enhance the overall quality of the project.

1. Forgot password functionality;
2. Place an order and proceed to payment;
3. Implement pagination when displaying articles or categories;
4. Implement the CRUD operation for rest of the objects;
5. Check if the user is loogen before place an order;
6. Use JWT tokens to acces the API;

To Do: 

- solve the errors when you are logged in as admin
- payment page: display dynamic content
- category page: display the items dynamicaly

- export the datbase