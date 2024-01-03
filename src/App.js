import React, { useState } from "react";
import LoginModal from "./pages/LoginModal";
import SignupModal from "./pages/SignupModal";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isLoginModal, setLoginModal] = useState(false);
  const [isSignupModal, setSignupModal] = useState(false);

  const handleDivClick = () => {
    setModalOpen(false);
    setLoginModal(false);
    setSignupModal(false);
  };
  
  const handleLoginButtonClick = () => {
    setModalOpen(true);
    setLoginModal(true);
  };

  const handleSignupButtonClick = () => {
    setModalOpen(true);
    setSignupModal(true);
  };

  return (
    <div className="relative h-screen flex flex-col items-center justify-center z">
      <video
        onClick={handleDivClick}
        className="w-full h-full object-cover absolute inset-0"
        src="/vidclassmeyt.mp4"
        autoPlay
        loop
        muted
      />
      <div className="relative text-5xl text-gold mb-8">
        Welcome!
      </div>
      <div className="relative flex gap-4">
        {!isModalOpen && !isLoginModal && (
          <button
            onClick={handleLoginButtonClick}
            className="hover:bg-gold text-white text-2xl py-2 px-4 rounded border-2 border-gold"
          >
            Login
          </button>
        )}
        <LoginModal open={isLoginModal} />
        {!isModalOpen && !isSignupModal && (
          <button
            onClick={handleSignupButtonClick}
            className="hover:bg-gold text-white text-2xl py-2 px-4 rounded border-2 border-gold"
          >
            Signup
          </button>
        )}
        <SignupModal open={isSignupModal} />
      </div>
    </div>
  );
}

export default App;
