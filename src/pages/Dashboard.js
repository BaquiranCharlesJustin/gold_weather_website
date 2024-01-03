import React, { useState, useEffect } from "react";
import { database } from "./firebaseConfig";
import { ref, get } from "firebase/database";
import { useLocation } from "react-router";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import LineChart from "./LineChart";
import rainy from "../Image/downpour-rainy-day.png";
import normal from "../Image/blue-cloud.png";
import warm from "../Image/yellow-sun-and-blue-cloud.png";
import hot from "../Image/yellow-sun.png";
Chart.register(CategoryScale);

const cloudImages = {
  rainy,
  normal,
  warm,
  hot,
};


function Dashboard() {
  const [weatherForecast, setWeatherForecast] = useState([]);

  useEffect(() => {
    const weatherRef = ref(database, "TESTDATAJAN3");

    get(weatherRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const weatherData = snapshot.val();
          Object.values(weatherData).map((entry) => {
            const regex =
            /^((\w+),\s(\w+\s\d{1,2}\s\d{4},\s\d{2}:\d{2}:\d{2}))\s-\sHumidity:\s(nan|-?\d+\.\d+)\s-\sTemperature:\s(nan|-?\d+\.\d+)\s-\sCarbonDioxide:\s(nan|-?\d+)\s-\sWindSpeed:\s(nan|-?\d+\.\d+)\s-\sSolarRadiance:\s(nan|-?\d+\.\d+)\s-\sRainMillimeter:\s(nan|-?\d+\.\d+)\s-\sWindDirection:\s(nan|-?\w+)$/

            const match = entry.match(regex);

            if (match) {
              const dateTime = match[3];
              const day = match[2];
              const temperature = match[5];
              const humidity = match[4];
              const carbonDioxide = match[6];
              const windSpeed = match[7];
              const solarRadiance = match[8];
              const RainMillimeter = match[9];
              const windDirection = match[10];

              setWeatherForecast((prevData) => [
                ...prevData,
                { dateTime, day, temperature, humidity, carbonDioxide, windSpeed, solarRadiance, RainMillimeter, windDirection },
              ]);
            }
          });
        } else {
          console.log("No Data Available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const upcomingForecast = () => {
    if (weatherForecast.length < 1) {
      return [];
    }

    const timeValues = ["8:00 AM", "4:00 PM", "12:00 AM"];
    const averageForecast = [];

    for (let i = 0; i < Math.min(3, Math.floor(weatherForecast.length / 8)); i++) {
      const start = i * 8;
      const end = start + 8;
      const subset = weatherForecast.slice(start, end);

      if (subset.length > 0) {
        const averageTemperature =
          subset.reduce((acc, data) => acc + parseFloat(data.temperature), 0) /
          subset.length;

        const averageHumidity =
          subset.reduce((acc, data) => acc + parseFloat(data.humidity), 0) /
          subset.length;

        const averageWindSpeed =
          subset.reduce((acc, data) => acc + parseFloat(data.windSpeed), 0) /
          subset.length;

        const averageRainChance =
          subset.reduce((acc, data) => acc + parseFloat(data.RainMillimeter), 0) /
          subset.length;

        const averageData = {
          time: timeValues[i],
          temp: averageTemperature.toFixed(2),
          humi: averageHumidity.toFixed(2),
          windSpd: averageWindSpeed.toFixed(2),
          rainChance: averageRainChance.toFixed(2),
        };

        averageForecast.push(averageData);
      }
    }

    return averageForecast;
  };

  const getCloudImage = (temperature) => {
    if (temperature < 20) {
      return cloudImages.rainy;
    } else if (temperature < 25) {
      return cloudImages.normal;
    } else if (temperature < 30) {
      return cloudImages.warm;
    } else {
      return cloudImages.hot;
    }
  };

  return (
    <div className="grid grid-cols-2 gap-4 bg-black h-screen container mx-auto py-12">
      <div className="p-6 text-cyan-100 border border-gold rounded-md">
        <h1 className="text-3xl font-bold underline">GRAPH</h1>
        <LineChart weatherData={weatherForecast} />
      </div>

      <div className="p-8 text-cyan-100 border border-gold rounded-md flex flex-col justify-center gap-11">
        <h1 className="text-3xl font-bold underline">Weather Dashboard</h1>
        {weatherForecast.length > 0 && (
          <div key={Object.keys(weatherForecast[0])}>
            <div className="border border-gold p-4 rounded-md">
              <div class="float-right">
                <img src={getCloudImage(weatherForecast[weatherForecast.length - 1].temperature)} alt="Weather Icon" width="100" height="100"/>
              </div>
              <h2 className="text-2xl text-gold font-bold">Today's Weather</h2>
              <p>
                Date and Time: {weatherForecast[weatherForecast.length - 1].dateTime}
              </p>
              <p>
                Temperature:{" "}
                {weatherForecast[weatherForecast.length - 1].temperature} °C
              </p>
              <p>Solar Radiance: {weatherForecast[weatherForecast.length - 1].solarRadiance}</p>
              <p>Humidity: {weatherForecast[weatherForecast.length - 1].humidity} %</p>
              <p>Carbon Dioxide: {weatherForecast[weatherForecast.length - 1].carbonDioxide}</p>
              <p>Wind Speed: {weatherForecast[weatherForecast.length - 1].windSpeed} M/S</p>
              <p>Wind Direction: {weatherForecast[weatherForecast.length - 1].windDirection}</p>
            </div>
          </div>
        )}

        <div className="">
          <h1 className="text-3xl font-bold underline">Upcoming Forecast of the Day</h1>
          <div className="grid grid-cols-3 m-6 gap-6">
            {upcomingForecast().map((forecast, index) => (
              <div
                key={index}
                className="text-cyan-100 bg-gray-700 p-4 shadow-md rounded-md">
                <p>Time: {forecast.time}</p>
                <p>Temperature: {forecast.temp} °C</p>
                <p>Wind Speed: {forecast.windSpd} M/S</p>
                <p>Rain Chance: {forecast.rainChance}</p>
                <p>Humidity: {forecast.humi} %</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-6 text-cyan-100 border border-gold rounded-md col-span-2">
        <h1 className="text-3xl font-bold underline">About Us Section</h1>
        <div>
          <h1>GROUP GOLD</h1>
          <p>
            About Us: Aiman Baga | Jacky Bruce Ibarra | Justin Baquiran | Kurt
            Sabino | Lance Del Rosario | Nick Jimenez | Patrick Maullon | Rafael
            Aquino | Rhenz Martinez |
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
