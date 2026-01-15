# 🎬 YouTube Clone – MERN Stack Capstone Project

A full-stack **YouTube Clone** application built using the **MERN Stack (MongoDB, Express, React, Node.js)**.  
This project replicates core YouTube features such as video streaming, authentication, channels, likes, comments, search, and filters.

---

## 🚀 Project Objective

The objective of this project is to develop a **real-world full-stack web application** that demonstrates:

- Secure user authentication using JWT
- RESTful API design with Express
- State management using Redux Toolkit
- Modern React UI with reusable components
- Clean, scalable project architecture

This project is developed as a **Capstone Project** for Full Stack Development.

---

## 🧩 Tech Stack

### Frontend
- React (Vite)
- React Router DOM
- Redux Toolkit
- Tailwind CSS
- React Icons

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- Zod (Validation)
- Bcrypt (Password Hashing)

---

## ✨ Features

### 👤 User Authentication
- User registration and login
- JWT-based authentication
- Persistent login using localStorage
- Protected routes for authenticated users

### 🏠 Home Page
- YouTube-style header and sidebar
- Video grid layout
- Search videos by title
- Filter videos by category

### ▶️ Video Player Page
- Embedded video player
- Video title, description, views
- Like and dislike buttons
- Comment section (Add, Edit, Delete)
- Suggested videos list

### 📺 Channel Management
- Create channel (one channel per user)
- Channel page with uploaded videos
- Channel ownership validation
- Subscribe button UI

### 💬 Comments
- Add comments on videos
- Edit and delete own comments
- Comments sorted by latest

### ❤️ Likes & Dislikes
- Toggle like/dislike
- Prevents duplicate reactions
- Like removes dislike and vice versa

---

## 🔐 Authentication Flow

1. User registers with username, email, and password
2. Password is securely hashed using bcrypt
3. JWT token is generated on login
4. Token is stored in localStorage
5. Protected routes validate JWT using middleware

---

## 🔎 Search & Filter Functionality

- Search videos by title
- Filter videos by category
- Combined search and filter support
- URL-based search query handling

---

## 🧪 API Endpoints

### Authentication
- `POST /api/register` – Register user
- `POST /api/login` – Login user

### Channel
- `POST /api/channels` – Create channel (Protected)
- `GET /api/channels/:id` – Get channel details
- `GET /api/channels/:id/videos` – Get channel videos

### Videos
- `POST /api/videos` – Upload video
- `GET /api/videos` – Get all videos
- `GET /api/videos/:id` – Get video by ID (increments views)
- `PATCH /api/videos/:id` – Update video
- `DELETE /api/videos/:id` – Delete video
- `POST /api/videos/:id/like`
- `POST /api/videos/:id/dislike`

### Comments
- `POST /api/comments/:videoId`
- `GET /api/comments/:videoId`
- `PATCH /api/comments/update/:commentId`
- `DELETE /api/comments/delete/:commentId`

---

## 📱 Responsiveness

- Fully responsive design

- Works on mobile, tablet, and desktop

- Sidebar toggle support

- Responsive video grid layout


## 📌 Key Highlights

- Clean folder structure

- Modular and reusable components

- Middleware-based validation

- Secure JWT authentication

- ES Modules used (no CommonJS)

- Real-world MERN architecture


## 🧠 Learning Outcomes

- Full-stack MERN development

- JWT authentication and authorization

- Redux state management

- REST API design

- Scalable project architecture

## 👨‍💻 Developer

Mohammed Tosif
Full Stack Developer (MERN)

## ▶️ How to Run the Project

### Backend
```bash
cd backend
npm install
npm run dev

cd frontend
npm install
npm run dev

----

## ⚙️ Environment Variables

Create a `.env` file in the backend root folder then put your env. variables like below example:

- PORT=5050
- DB_URL=your_mongodb_connection_string
- JWT_SECRET=your_secret_key

---

## Give a Star to repo.
