import React from "react";
import { useState } from 'react'
import { auth } from './firebaseConfig'
import {  signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, child, get } from "firebase/database";
import { useNavigate } from "react-router-dom";
const LoginModal = ({ open }) => {
  const [username , setUsername] = useState("")
  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")
  const navigate = useNavigate();
  const dbRef = ref(getDatabase());
  const [data,setData] = useState({
    email:"",
    id:"",
    username:""
  })
  const handleLogin = () =>{
    console.log(username,password)
    signInWithEmailAndPassword(auth,email,password).then((userCredential) =>{
      const user = userCredential.user;
      let log = {
        uids : user.uid
      }
      alert("Succesful Login")
      
      navigate("/dashboard" , {
        state:log
      })
    }) 
  }
  if (!open) return null;
  return (
    <div className="border-2 rounded-lg border-gold shadow-lg relative gap-4">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 " >
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            email
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="email"
            value={email} 
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="text"
            placeholder="******************"
            value={password} 
            onChange={(e)=>setPassword(e.target.value)}
          />
          <p class="text-red-500 text-xs italic">Please choose a password.</p>
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleLogin}
          >
            Sign In
          </button>
          <a
            class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  );
};

export default LoginModal;
