import React, { useState, useEffect } from "react";
import { database } from "./firebaseConfig";
import { ref, get } from "firebase/database";
import { useLocation } from "react-router";
import { Line } from "react-chartjs-2";

function LineChart({ weatherData }) {
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

  const chartData = {
    labels: weatherData.map((data) => data.time),
    datasets: [
      {
        label: "Temperature",
        data: weatherData.map((data) => data.temp),
        borderColor: "#FFD700",
        borderWidth: 2,
        fill: false,
      },
      {
        label: "Humidity",
        data: weatherData.map((data) => data.humi),
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 2,
        fill: false,
      },
    ],
    
  };
  console.log(chartData);
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Weather Data Line Chart</h2>
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Weather Data over Time",
            },
            legend: {
              display: true,
            },
          },
        }}
      />
    </div>
  );
}

export default LineChart;