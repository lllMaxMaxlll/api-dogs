# Dogs Service API

This is a RESTful API for managing dogs of a database.

## Prerequisites

- Node.js (version 20)
- MS SQL Server

## Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/lllMaxMaxlll/api-dogs.git
   ```

2. Install the dependencies:

   ```shell
   cd doghouse-service
   npm install
   ```

3. Configure the database:

   - Create a new database in MS SQL Server.

4. In root, create the .env file and add the following environment variables:

   ```
   DB_USER=
   DB_PASSWORD=
   DB_NAME=
   PORT=
   ```

5. Initialize the database:

   ```shell
   node scripts/initializeDB.js
   ```

6. Start the server:

   ```shell
   node index.js
   ```

The Doghouse Service API should now be running on `http://localhost:PORT` (PORT of .env).

## API Documentation

### Ping

Endpoint: `GET /ping`

- Description: Check if the API is running.
- Response: Returns the message "Dogshouseservice.Version1.0.1".

### Get Dogs

Endpoint: `GET /dogs`

- Description: Get a list of all dogs.
- Parameters:
  - `attribute` (optional): Sort the dogs by the specified attribute.
  - `order` (optional): Specify the sorting order (`asc` or `desc`).
  - `pageNumber` (optional): The page number for pagination.
  - `pageSize` (optional): The number of dogs to return per page.
- Response: Returns a JSON array of dog objects.

### Create Dog

Endpoint: `POST /dogs`

- Description: Create a new dog.
- Request body: JSON object with the following properties:
  - `name` (required): The name of the dog.
  - `color` (required): The color of the dog.
  - `tail_length` (required): The length of the dog's tail.
  - `weight` (required): The weight of the dog.
- Response: Returns the created dog object.

### Error Handling and Validation

- Duplicate Dog Names: If a dog with the same name already exists, a `400 Bad Request` response is returned.
- Validating Tail Length and Weight: The API validates that the tail length and weight is a positive number and returns a `400 Bad Request` response if it's not.
- Managing Invalid Request Data: The API uses validation middleware to validate the request data and returns a `400 Bad Request` response if the data is invalid.

### Technologies Used

- Node.js
- Express.js
- Sequelize
- MS SQL Server
- CORS
- Morgan

### Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please create a new issue or submit a pull request.

### License

This project is licensed under the [MIT License](LICENSE).
