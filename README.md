# Finance Dashboard Backend API

This project is a backend system for a finance dashboard that supports user management, financial record handling, role based access control, and summary analytics. It is designed to demonstrate backend architecture, API design, and data flow in a clear and maintainable way.

## Live API
https://finance-dashboard-api-746h.onrender.com/

---

## Features

- User authentication using JWT  
- Role based access control with Admin, Analyst, and Viewer roles  
- CRUD operations for financial records  
- Filtering of records by type, category, and date  
- Dashboard summary and trend analytics  
- Secure password handling and validation  
- Deployed backend accessible via public URL  

---

## Tech Stack

- Node.js  
- Express.js  
- MongoDB (Atlas)  
- JWT for authentication  
- Render for deployment  

---

## Getting Started (Local Setup)

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd FinancialDashboard
```
### 2. Install dependencies

```bash
npm install
```
### 3. Create environment file
Create a .env file in the root directory:
```bash
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```
### 4. Run the server
```bash
npm start
```
## API Testing

You can test the APIs using Postman or any API client.

### Base URL
https://finance-dashboard-api-746h.onrender.com
Authentication Routes

### Register User
POST /auth/register
```json
{
  "name": "User",
  "email": "user@test.com",
  "password": "123456",
  "role": "admin"
}
```
### Login User
```json
POST /auth/login

{
  "email": "user@test.com",
  "password": "123456"
}
```
Response:
```json
{
  "token": "your_jwt_token"
}
```
Use this token in all protected routes:

Authorization: Bearer <token>
User Routes (Admin Only)
Get All Users

GET /users

Update User Status

PUT /users/:id/status
```json
{
  "status": "inactive"
}
```
Financial Records Routes
Create Record (Admin Only)

POST /records
```json
{
  "amount": 5000,
  "type": "income",
  "category": "salary",
  "note": "monthly salary"
}
```
## Get Records (Admin, Analyst, Viewer)

### GET /records

Optional filters:
- /records?type=income
- /records?category=food
- Update Record (Admin Only)

### PUT /records/:id

### Delete Record (Admin Only)
- DELETE /records/:id

### Dashboard Routes
- Get Summary (Admin, Analyst, Viewer)

### GET /dashboard/summary

### Returns:
- Total income
- Total expenses
- Net balance
- Get Trends (Admin, Analyst, Viewer)

### GET /dashboard/trends
- Returns aggregated financial trends.

## Role Based Access Control
### Admin
- Full access to all endpoints
- Can manage users and records
### Analyst
- Can view records and dashboard analytics
### Viewer
- Can only view records and dashboard data
## Important Notes
- The application uses JWT based authentication
- All protected routes require a valid token
- Role based middleware enforces access restrictions
- MongoDB Atlas is used for cloud database connectivity
- The deployed service may take a few seconds to respond on the first request due to free tier limitations

## Project Structure
```bash
src/
 ├── controllers/
 ├── middleware/
 ├── models/
 ├── routes/
 ├── utils/
 └── app.js

server.js
```
## Conclusion
This project demonstrates a clean backend architecture with authentication, role based authorization, data management, and analytics. It is designed to be simple, extensible, and aligned with real world backend development practices.
