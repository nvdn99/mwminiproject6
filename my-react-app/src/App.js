import React, { useState, useEffect } from 'react';
import './App.css';
function App() {
  const [sampleCars, setSampleCars] = useState([]);

  useEffect(() => {
    async function fetchCarData() {
      try {
        const response = await fetch('http://localhost:3000/api/v1/cars');
        const data = await response.json();
        setSampleCars(data);
      } catch (error) {
        console.error('Error fetching car data:', error);
      }
    }

    fetchCarData();
  }, []);

  return (
    <div className="app-container">
      <h1 className="app-title">Welcome to the Car Management System</h1>

      <div className="app-section">
        <h2>Car List</h2>
        {sampleCars.length > 0 ? (
          <ul className="app-file-list">
            {sampleCars.map((car, index) => (
              <li key={index}>
                Model: {car.model}, Year: {car.year}, Color: {car.color}
              </li>
            ))}
          </ul>
        ) : (
          <p>No cars available.</p>
        )}
      </div>
    </div>
  );
}

export default App;
