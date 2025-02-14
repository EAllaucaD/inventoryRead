# **Microservice for Reading Medicine**

## **🚨Attention! 🚨**

This is an important message related to the project. Please read it carefully before proceeding.

- **dev Branch:** This branch is where the general development and work of this repository takes place.

- **QA Branch:** In this branch you will see the project approved from the development branch to QA.

- **Main Branch:** This branch contains the final functionalities of the repository.

---

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

- **Secure Deployment**: Uses SSH keys for server access
---

## 🛠️ Tools Used

![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)  

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) 

![MariaDB](https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=mariadb&logoColor=white)  

![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black)

![AWS EC2](https://img.shields.io/badge/AWS%20EC2-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)

---

## 📋 Prerequisites

Before you begin, make sure you have:
1. **AWS Account** with a configured EC2 instance.
2. **SSH Keys** generated for secure connection.

    EC2_KEY: Content of your private SSH key.

    EC2_HOST: Public IP address of your EC2 instance.

    You can get them from your AWS account.
3. **Secrets configured** in your GitHub repository.
4. **DockerHub** credential.
5. **Maria DB** create in AWS RDS.
6. Create a .env file in each microservice for this project that has HOST_DB,USER_DB, PASSWORD_DB, DATABASE_NAME, 
JWT_SECRET,PORT.

---

## 🚀 Project Usage

### Clone the Repository
```bash
git clone https://github.com/EAllaucaD/inventoryRead.git
```
### Comands
#### To test the microservice locally:

```bash
npm install 
```
You can then run the application using the following command.

```bash
npm start
```

Each new push to dev or pull request to QA or main triggers the flow of GitHub Actions to DockerHub and AWS EC2.

### Execute
Once you run the detailed commands you can see how the service is started on the assigned port. You can test this by doing a get in postman with the appropriate route.

Server run in http://localhost:3012


### To test the microservice in AWS:

a. Configure the appropriate secrets with the instances and databases raised.

b. You can us this microservice in 
http://52.1.182.64:{PORT}/api/inventory/specific


And you can use /api-docs for view the configurations of swagger only in branch dev and QA.

http://52.1.182.64:3012/api-docs

## 🎨 Preview

Microservices pushed to Docker Hub.
![image](https://github.com/user-attachments/assets/5b497473-2abd-4c94-a2ee-d55d157e8f35)


Pull the image microservice to the EC2.

![image](https://github.com/user-attachments/assets/bd78161c-219a-45ac-906f-f2693ab7bb63)

Swagger
![image](https://github.com/user-attachments/assets/2ac5f0b1-71a0-4310-9c53-17158ca078dc)


Microservices consumed by a front end.
![image](https://github.com/user-attachments/assets/ffeb262e-3877-4c2e-b53b-1d9940ce3425)

