# 🚀 Internship Assignment: Role-Based JWT Authentication API

This project is a Node.js + Express REST API implementing **JWT-based login** and **role-based access control (RBAC)** as per the full-stack internship assignment requirements.

---

## 🔐 Roles & Permissions

- **Admin**: Can view **all products**, and **add** products
- **Seller**: Can view **only their products**, and **add** new ones
- **Buyer**: Can view **only public products**

---

## 🧪 Test Users

You can test the API using these hardcoded credentials:

| Role   | Email               | Password   |
|--------|---------------------|------------|
| Admin  | admin@example.com   | admin123   |
| Seller | seller@example.com  | seller123  |
| Buyer  | buyer@example.com   | buyer123   |

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- JSON Web Token (JWT)
- bcryptjs
- dotenv
- uuid

---

## 📦 Setup Instructions

1. **Clone this repository** or download the ZIP
2. Open the folder in **VS Code**
3. Install dependencies:
   ```bash
   npm install
