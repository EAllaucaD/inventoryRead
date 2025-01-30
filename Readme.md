# **Microservice for Reading Medicine**

## 📋 Table of Contents

1. [📖 About the Project](#-about-the-project)
2. [🛠️ Tools Used](#%EF%B8%8F-tools-used)
3. [📋 Prerequisites](#-prerequisites)
4. [🚀 Project Usage](#-project-usage)
5. [📜 Preview]()

---

## 📖 About the Project

This microservice handles the Read of a CRUD to display the information of the medicines registered in the database, in this case in MariaDB. Using node tools, cors, documentation with swagger, among others.

### 🏗️ Features:

- **CI/CD Automation**: Automatic updates on every push and pull request.

---

## 🛠️ Tools Used

![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)  

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) 

![MariaDB](https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=mariadb&logoColor=white)  

![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black)

---

## 📋 Prerequisites

Before you begin, make sure you have:

 - Have the credentials to access the **Docker Hub.**

 - Create a .env file in the root of the project that has DB_HOST,
DB_USER, DB_PASSWORD, DB_NAME, DB_PORT for the connection to your MariaDb database.

---

## 🚀 Project Usage

### Clone the Repository
```bash
git clone https://github.com/EAllaucaD/inventoryRead.git
```
### Comands
#### To test the microservice locally:

```bash
npm install express body-parser cors pg dotenv mariadb swagger-ui-express yaml
```
You can then run the application using the following command.

```bash
npm start
```
### Execute
Once you run the detailed commands you can see how the service is started on the assigned port. You can test this by doing a get in postman with the appropriate route.

Server run in http://localhost:3012

## 🎨 Preview
