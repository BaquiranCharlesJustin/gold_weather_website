import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import  {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAkTkX4QHuKCvWgXUe4M3nTGN9fqc09FS0",
  authDomain: "iotlab5test.firebaseapp.com",
  databaseURL: "https://iotlab5test-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "iotlab5test",
  storageBucket: "iotlab5test.appspot.com",
  messagingSenderId: "345190449516",
  appId: "1:345190449516:web:d3f6330b21ccae8763b349"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app); // Initialize the database

export { database };
export const auth  = getAuth()
