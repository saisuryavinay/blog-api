# Blog API – Authors & Posts (RESTful API)

A RESTful API for a simple blog platform that manages **Authors** and their corresponding **Posts**.  
This project focuses on modeling and managing a **one-to-many relationship** using a relational database, enforcing **data integrity**, and implementing **efficient API endpoints**.
<<<<<<< HEAD

---

## 📌 Objective

To build a robust backend API that:

- Models a one-to-many relationship (Author → Posts)
- Uses foreign key constraints with cascade delete
- Provides clean, RESTful endpoints
- Avoids inefficient database queries (N+1 problem)
- Gracefully handles validation and error cases

---

## 🚀 Features

- Author & Post CRUD operations
- One-to-many relationship using foreign keys
- Cascade delete support
- Validation for non-existent authors
- Nested resource endpoint
- Query filtering support
- Efficient eager loading with Sequelize

---

## 🛠 Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** PostgreSQL
- **ORM:** Sequelize
- **Tools:** Postman, Git, Nodemon

---

## 📂 Project Structure

src/
│
├── config/
│ └── database.js
│
├── models/
│ ├── Author.js
│ └── Post.js
│
├── controllers/
│ ├── authorController.js
│ └── postController.js
│
├── routes/
│ ├── authorRoutes.js
│ └── postRoutes.js
│
└── server.js


---

##  Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/saisuryavinay/blog-api.git
cd blog-api

2️⃣ Install Dependencies
npm install

3️⃣ Create PostgreSQL Database

you should install PostgreSQL

CREATE DATABASE blog_db;

4️⃣ Configure Environment Variables

Create a .env file in the project root:

DB_NAME=blog_db
DB_USER=postgres
DB_PASSWORD=your_password (mine:1234)
DB_HOST=localhost
DB_DIALECT=postgres
PORT=5000

5️⃣ Run the Server
npm run dev


Server will start at:

http://localhost:5000

 API Documentation
 Author Endpoints
Create Author
POST /authors

{
  "name": "Vinay",
  "email": "vinay@example.com"
}

Get All Authors
GET /authors

Get Author by ID
GET /authors/{id}


Returns 404 if not found.

Update Author
PUT /authors/{id}

Delete Author
DELETE /authors/{id}


Deletes all associated posts via cascade delete.

 Post Endpoints
Create Post
POST /posts

{
  "title": "My First Blog Post",
  "content": "This post belongs to John Doe",
  "author_id": 1
}


Returns 400 if author_id does not exist.

Get All Posts
GET /posts

Filter Posts by Author
GET /posts?author_id=1

Get Post by ID (with Author Info)
GET /posts/{id}

{
  "id": 1,
  "title": "My First Blog Post",
  "content": "This post belongs to John Doe",
  "Author": 
  {
    "name": "Vinay",
    "email": "vinay@example.com"
  }
}

Update Post
PUT /posts/{id}

Delete Post
DELETE /posts/{id}

🔹 Nested Resource Endpoint
Get All Posts of an Author
GET /authors/{id}/posts
