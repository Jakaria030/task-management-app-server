# Task Management App
A task management application that helps users organize, track, and manage tasks efficiently.

## Live Link of Client Side
[https://task-management-app-12bfd.web.app/](https://task-management-app-12bfd.web.app/)

## Technologies Used
The backend application is powered by the following technologies:
- **Backend Framework:** Node.js, Express.js
- **Database:** MongoDB
- **Hosting Platform:** Vercel


## **NPM Packages**
The following npm packages were utilized:

- [`express`](https://www.npmjs.com/package/express): Fast, unopinionated, minimalist web framework for Node.js.
- [`mongodb`](https://www.npmjs.com/package/mongodb): MongoDB driver for Node.js to interact with MongoDB database.
- [`dotenv`](https://www.npmjs.com/package/dotenv): Loads environment variables from a `.env` file into `process.env`.
- [`cors`](https://www.npmjs.com/package/cors): Middleware to enable Cross-Origin Resource Sharing.

  
## Getting Started
Follow these steps to set up and run the server locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/Jakaria030/task-management-app-server.git
   ```
2. Navigate to the project directory:
   ```bash
   cd task-management-app-server
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file in the root directory and add the following:
   ```env
   DB_USER=<your database username>
   DB_PASSWORD=<your database password>
   ```
5. Start the server:
   ```bash
   npm start
   ```