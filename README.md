# Students API

A simple RESTful API built with **Node.js** and **Express.js** for managing student records. The application stores data in memory, making it ideal for learning CRUD (Create, Read, Update, Delete) operations with Express.

**Note:** Since this project uses an in-memory array, all data will be lost whenever the server restarts.

---

# Features

* Create a new student
* Retrieve all students
* Retrieve a single student by ID
* Update an existing student
* Delete a student
* JSON request and response handling

---

# Technologies Used

* Node.js
* Express.js

---

# Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/students-api.git
   ```

2. Navigate into the project folder:

   ```bash
   cd students-api
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Install Express (if not already installed):

   ```bash
   npm install express
   ```

---

# Running the Application

Start the server with:

```bash
node index.js
```

Or, if you're using **nodemon**:

```bash
nodemon index.js
```

The server will start at:

```
http://localhost:3000
```

---

# API Endpoints

## 1. Create a Student

**POST** `/students`

### Request Body

```json
{
  "name": "Jane",
  "age": 22,
  "course": "Mathematics",
  "level": "300"
}
```

### Success Response (201 Created)

```json
{
  "id": 4,
  "name": "Jane",
  "age": 22,
  "course": "Mathematics",
  "level": "300"
}
```

### Validation Error (400 Bad Request)

```json
{
  "message": "name, age, course, and level are all required"
}
```

---

## 2. Get All Students

**GET** `/students`

### Success Response (200 OK)

```json
[
  {
    "id": 1,
    "name": "Kent",
    "age": 23,
    "course": "Physics",
    "level": "400"
  },
  {
    "id": 2,
    "name": "Amaka",
    "age": 20,
    "course": "Computer Science",
    "level": "400"
  }
]
```

---

## 3. Get a Student by ID

**GET** `/students/:id`

Example:

```http
GET /students/1
```

### Success Response

```json
{
  "id": 1,
  "name": "Kent",
  "age": 23,
  "course": "Physics",
  "level": "400"
}
```

### Error Response (404 Not Found)

```json
{
  "message": "Student not found"
}
```

---

## 4. Update a Student

**PUT** `/students/:id`

You can update one or more fields.

### Example Request

```json
{
  "course": "Software Engineering",
  "level": "500"
}
```

### Success Response

```json
{
  "id": 1,
  "name": "Kent",
  "age": 23,
  "course": "Software Engineering",
  "level": "500"
}
```

### Error Response

```json
{
  "message": "Student not found"
}
```

---

## 5. Delete a Student

**DELETE** `/students/:id`

Example:

```http
DELETE /students/2
```

### Success Response

```json
{
  "message": "Student deleted successfully",
  "student": {
    "id": 2,
    "name": "Amaka",
    "age": 20,
    "course": "Computer Science",
    "level": "400"
  }
}
```

### Error Response

```json
{
  "message": "Student not found"
}
```

---

# Initial Sample Data

The API starts with the following student records:

| ID | Name  | Age | Course           | Level |
| -- | ----- | --- | ---------------- | ----- |
| 1  | Kent  | 23  | Physics          | 400   |
| 2  | Amaka | 20  | Computer Science | 400   |
| 3  | John  | 21  | Biology          | 400   |

---

# Project Structure

```
students-api/
│
├── index.js          # Main application file
├── package.json
├── package-lock.json
└── README.md
```

---

# Testing the API

You can test the endpoints using:

* Postman
* Insomnia
* Thunder Client (VS Code)
* cURL

Example:

```bash
curl http://localhost:3000/students
```

---

# Future Improvements

* Store data in a database (MongoDB, MySQL, or PostgreSQL)
* Add input validation
* Implement search and filtering
* Add pagination
* Add authentication and authorization
* Organize the project into routes, controllers, and models
* Write automated tests

---

# License

This project is open-source and intended for educational purposes.
