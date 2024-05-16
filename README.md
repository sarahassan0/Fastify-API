# Fastify-API

This repository contains a Fastify API server that provides WebSocket functionality. Below are the instructions on how to run the server and access the client interfaces using Postman and Swagger.

## Installation

1. Clone this repository to your local machine:

    ```bash
    git clone https://github.com/sarahassan0/Fastify-API.git
    ```

2. Navigate into the project directory:

    ```bash
    cd Fastify-API
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Add .env file:

    ```bash
    JWT_SECRET=secretkey
    DB_URI=mongodb://localhost:27017/db_name
    ```


## Running the Server

To start the Fastify API server, run the following command:

```bash
npm start
```

This will start the server at `http://localhost:5000`.

## Accessing the Client Interface - Postman (WebSocket)

1. Download and install [Postman](https://www.postman.com/downloads/) if you haven't already.

2. Import the provided Postman collection for WebSocket testing using the following link:
   [Fastify API WebSocket Collection](https://www.postman.com/universal-resonance-102555/workspace/fstiify-api/collection/66463c5f4f8f06f735606de3?action=share&creator=33935184)

3. Once imported, you can find the WebSocket endpoints in the imported collection for testing.

![Postman collection](https://utfs.io/f/5f5b1816-ef47-4268-86ef-69dbc66b26e8-brlryh.png)
![Postman collection](https://utfs.io/f/736f5f68-8feb-44eb-9555-6050ab149226-brmf0h.png)

## Accessing the Swagger Documentation

Swagger documentation provides an interactive interface for exploring and testing the API endpoints.

1. After starting the server, navigate to the following URL in your browser:

    ```
    http://localhost:5000/docs
    ```

2. This will open the Swagger UI interface where you can explore and test the API endpoints.

![Swagger collection](https://utfs.io/f/eccfd165-fd71-479d-a8f9-463a84fa2f6f-btsbe0.png)


#### Author
##### Sarah Hassan