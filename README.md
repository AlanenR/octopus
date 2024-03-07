# Learning Management System (LMS) API

## Overview
This project is part of a take-home assignment for a Full-Stack Backend role, focusing on developing a Learning Management System. The backend API provides functionalities to interact with courses, including fetching all courses, retrieving details for a single course, and getting likes for courses.

## Technologies Used
- Node.js
- Express.js
- PostgreSQL
- Vite
- React
- Typescript


## Getting Started

### Prerequisites

You need:
- Node.js
- npm
- PostgreSQL

### Installing

How to get a development environment running:

1. Clone the repository to your local machine:
2. Install the required dependencies on server and client
3. Set up PostgreSQL database:
- Create a database for the project.
- Update the database connection configuration in your project as necessary.
- Database schema: server/src/db/schema.sql
- Testdata: server/src/db/testData.sql

4. Start the servers:
npm start

## API Endpoints

The following are the API endpoints available in this project:

- `GET /courses`: Fetch all courses available in the LMS.
- `GET /courses/:id`: Retrieve details of a specific course by its ID.
- `GET /courses/:id/likes`: Get the number of likes for a specific course.

## Project Structure
- `server/`: Contains the Express.js server and API endpoints
- `client/`: Frontend logic

## Future Improvements

- The project is still a raw version that requires extensive development. 
- Enhance error handling and validation across API endpoints.
- Add headers
- Add endpoints for toggling likes.
- Add models
- Implement authentication and authorization for users.
- Implement testing
- Improve documentation and README
- Build frontend UI