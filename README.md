# E-commerce Back End

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents

- [E-commerce Back End](#e-commerce-back-end)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Built With](#built-with)
  - [Technologies Used](#technologies-used)
  - [Contributing](#contributing)
  - [License](#license)
  - [Questions](#questions)
  

## Description

Internet retail, also known as e-commerce, is the largest sector of the electronics industry, generating an estimated $29 trillion in 2019. E-commerce platforms like Shopify and WooCommerce provide a suite of services to businesses of all sizes. This program is the back end for an e-commerce site, by configuring a working Express.js API to use Sequelize to interact with a MySQL database using dotenv, Express.js, MySQL, Node.js, Nodemon, and Sequelize. This project served as an exploration towards the back end and ORM.

 <br />



[Demo walkthrough video](https://youtu.be/QhwepM4koCc)




## Installation

1. [Install Node.js](https://nodejs.org/en/download/)
2. [Install MySQL](https://www.mysql.com)

3. Create database
   
        mysql -u root -p
        source ./db/schema.sql

4. Install JavaScript packages given in package.json

        npm install


5. Seed database:

        npm run seed

## Usage

        npm start

[Test deployed on Heroku as well](https://henrykam-ecommerce-back-end.herokuapp.com/api/)

1. Route for Products (GET, POST, PUT, DELETE)

        https://henrykam-ecommerce-back-end.herokuapp.com/api/products
2. Route for Categories (GET, POST, PUT, DELETE)

        https://henrykam-ecommerce-back-end.herokuapp.com/api/categories

3. Route for Tags (GET, POST, PUT, DELETE)

        https://henrykam-ecommerce-back-end.herokuapp.com/api/tags
<br>

## Built With

* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  * [dotenv](https://www.npmjs.com/package/dotenv)
  * [Express.js](https://expressjs.com/)
  * [MySQL2](https://www.npmjs.com/package/mysql2)
  * [Node.js](https://nodejs.org/en/)
  * [nodemon](https://nodemon.io/)
  * [Sequelize](https://sequelize.org/)
* [MySQL](https://www.mysql.com)



## Technologies Used

* [Microsoft Visual Studio Code](https://code.visualstudio.com/)
* [Git Bash](https://git-scm.com/downloads)
* [GitHub](https://github.com/)
* [Heroku](https://www.heroku.com/)
* [MySQL Workbench](https://www.mysql.com/products/workbench/)

## Contributing


**Henry Kam**

- [Github](https://github.com/gulpinhenry)
- [LinkedIn](https://www.linkedin.com/in/kamhenry/)


## License

This application is covered under the MIT license

## Questions

For any questions, please reach out by creating an issue.

