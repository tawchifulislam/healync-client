# 🏥 Healync - Doctor Appointment Platform

A modern full-stack healthcare platform where patients can discover verified
specialist doctors and book appointments from the comfort of their home.

🔗 **Live Site:** [healync.vercel.app](https://healync.vercel.app) 🔗 **Backend
Server:**
[github.com/tawchifulislam/healnyc-server](https://github.com/tawchifulislam/healnyc-server)

---

## ✨ Features

- 🩺 Browse and discover verified specialist doctors
- 📅 Book appointments directly from the platform
- 🔐 Secure authentication - Email/Password & Google Sign-In via BetterAuth
- 📱 Fully responsive design across all devices
- ⚡ Fast performance with Next.js App Router and SSR
- 🌐 Separate frontend and backend architecture

---

## 🛠️ Tech Stack

### Frontend

| Technology              | Purpose                         |
| ----------------------- | ------------------------------- |
| Next.js 15 (App Router) | Framework + SSR                 |
| Tailwind CSS            | Styling                         |
| BetterAuth              | Authentication (Email + Google) |
| Vercel                  | Deployment                      |

### Backend

| Technology           | Purpose         |
| -------------------- | --------------- |
| Node.js + Express.js | REST API Server |
| MongoDB              | Database        |
| Vercel               | Deployment      |

---

## 🏗️ Architecture

`healync/                  # Frontend - Next.js`
`healnyc-server/           # Backend - Node.js + Express + MongoDB`

Frontend communicates with the backend via REST API endpoints. Authentication is
handled by BetterAuth on the frontend with session-based protection for private
routes.

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- MongoDB database (Atlas or local)

### Frontend Setup

```bash
git clone https://github.com/tawchifulislam/healnyc.git
cd healnyc
npm install
```

Create `.env.local`:

```env
NEXT_PUBLIC_API_URL=your_backend_url
BETTER_AUTH_SECRET=your_better_auth_secret
BETTER_AUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Backend Setup

```bash
git clone https://github.com/tawchifulislam/healnyc-server.git
cd healnyc-server
npm install
```

Create `.env`:

```env
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

```bash
nodemon index.js
```

---
