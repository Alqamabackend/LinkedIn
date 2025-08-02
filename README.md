# 🌐 Mini LinkedIn-like Community Platform

A simple **Mini LinkedIn Clone** where users can:
- Register/Login with Email & Password
- Create and view a profile (name, email, bio)
- Create text-only posts
- View a public feed with all posts and author info
- View any user's profile with their posts

---

## 🚀 **Tech Stack**

**Frontend**
- React
- React Router
- Axios
- Tailwind CSS (for styling)

**Backend**
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT (Authentication)
- bcryptjs (Password hashing)
- dotenv (Environment variables)
- CORS

---

## ✅ **Features**

1️⃣ **User Authentication**
- Register/Login with secure password hashing (bcryptjs)
- JWT based auth
- Profile with name, email, bio

2️⃣ **Public Post Feed**
- Create & read text-only posts
- Home feed shows all posts with author name & timestamp

3️⃣ **Profile Page**
- View any user’s profile with their bio & all posts

---

## ⚙️ **Local Setup Instructions**

### 📁 **1. Clone the Repository**

```bash
git clone <your-repo-url>
cd <your-project-folder>


cd backend
npm install

MONGO_URI=mongodb+srv://alqama:alqama123@cluster0.xmseg.mongodb.net/linkedin
JWT_SECRET=secret
PORT=5000

npm start



cd frontend
npm install

npm run dev
