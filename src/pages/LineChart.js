import React, { useState, useEffect } from "react";
import { database } from "./firebaseConfig";
import { ref, get } from "firebase/database";
import { useLocation } from "react-router";
import { Line } from "react-chartjs-2";

function LineChart() {
  const [processedData, setProcessedData] = useState([]);

  useEffect(() => {
    const weatherRef = ref(database, "TESTDATAJAN3");

    get(weatherRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const weatherData = Object.values(snapshot.val());
          console.log("Weather Data Length: ", weatherData.length);

          // Function to extract and update state
          const processedData = weatherData.reduce((acc, entry) => {
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
              const RainMillimeter = match[9];
              acc.push({ dateTime, day, temperature, humidity, carbonDioxide,RainMillimeter, windSpeed });
            }
            

            return acc;
          }, []);

          // Log the processed data
          console.log("Processed Data:", processedData);
          console.log(processedData.slice(-24).map((data) => data.dateTime))

          // Set the processed data to state
          setProcessedData(processedData);
        } else {
          console.log("No Data Available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const chartData = {
    labels: processedData.slice(-8).map((data) => data.dateTime),
    datasets: [
      {
        label: "Temperature",
        data: processedData.slice(-8).map((data) => data.temperature),
        borderColor: "#FFD700",
        borderWidth: 1,
        fill: false,
      },
      {
        label: "Humidity",
        data: processedData.slice(-8).map((data) => data.humidity),
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
        fill: false,
      },
      {
        label: "CarbonDioxide",
        data: processedData.slice(-8).map((data) => data.carbonDioxide),
        borderColor: "#008000",
        borderWidth: 1,
        fill: false,
      },
      {
        label: "RainMillimeter",
        data: processedData.slice(-8).map((data) => data.RainMillimeter),
        borderColor: "#FFFFFF",
        borderWidth: 1,
        fill: false,
      },
      {
        label: "WindSpeed",
        data: processedData.slice(-8).map((data) => data.windSpeed),
        borderColor: "#FF0000",
        borderWidth: 1,
        fill: false,
      },
    ],
  };
  

  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Weather Data Line Chart</h2>
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Average Weather Per 8 Hours of the Day",
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
