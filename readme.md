# Task Portal – Full Stack Assessment

## 🔗 GitHub Repository Link
👉 https://github.com/your-username/task-portal

---

# 📌 Project Overview

This is a Full Stack Task Portal built using:

- Frontend: React (Vite) + Tailwind CSS  
- Backend: Node.js + Express (JavaScript only)  
- Database: MongoDB  
- Environment Config: dotenv  

The project fulfills all mandatory assessment requirements.

---

# ✅ Core Features Implemented

## 1️⃣ Add Task
- Title (required)
- Description (optional)
- Status (Pending / Completed)
- Priority (Low / Medium / High) – additional attribute
- Created At (auto-generated using MongoDB timestamps)

## 2️⃣ View Tasks
- Display all tasks in list format
- Show:
  - Title
  - Description
  - Status (badge + toggle switch)
  - Priority
  - Created Date
- Sorted by latest created first

## 3️⃣ Mark Task as Completed
- Toggle switch UI (Pending ↔ Completed)
- Status updates using PATCH API
- Filtering:
  - All
  - Pending
  - Completed

---

# 🛠 Tech Stack

## Frontend
- React (Vite)
- Tailwind CSS
- Axios

## Backend
- Express (JavaScript)
- MongoDB (Mongoose)
- dotenv
- CORS
- JWT
- bcrypt

---

# ⚙️ How To Run Project

## 🔹 Backend Setup

1. Navigate to backend folder:
   cd backend

2. Install dependencies:
   npm install

3. Create a `.env` file in backend root:

   PORT=5000
   MONGO_URI=mongodb://127.0.0.1:27017/taskportal

4. Start backend:
   npm run dev

Backend will run at:
http://localhost:5000

---

## 🔹 Frontend Setup

1. Navigate to frontend folder:
   cd frontend

2. Install dependencies:
   npm install

3. Run frontend:
   npm run dev

Frontend will run at:
http://localhost:5173

---

# 🤖 AI Prompts Used

Below are some raw prompts I used while building the project (written in natural way with minor mistakes as I typed):

- make clean express backend with env based config and mvc folder structure only js not ts
- create task portal frontend using react vite tailwind no login just task features
- fix error tasks.map is not a function in react
- create toggle button instead of writing toggle text show completed pending
- write backend fast with proper controller export like module.exports = { controller }

---

# 🤖 What AI Generated vs What I Modified

## AI Generated
- Initial Express backend structure
- MongoDB schema structure
- Basic React component structure
- Tailwind UI base design
- Toggle switch UI logic
- Initial README format

## Modified By Me
- Structured final folder organization
- Refined API responses
- Debugged frontend-backend integration issue
- Fixed tasks.map error
- Improved toggle switch behavior
- Connected filtering with query parameters
- Adjusted UI spacing and layout
- Tested and validated full flow

---

# 📡 API Design (NON AI GENERATED)

## Base URL
http://localhost:5000

## Endpoints

### Create Task
POST /tasks

Request Body:
{
  "title": "Complete assignment",
  "description": "Finish backend work",
  "status": "Pending",
  "priority": "High"
}

---

### Get Tasks
GET /tasks?status=All  
GET /tasks?status=Pending  
GET /tasks?status=Completed  

---

### Toggle Task Status
PATCH /tasks/:id

---

# 🧠 State Management (NON AI GENERATED)

State is managed using React hooks:

## States Used:
- tasks → stores task list
- filter → manages filtering logic
- form states → title, description, status, priority

## Data Flow:
1. TaskForm submits data → POST API call
2. On success → fetchTasks() called
3. TaskList fetches tasks based on filter
4. Toggle switch triggers PATCH request
5. After update → fetchTasks() refreshes list

No external state management library used.
State handled using component-based architecture.

---

# 📦 Folder Structure

## Backend
backend/
 ├── config/
 ├── controllers/
 ├── models/
 ├── routes/
 ├── .env
 └── server.js

## Frontend
frontend/
 ├── src/
 │    ├── api/
 │    ├── components/
 │    ├── pages/
 │    ├── App.jsx
 │    └── main.jsx

---

# 🎯 Conclusion

✔ Add Task  
✔ View Tasks  
✔ Toggle Status  
✔ Filtering  
✔ Env based backend  
✔ Clean MVC structure  
✔ Component-based frontend  
✔ Tailwind UI  

This project satisfies all assessment requirements.

---