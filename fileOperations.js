const fs = require('fs').promises;
const http = require('http');
const url = require('url');
const querystring = require('querystring');

// File operations with Promises
async function readCarFile(filePath) {
  try {
    return await fs.readFile(filePath, 'utf8');
  } catch (error) {
    throw error;
  }
}

async function writeCarFile(filePath, content) {
  try {
    await fs.writeFile(filePath, content);
  } catch (error) {
    throw error;
  }
}

async function deleteCarFile(filePath) {
  try {
    await fs.unlink(filePath);
  } catch (error) {
    throw error;
  }
}

// Sample car data
const sampleCars = [
  { model: 'Car Model 1', year: 2020, color: 'Red' },
  { model: 'Car Model 2', year: 2021, color: 'Blue' },
  { model: 'Car Model 3', year: 2019, color: 'Green' },
];

// Function to add car information with a Promise
async function addCarInfo(carData, newCar) {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous operation (e.g., database insertion)
    setTimeout(() => {
      carData.push(newCar);
      resolve(newCar);
    }, 1000); // Simulate a 1-second delay
  });
}

// Create an HTTP server
const server = http.createServer(async (req, res) => {
  const { pathname, query } = url.parse(req.url, true);

  if (req.method === 'GET' && pathname === '/') {
    // Serve an HTML page when accessing the root URL
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
            <label for "color">Color:</label>
            <input type="text" id="color" name="color" required><br>
            <button type="submit">Add Car</button>
          </form>
        </body>
      </html>
    `;
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(htmlContent);
  } else if (req.method === 'GET' && pathname === '/api/v1/cars') {
    // Respond with sample car data as JSON
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(sampleCars));
  } else if (req.method === 'POST' && pathname === '/api/v1/cars') {
    // Parse the POST data
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });

    req.on('end', async () => {
      const formData = querystring.parse(body);

      try {
        // Add the new car to the sampleCars array using an async function
        const newCar = await addCarInfo(sampleCars, formData);
        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(newCar));
      } catch (error) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error adding car information');
      }
    });
  } else if (req.method === 'DELETE' && pathname === '/api/v1/cars') {
    // Implement DELETE logic
    res.writeHead(204, { 'Content-Type': 'text/plain' });
    res.end('Car data deleted successfully');
  } else {
    // Handle invalid routes
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
