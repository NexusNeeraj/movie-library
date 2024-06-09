# Movie Library App


## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [HowItWorks](#How-It-Works)
- [Usage](#usage)
- [Contributing](#contributing)

## Overview

This project is a movie collection application built using React. Users can search for movies using the OMDb API, add them to a personal collection, and view their collection on a separate page. The app also includes user authentication. authentication is done using firebase as a backend and a user profile is also provided so that user can change their password which is done using firebase.

## Features

- User authentication (login/logout)
- Search movies using the OMDb API
- Add movies to a personal collection
- View the personal movie collection
- Responsive design
- Smooth animations and user interactions


## Technologies Used

- React
- React Router
- Context API
- Axios
- CSS Modules
- Firebase

## Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/movie-library.git
   cd movie-library


2. **Install dependencies:**
   ```bash
   npm install
   npm axios
   npm react-router-dom


3. **Run the development server:**
   ```bash
   npm start
The app will be available at http://localhost:3000.


### How It Works

The app leverages React for the front end, providing a dynamic and responsive user interface. Firebase  is employed as the backend to store users credentials, ensuring seamless users data retrieval and persistence.


### Usage

1. **Authentication:**

      - Navigate to /auth to log in or sign up.
      - Once logged in, you will be redirected to the home page.

2. **Search Movies:**

      - Use the search bar on the home page to search for movies.

3. **Add to Collection:**

      - Click the "Add to Collection" button on any movie card to add it to your personal   collection.

4. **View Collection:**

      - Navigate to /collection to view your movie collection.


### Contributing
- If you'd like to contribute to the project, please follow the contribution guidelines.