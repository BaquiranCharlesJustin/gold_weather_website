import React, { useState, useEffect } from "react";
import { database } from "./firebaseConfig";
import { ref, get } from "firebase/database";

function Dashboard() {
  const [weatherForecast, setWeatherForecast] = useState([]);

  useEffect(() => {
    const weatherRef = ref(database, "weatherForecast");

    get(weatherRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const weatherArray = Object.entries(snapshot.val()).map(
            ([id, data]) => ({
              id,
              ...data,
            })
          );
          setWeatherForecast(weatherArray);
          console.log(weatherArray);
        } else {
          console.log("No Data Available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4 bg-black h-screen container mx-auto py-12">
      {/* User Profile */}
      <div className="p-6 text-cyan-100 border border-sky-500 rounded-md">
        <h1 className="text-3xl  font-bold underline">User Profile</h1>
        <div>
          <p>Username:</p>
          <p>Address: </p>
          <p>Birthdate: </p>
          <p>Contact Info: </p>
          <p>Position: </p>
          <p>Email: </p>
        </div>
      </div>
      {/* Weather Dashboard */}
      <div className="p-6 text-cyan-100 border border-sky-500 rounded-md flex flex-col justify-around">
        <h1 className="text-3xl font-bold underline">Weather Dashboard</h1>
        {weatherForecast.length > 0 && (
          <div key={weatherForecast[0].id}>
            <h2 className="text-2xl text-gold font-bold">Today's Weather</h2>
            <p>Temperature: {weatherForecast[0].temp} C</p>
            <p>Wind: {weatherForecast[0].time}</p>
            <p>Humidity: {weatherForecast[0].humid} %</p>
          </div>
        )}
        {/* Upcoming Forecast */}
        <div className="">
          <h1 className="text-3xl font-bold underline">Upcoming Forecast</h1>
          <div className="grid grid-cols-3 m-6 gap-6">
            {weatherForecast.slice(1, 4).map((forecast) => (
              <div
                key={forecast.id}
                className="text-cyan-100 bg-gray-700 p-4 shadow-md rounded-md"
              >
                <p>Time: {forecast.time}</p>
                <p>Temperature: {forecast.temp}</p>
                <p>Wind: M/S</p>
                <p>Humidity: {forecast.humid}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Us */}
      <div className="p-6 text-cyan-100 border border-sky-500 rounded-md col-span-2">
        <h1 className="text-3xl font-bold underline">About Us Section</h1>
        <div>
          <p>About Us: </p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
