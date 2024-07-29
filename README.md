# MERN Stack Project

## Installation

Follow these steps to set up the project:

1. Clone the repository:

    git clone https://github.com/OnkarShelke77/MERN-Stack-Rating-Application.git
    cd your-repo
  
2. Install backend dependencies:

    cd backend
    npm install

3. Install frontend dependencies:

    cd frontend
    npm install

## Running the Application

### Backend
1. Create a `.env` file in the `backend` directory and add the following environment variables:

    PORT=5000
    MONGODB_URI=mongodb://localhost:27017/rating-app

2. Start the backend server:

    cd backend
    node server.js

    The backend server will start on `http://localhost:5000`.

### Frontend

1. Start the frontend development server:

    cd frontend
    npm start


    The frontend server will start on `http://localhost:3000`.

## Environment Variables

The following environment variables need to be set in the `.env` file located in the `backend` directory:

- `PORT`: The port number on which the backend server will run (default: 5000).
- `MONGODB_URI`: The URI of your MongoDB instance.

## API Endpoints
The backend API provides the following endpoints:

- Auth
  - `POST /api/auth/signup`: Register a new user
  - `POST /api/auth/login`: Authenticate a user and get a token

- Store
  - `GET /api/stores`: Get a list of all stores
  - `POST /api/stores`: Create a new store


