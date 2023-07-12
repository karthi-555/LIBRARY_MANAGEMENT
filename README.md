## Library Management System 📚

A web app for managing all the activities of a library like managing members and book transactions, built on MERN Stack
## Index ✏️

- [Library Management System 📚](#library-management-system-)
- [Index ✏️](#index-️)
- [Features Of LMS 🚀](#features-of-lcms-)
- [Setup 🔥](#setup-)
  - [Frontend Setup 🍧](#frontend-setup-)
  - [Backend Setup 🍿](#backend-setup-)

## Features Of LMS 

- Admin Login and Student Login
- Admin and Student Dashboard
- Adding Library Members
- Adding Books with Available Copies
- Issue and Return Transaction tracking of a Book by the Member
- Reserving a book for specific dates
- Showing the Achievements, Event Gallery

## Setup 

- Fork the Repo

- Clone the repo to your local machine
  `git clone <repo-url>`

### Frontend Setup 

1. Get into the chatapp directory
   `cd frontend`

2. Run `yarn` to install dependencies

3. Create a `.env` file and create variables as mentioned in the `.env.example` with the values

4. Run `yarn start` to start the application

### Backend Setup 

1. Get into backend directory `cd backend`

2. Run `yarn` to install dependencies

3. Create a MongoDB account and get the MONOGO_URL for connecting the server and the Database

4. Create a `.env` file and create variables as mentioned in the `.env.example` with the values

5. Run `nodemon server.js` to start the server [Should have installed nodemon globally]
