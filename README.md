# LMS - Learning Management System

🚀 A comprehensive Learning Management System for online education.

## Description

LMS Skills is a powerful Learning Management System that enables users to engage in online education seamlessly. It offers a wide range of features for both users and administrators, including user authentication, course management, subscription-based access, and more.

![LMS](https://res.cloudinary.com/dtoeixvno/image/upload/v1696580794/dakmjxad0hhtkwy9741b.png)



## Project Structure

The project follows a well-organized structure:

```
LMS-Project/
├── client/
│   ├── src/
│   │   ├── Assets/
│   │   ├── Components/
│   │   ├── Constants/
│   │   ├── Helpers/
│   │   ├── Layouts/
│   │   ├── Pages/
│   │   ├── Redux/
│   │   ├── App.jsx
│   │   ├── index.css
│   │   ├── main.jsx
│   │   ├── ...
│   ├── .env
│   ├── .env.example.js
│   ├── index.html
│   ├── package.json
│
├── server/
│   ├── config/
│   │   ├── dbConnection.js
│   ├── controllers/
│   │   ├── course.controller.js
│   │   ├── miscellaneous.controller.js
│   │   ├── payment.controller.js
│   │   ├── user.controller.js
│   ├── middleware/
│   │   ├── auth.middleware.js
│   │   ├── error.middleware.js
│   │   ├── multer.middleware.js
│   ├── models/
│   │   ├── course.model.js
│   │   ├── payment.model.js
│   │   ├── user.model.js
│   ├── routes/
│   │   ├── course.routes.js
│   │   ├── miscellaneous.routes.js
│   │   ├── payment.routes.js
│   │   ├── user.routes.js
│   ├── uploads/
│   ├── utils/
│   │   ├── error.utils.js
│   │   ├── sendEmail.js
│   ├── .env
│   ├── .env.example.js
│   ├── app.js
│   ├── package.json
│   ├── server.js
├── .gitignore
├── README.md
│
└──
```

## Features

- 💡 **User Authentication**: Sign up, log in, change password, and reset password via email.
- 🙋 **User Profile**: Edit profile details, view profile information.
- 📚 **Course Management**: Admin can create, edit, and delete courses.
- 📝 **Lecture Management**: Admin can add, edit, and delete lectures within courses.
- 🔒 **Subscription**: Users can enroll in courses by purchasing a 1-year subscription.
- 🎥 **Lecture Dashboard**: Display course lectures, play videos, and view lecture descriptions.

## Demo Video

![Demo](https://modern-lms.netlify.app/)

---

## API Endpoints

### User Routes

- `POST /register`: Register a new user.
- `POST /login`: Log in a user.
- `GET /logout`: Log out a user.
- `GET /profile`: Getting user profile info.
- `POST /reset`: Sending email on user for reset password.
- `POST /reset/:resetToken`: User resetting the password.
- `POST /change-password`: User can change password using old and new password.
- `POST /update/`: User can update their profile.

### Course Routes

- `GET /courses`: Get all courses.
- `POST /courses`: Create a new course (Admin only).
- `GET /courses/:id`: Get lectures for a specific course.
- `PUT /courses/:id`: Update course details (Admin only).
- `DELETE /courses/:id`: Delete a course (Admin only).

### Payment Routes

- `GET /razorpay-key`: Get Razorpay API key.
- `POST /subscribe`: Buy a subscription.
- `POST /verify`: Verify a subscription.
- `POST /unsubscribe`: Cancel a subscription.
- ...

### Miscellaneous Routes

- `POST /contact`: Contact us.
- `GET /admin/stats/users`: Get user statistics (Admin only).

## Tech Stack

### Backend

- Node.js
- Express
- MongoDB
- Cors
- bcrypt
- Crypto
- Jsonwebtoken
- Dotenv
- Cookie-Parser
- Multer
- Cloudinary
- Nodemailer
- Razorpay

### Frontend

- React
- Tailwind & CSS
- React-Icons
- React-Router
- React-Toastify
- DaisyUI
- React-Redux
- Redux Toolkit
- Chart.js
- React-Chartjs-2

---

## Setup Guide

Follow these steps to set up the project on your local machine:

1. Clone the repository:
   ```
   git clone https://github.com/vivek3454/LMS---learning-management-system.git
   cd LMS---learning-management-system-main
   ```

2. Set up the backend:
   - Navigate to the `server` folder: `cd server`
   - Install dependencies: `npm install`
   - Set up environment variables: Create a `.env` file based on `.env.example.js` file.
   - Start the backend server: `npm start`

3. Set up the frontend:
   - Navigate to the client folder: `cd client`
   - Install dependencies: `npm install`
   - Set up environment variables: Create a `.env` file based on `.env.example.js` file.
   - Start the client server: `npm run dev`

4. Access the application:
   - Open your browser and visit: `http://localhost:5173`