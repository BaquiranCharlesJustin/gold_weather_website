// import React, { useState, useEffect } from "react";
// import { database } from "./firebaseConfig";
// import { ref, get } from "firebase/database";
// import { useLocation } from "react-router";
// import { Line } from "react-chartjs-2";

// function LineChart() {
//   const [weatherForecast, setWeatherForecast] = useState([]);

//   useEffect(() => {
//     const weatherRef = ref(database, "DATA");

//     get(weatherRef)
//       .then((snapshot) => {
//         if (snapshot.exists()) {
//           const weatherData = Object.values(snapshot.val());
//           console.log("Weather Data Length: ", weatherData.length);
//           // Function to extract and update state
//           const processedData = weatherData.reduce((acc, entry) => {
//             const regex =
//               /^((\w+),\s(\w+\s\d{1,2}\s\d{4}\s\d{2}:\d{2}:\d{2}))\s-\sTemperature:\s(nan|-?\d+\.\d+)\s-\sHumidity:\s(nan|-?\d+\.\d+)$/;

//             const match = entry.match(regex);

//             if (match) {
//               const dateTime = match[1];
//               const day = match[2];
//               const temperature = match[4];
//               const humidity = match[5];

//               acc.push({ dateTime, day, temperature, humidity });
//             }

//             return acc;
//           }, []);

//           // Log the processed data
//           console.log("Processed Data:", processedData);
          
//         } else {
//           console.log("No Data Available");
//         }
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);


//   const chartData = {
//     labels: weatherData.map((data) => data.dateTime),
//     datasets: [
//       {
//         label: "Average Temperature",
//         data: weatherData.map((data) => data.temperature),
//         borderColor: "#FFD700",
//         borderWidth: 2,
//         fill: false,
//       },
//       {
//         label: "Average Humidity",
//         data: weatherData.map((data) => data.humidity),
//         borderColor: "rgba(75,192,192,1)",
//         borderWidth: 2,
//         fill: false,
//       },
//     ],
//   };

//   return (
//     <div className="chart-container">
//       <h2 style={{ textAlign: "center" }}>Weather Data Line Chart</h2>
//       <Line
//         data={chartData}
//         options={{
//           plugins: {
//             title: {
//               display: true,
//               text: "Average Weather Data over Days",
//             },
//             legend: {
//               display: true,
//             },
//           },
//         }}
//       />
//     </div>
//   );
// }

// export default LineChart;

import React, { useState, useEffect } from "react";
import { database } from "./firebaseConfig";
import { ref, get } from "firebase/database";
import { useLocation } from "react-router";
import { Line } from "react-chartjs-2";

function LineChart() {
  const [processedData, setProcessedData] = useState([]);

  useEffect(() => {
    const weatherRef = ref(database, "DATA");

    get(weatherRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const weatherData = Object.values(snapshot.val());
          console.log("Weather Data Length: ", weatherData.length);

          // Function to extract and update state
          const processedData = weatherData.reduce((acc, entry) => {
            const regex =
              /^((\w+),\s(\w+\s\d{1,2}\s\d{4}\s\d{2}:\d{2}:\d{2}))\s-\sTemperature:\s(nan|-?\d+\.\d+)\s-\sHumidity:\s(nan|-?\d+\.\d+)$/;

            const match = entry.match(regex);

            if (match) {
              const dateTime = match[3];
              const day = match[2];
              const temperature = match[4];
              const humidity = match[5];

              acc.push({ dateTime, day, temperature, humidity });
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
        borderWidth: 2,
        fill: false,
      },
      {
        label: "Humidity",
        data: processedData.slice(-8).map((data) => data.humidity),
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 2,
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
