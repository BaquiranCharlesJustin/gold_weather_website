import React from "react";

function App() {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center">
      <video
        className="w-full h-full object-cover absolute inset-0"
        src="/vidclassmeyt.mp4"
        autoPlay
        loop
        muted
      />
      <div className="relative text-5xl text-gold mb-8">
        Welcome to my TITE!
      </div>
      <div className="relative flex gap-4">
        <button className="hover:bg-gold text-white text-2xl py-2 px-4 rounded border-2 border-gold">
          Login
        </button>
        <button className="hover:bg-gold text-white text-2xl py-2 px-4 rounded border-2 border-gold">
          Signup
        </button>
      </div>
    </div>
  );
}

export default App;
