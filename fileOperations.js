const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const sampleCars = [
  { model: 'Car Model 1', year: 2020, color: 'Red' },
  { model: 'Car Model 2', year: 2021, color: 'Blue' },
  { model: 'Car Model 3', year: 2019, color: 'Green' },
];

app.get('/', (req, res) => {
  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Car Management</title>
      </head>
      <body>
        <h1>Welcome to the Car Management System</h1>
        <p>This is a simple demonstration of a car management system.</p>
        <form action="/api/v1/cars" method="GET">
          <button type="submit">View Cars</button>
        </form>
        <h2>Add a New Car</h2>
        <form action="/api/v1/cars" method="POST">
          <label for="model">Model:</label>
          <input type="text" id="model" name="model" required><br>
          <label for="year">Year:</label>
          <input type="number" id="year" name="year" required><br>
          <label for="color">Color:</label>
          <input type="text" id="color" name="color" required><br>
          <button type="submit">Add Car</button>
        </form>
      </body>
    </html>
  `;
  res.send(htmlContent);
});

app.get('/api/v1/cars', async (req, res) => {
  try {
    // Simulate an asynchronous operation with a Promise
    const cars = await getCars();
    res.json(cars);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch cars' });
  }
});

app.post('/api/v1/cars', async (req, res) => {
  try {
    const newCar = req.body;
    const createdCar = await addCar(newCar);
    res.status(201).json(createdCar);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add a new car' });
  }
});

app.delete('/api/v1/cars', async (req, res) => {
  // Implementing a callback for a non-async operation for illustration
  deleteCars((error) => {
    if (error) {
      res.status(500).json({ error: 'Failed to delete cars' });
    } else {
      res.status(204).send('Car data deleted successfully');
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});

// Function to simulate fetching cars asynchronously
function getCars() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(sampleCars);
    }, 1000);
  });
}

// Function to simulate adding a new car asynchronously
function addCar(newCar) {
  return new Promise((resolve) => {
    setTimeout(() => {
      sampleCars.push(newCar);
      resolve(newCar);
    }, 1000);
  });
}

// Function to simulate deleting cars with a callback
function deleteCars(callback) {
  setTimeout(() => {
    // Simulate a successful deletion
    callback(null);
  }, 1000);
}
