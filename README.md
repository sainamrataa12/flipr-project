# Flipr Full-Stack Project

A full-stack web application built with React, Node.js, Express, and Mongo DB to manage clients, projects, and newsletters. This project demonstrates a complete CRUD workflow with a frontend and backend integration.

---


- [Demo](#demo)  
- [Features](#features)  
- [Technologies Used](#technologies-used)  
- [Project Structure](#project-structure)  
- [Installation](#installation)  
- [Usage](#usage)  
 

---

## Demo

<img width="1728" height="896" alt="image" src="https://github.com/user-attachments/assets/14e49a6c-d68d-4a36-bc35-c83484aeba2c" />
<img width="1903" height="895" alt="image" src="https://github.com/user-attachments/assets/74040e50-a74f-4600-b8a5-e2fbbb51429d" />
<img width="1870" height="612" alt="image" src="https://github.com/user-attachments/assets/6d972700-217d-46c5-bcf1-ba9d642d43a1" />
<img width="1581" height="721" alt="image" src="https://github.com/user-attachments/assets/db6f207d-d946-4eb0-969c-fa3f7eca0cf9" />





## Features

- Admin panel to manage clients and projects.  
- Newsletter subscription system.  
- Dynamic project cards and client cards.  
- RESTful API backend with MongoDB.  
- Frontend built with React and Tailwind CSS.  

---

## Technologies Used

- **Frontend:** React, Axios  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Atlas)  
- **Others:** dotenv, cors, mongoose  

---

## Project Structure
<img width="602" height="823" alt="image" src="https://github.com/user-attachments/assets/c9cfb0f6-9d34-41c2-b46e-cc93e410c393" />



---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/sainamrataa12/flipr-project.git
cd flipr-project

2. Setup Backend

cd backend
npm install
touch .env

3. Add your MongoDB URI and PORT in .env:

PORT=5000
MONGO_URI=your_mongodb_connection_string

4. Start backend:

node server.js

5. Setup Frontend

cd ../frontend
npm install
npm start
Frontend will run at http://localhost:3000 by default.

Usage

Navigate to the Home page to view projects and clients.
Go to Admin page to add/edit clients, projects, or newsletters.
API routes are available under /api/clients, /api/projects, and /api/newsletter.



