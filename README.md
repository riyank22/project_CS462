# 📦 Node.js + React Web App

This project is a full-stack application built with **Node.js (Express)** for the backend and **React** for the frontend. It serves a compiled React frontend and static video files through the Node.js server.

---

## 🚀 Features

- Node.js + Express backend (`server.js`)
- React frontend served from `public/`
- Static video assets in `videos/`
- Fully Dockerized setup
- Also supports local run without Docker

---


---

## 🐳 Option 1: Run with Docker

### 🔧 Prerequisites

- Docker installed on your system

### ⚙️ Build and Run

```bash
docker build -t node-react-app .
docker run -p 3000:3000 node-react-app

