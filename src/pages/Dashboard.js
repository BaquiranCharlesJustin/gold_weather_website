import React, { useState, useEffect } from "react";
import { database } from "./firebaseConfig";
import { ref, get } from "firebase/database";
import { useLocation } from "react-router";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import LineChart from "./LineChart";
Chart.register(CategoryScale);

function Dashboard() {
  // const location = useLocation();
  // // console.log(location.state ? location.state.uids : null);
  const [weatherForecast, setWeatherForecast] = useState([]);

  useEffect(() => {
    const weatherRef = ref(database, "aduForecast");

    get(weatherRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const weatherData = Object.values(snapshot.val());
          setWeatherForecast(weatherData);
          console.log(weatherData);
        } else {
          console.log("No Data Available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  //   get(weatherRef)
  //     .then((snapshot) => {
  //       if (snapshot.exists()) {
  //         const weatherArray = Object.entries(snapshot.val()).map(
  //           ([id, data]) => ({
  //             id,
  //             ...data,
  //           })
  //         );
  //         setWeatherForecast(weatherArray);
  //         console.log(weatherArray);
  //       } else {
  //         console.log("No Data Available");
  //       }
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  return (
    <div className="grid grid-cols-2 gap-4 bg-black h-screen container mx-auto py-12">
      {/* User Profile */}
      <div className="p-6 text-cyan-100 border border border-gold rounded-md">
        <h1 className="text-3xl  font-bold underline">GRAPH</h1>
        <LineChart weatherData={weatherForecast} />
      </div>
      {/* Weather Dashboard */}
      <div className="p-6 text-cyan-100 border border-gold rounded-md flex flex-col justify-center gap-11">
        <h1 className="text-3xl font-bold underline">Weather Dashboard</h1>
        {weatherForecast.length > 0 && (
          <div key={Object.keys(weatherForecast[0])[0]}>
            <h2 className="text-2xl text-gold font-bold">Today's Weather</h2>
            <p>Temperature: {weatherForecast[0].temp} C</p>
            <p>Wind: {weatherForecast[0].time}</p>
            <p>Humidity: {weatherForecast[0].humi} %</p>
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
                <p>Humidity: {forecast.humi}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Us */}
      <div className="p-6 text-cyan-100 border border border-gold rounded-md col-span-2">
        <h1 className="text-3xl font-bold underline">About Us Section</h1>
        <div>
          <h1>GROUP GOLD</h1>
          <p>
            About Us: Aiman Baga | Jacky Bruce Ibarra | Justin Baquiran | Kurt Sabino
            | Lance Del Rosario | Nick Jimenez | Patrick Maullon | Rafael Aquino |  Rhenz Martinez|
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
