# 📦 Edge vs Cloud Latency Analyzer

## 🎓 Course Information
**Course Title:** 5G Communication Network
    
**Semester:** Sprint 2025  

---

## 📽️ Project Demo
Watch the demo video to see the tests in action: [Google Drive Link](https://drive.google.com/file/d/1e7Z6t32Tq1pZITVjrdqYvKdYRG-asq2J/view?usp=drivesdk)

## 📚 Project Overview

This full-stack application is designed to **evaluate the performance of 5G networks** by running three types of latency tests:

- 📶 **Ping Test** – Measures network latency from client to server.
- ⏬ **Download Test** – Evaluates download speed and time.
- 📹 **Streaming Test** – Assesses buffering and responsiveness using HLS video segmentation.

The backend is developed using **Node.js (Express)** and serves a React-based frontend. The project includes **latency test APIs**, and supports **Docker deployment** for portability.

---

## 📁 Preparing Test Files (Required Before Running the App)

> ⚠️ Video files used for both **download** and **streaming** tests are **not included** in the repository.
>
> - ✅ **Keep any file of size greater than 20MB** for the download test and make changes in the `server.js` at line 48.
>
> - 👉 [Download videos.zip](https://drive.google.com/file/d/1PhC0W4yV3OVVVN7o0sUavW5c4cceRT2k/view?usp=drive_link)  
>   After downloading, extract the contents into the `/videos` directory of the project root:
>
>   ```bash
>   unzip videos.zip -d videos
>   ```

---

## 👥 Group Members

| Name               | Roll Number       |
|--------------------|-------------------|
| Anubhav Singh      | 202251018         |
| Lakshya Yadav      | 202251067         |
| Riyank Singh       | 202251127         |
| Sudhir Kumar Nagar | 202251136         |
| Rajpal Choudhary   | 202251165         |

---

## 🐳 Option 1: Run with Docker

### 🔧 Prerequisites

- Docker installed on your system

### ⚙️ Build and Run

```bash
docker build -t node-react-app .
docker run -p 3000:3000 node-react-app
```

## 💻 Option 2: Run without docker

### Install dependencis and run the server
```bash
npm install
node server.js
```

Once the server is running, open your browser and navigate to http://localhost:3000

## 🌐 Tunneling with Cloudflare
To expose your local server to the public internet, you can use Cloudflare Tunnel:
### 🛠️ Install cloudflared (Windows)
```bash
winget install --id Cloudflare.cloudflared
```
### 🚀 Start the tunnel
```bash
cloudflared tunnel --url http://localhost:3000
```
