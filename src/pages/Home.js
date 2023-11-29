import React from "react";
import './Home.css';

class Home extends React.Component {
  render() {
    return (
      <div>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.15/dist/tailwind.min.css" rel="stylesheet"></link>
        <nav className="bg-black p-4 mb-8 flex justify-center custom-bg">
          <ul className="flex space-x-4">
            <li>
              <a href="Welcome Page.html" className="hover:text-yellow-300">
                Welcome
              </a>
            </li>
            <li>
              <a href="#about-bottom" className="hover:text-yellow-300">
                About Us
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com/search?client=opera-gx&q=manila+weather&sourceid=opera&ie=UTF-8&oe=UTF-8"
                target="_blank"
                className="hover:text-yellow-300"
              >
                Different City
              </a>
            </li>
          </ul>
        </nav>

        <div className="container mx-auto py-12" id="about">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-black rounded-lg shadow-md border-2 border-yellow-300">
              <img
                src="profile-picture.jpg"
                alt="Profile Picture"
                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-yellow-300"
              />
              <h3 className="text-2xl font-bold mb-2">User Profile</h3>
              <p>Username: Admin1</p>
              <p>Address: Random Address</p>
              <p>Birthdate: 06/06/1969</p>
              <p>Contact info:09********</p>
              <p>Position:Admin</p>
              <p>Email: example@example.com</p>
            </div>

            <div className="p-6 bg-black rounded-lg shadow-md border-2 border-yellow-300">
              <h1 className="text-4xl font-bold mb-6">Weather Dashboard</h1>
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">Today's Weather</h2>
                <p>
                  Temperature: <span id="temp4"></span>°C
                </p>
                <p>
                  Wind: <span id="wind">__ M/S</span>
                </p>
                <p>
                  Humidity: <span id="hum4"></span>%
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Upcoming Forecast</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-gray-700 rounded-lg shadow-md">
                    <h3 id="time">( ______ )</h3>
                    <p>
                      Temp: <span id="temp"></span>°C
                    </p>
                    <p>Wind: __ M/S</p>
                    <p>
                      Humidity:<span id="hum"></span>%
                    </p>
                  </div>
                  <div className="p-4 bg-gray-700 rounded-lg shadow-md">
                    <h3 id="time2">( ______ )</h3>
                    <p>
                      Temp: <span id="temp2"></span>°C
                    </p>
                    <p>Wind: __ M/S</p>
                    <p>
                      Humidity:<span id="hum2"></span>%
                    </p>
                  </div>
                  <div className="p-4 bg-gray-700 rounded-lg shadow-md">
                    <h3 id="time3">( ______ )</h3>
                    <p>
                      Temp: <span id="temp3"></span>°C
                    </p>
                    <p>Wind: __ M/S</p>
                    <p>
                      Humidity:<span id="hum3"></span>%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="about-bottom" className="container mx-auto py-12">
          <div className="p-6 bg-black rounded-lg shadow-md border-2 border-yellow-300">
            <h1 className="text-4xl font-bold mb-6">About Us Section</h1>
            <p>
              About Us: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed vestibulum...
            </p>
            <p>
              About Us: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed vestibulum...
            </p>
            <p>
              About Us: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed vestibulum...
            </p>
            <p>
              About Us: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed vestibulum...
            </p>
          </div>
        </div>

        {/* <script>
        fetch("../pages/api/goldData.json")
            .then(response => response.json())
            .then(data =>{
                console.log(data.DHT.time["x"])
                console.log(data.DHT.time.temp["y"])
                console.log(data.DHT.time.hum["z3"])
                //1st Weather
                document.querySelector("#time").innerText = data.DHT.time["x"]
                document.querySelector("#temp").innerText = data.DHT.time.temp["y"]
                document.querySelector("#hum").innerText = data.DHT.time.hum["z"]
                //2nd Weather
                document.querySelector("#time2").innerText = data.DHT.time["x2"]
                document.querySelector("#temp2").innerText = data.DHT.time.temp["y2"]
                document.querySelector("#hum2").innerText = data.DHT.time.hum["z2"]
                //3rd Weather
                document.querySelector("#time3").innerText = data.DHT.time["x3"]
                document.querySelector("#temp3").innerText = data.DHT.time.temp["y3"]
                document.querySelector("#hum3").innerText = data.DHT.time.hum["z3"]
                //weather today
                document.querySelector("#temp4").innerText = data.DHT.time.temp["y4"]
                document.querySelector("#hum4").innerText = data.DHT.time.hum["z4"]
            })

    </script> */}
      </div>
    );
  }
}
export default Home;
