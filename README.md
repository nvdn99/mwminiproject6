

# Overview

The Car Management System is a basic web application that demonstrates the interaction between a React frontend and an Express backend. The frontend displays a list of sample cars retrieved from the backend and allows users to add new cars. The backend provides endpoints for fetching, adding, and deleting car data.


# Installation

Follow these steps to set up and run the Car Management System:

Clone this repository or download the source code.
Navigate to the project directory using your terminal or command prompt.
Install the necessary dependencies for both the frontend and backend 

# Usage

To run the Car Management System, follow these steps:

Start the Express backend:
The backend will start and listen on http://localhost:3000.

Then Start the React frontend:
The frontend will start and open in your default web browser at http://localhost:3000.
You can now interact with the Car Management System. The frontend will display a list of sample cars, and you can add new cars by filling out the form. You can also delete all car data using the "Delete All Cars" button.

# New Functionality

1. Delete All Cars

You can delete all car data using the "Delete All Cars" button on the frontend. This action is irreversible, so use it with caution.

2. Additional Form Fields

The form for adding a new car now includes additional fields such as "Fuel Type" and "Mileage."

# Backend API

The backend provides the following API endpoints:

GET /api/v1/cars: Retrieve a list of cars.
POST /api/v1/cars: Add a new car.
DELETE /api/v1/cars: Delete all car data.

You can access these endpoints through the frontend or by using tools like curl or Postman.

# Folder Structure

The project structure is divided into two main folders:

frontend: Contains the React frontend code.
backend: Contains the Express backend code.

In this updated version, I've added a section for "New Functionalities" to specifically document the new features related to deleting all cars and the additional form fields. The installation and usage sections are modified to include instructions for the new functionalities.


# edited-mwproject5
# edited-mwproject5
# mwminiproject6
