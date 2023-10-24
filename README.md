The Car Management System is a simple Node.js application that demonstrates the basic functionality of managing a list of cars. This application includes features to view existing cars and add new cars to the list. It uses asynchronous operations and HTTP requests to achieve this functionality.

The code in this repository creates a web server using Node.js's built-in http module. This server serves both HTML content and JSON data, depending on the request type and URL.

## Key Features include:

File Operations: Functions for reading, writing, and deleting car information have been revamped to use Promises with async/await.

Adding Car Information: The addCarInfo function now returns a Promise, making asynchronous operations clearer.

HTTP Request Handling: The code employs async/await for efficient management of HTTP requests, resulting in better readability and error handling.

## How to run the code

Open a web browser and go to http://localhost:3001 to access the Car Management System. 

View Cars: Click the "View Cars" button to see a list of sample cars in JSON format.

Add a New Car: Fill out the form to add a new car. After submitting the form, you'll receive a JSON response with the details of the added car.

Simulate Delete: The code includes a route for simulating the deletion of car data. However, you would need to send a DELETE request to the appropriate endpoint to use this feature


# miniproject4
# edited-MWproject4
