# 🧵 Nested Comments System (React)

A **nested comments system** built using **React** that supports unlimited comment replies, editing, deleting, and persistent storage using `localStorage`.  
This project demonstrates core React concepts such as **Context API**, **hooks**, and **component-based architecture**.

---

## ✨ Features

- ✅ Add new comments
- 🔁 Reply to comments with unlimited nesting
- ✏️ Edit your own comments
- 🗑️ Delete your own comments
- 👤 Username-based ownership control
- 💾 Persistent data using `localStorage`
- 🌳 Visual nesting based on reply depth
- ⚛️ Global state management using React Context
- 🚀 Fast development setup using Vite

---

## 🧠 Concepts Used

- React Functional Components
- React Hooks (`useState`, `useEffect`, `useContext`)
- React Context API
- Conditional Rendering
- Controlled Forms
- Local Storage (`localStorage`)
- Component Reusability

---

## 🏗️ Project Structure
src/
│── components/
│ ├── Addcomment.jsx
│ ├── Comment.jsx
│ ├── CommentSection.jsx
│ ├── Commenttrans.jsx
│ ├── ResetCommentSection.jsx
│
│── context/
│ └── CommentsContext.jsx
│
│── App.jsx
│── main.jsx
