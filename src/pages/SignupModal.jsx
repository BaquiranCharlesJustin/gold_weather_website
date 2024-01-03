import React from "react";
import { useState } from 'react'
import { auth } from './firebaseConfig'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { useNavigate } from "react-router-dom";
const SignupModal = ({ open }) => {
  const [username , setUsername] = useState("")
  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")
  const navigate = useNavigate();
  const handleRegister = () =>{
    console.log(email,username,password) 
    createUserWithEmailAndPassword(auth,email,password).then((success) =>{
      console.log("User Created")
      // const user = userCredential.user;
      alert("Succesful Login")
      
      navigate("/")
      const db = getDatabase();
      set(ref(db, `users/${success.user.uid}`), {
        username:username,
        email:email,
        id:success.user.uid    
        
    });
   
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }

  if (!open) return null;
  return (
    <div className="border-2 rounded-lg border-gold shadow-lg relative gap-4">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8">
        <div class="mb-4">
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            value={username} 
            onChange={(e)=>setUsername(e.target.value)}
          />
        </div>
        <div class="mb-4">
          <input
            class="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 l"
            id="password"
            type="text"
            placeholder="Password"
            value={password} 
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        <div class="mb-4">
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="Email"
            value={email} 
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div class="flex items-center">
          <button
            class="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleRegister}
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupModal;
