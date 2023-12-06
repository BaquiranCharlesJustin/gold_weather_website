function Dashboard() {
  return (
    <div className="grid grid-cols-2 gap-4 h-screen container mx-auto py-12">
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
        <div>
          <h2 className="text-2xl font-bold">Today's Weather</h2>
          <p>Temperature: C</p>
          <p>Wind: M/S</p>
          <p>Humidity: %</p>
        </div>
        {/* Upcoming Forecast */}
        <div className="">
          <h1 className="text-3xl font-bold underline">Upcoming Forecast</h1>
          <div className="grid grid-cols-3 m-6 gap-6">
            <div className="text-cyan-100 border border-sky-500 rounded-md">
              <p>Time: AM/PM</p>
              <p>Temperature: C</p>
              <p>Wind: M/S</p>
              <p>Humidity: %</p>
            </div>
            <div className="text-cyan-100 border border-sky-500 rounded-md">
              <p>Time: AM/PM</p>
              <p>Temperature: C</p>
              <p>Wind: M/S</p>
              <p>Humidity: %</p>
            </div>
            <div className="text-cyan-100 border border-sky-500 rounded-md">
              <p>Time: AM/PM</p>
              <p>Temperature: C</p>
              <p>Wind: M/S</p>
              <p>Humidity: %</p>
            </div>
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
