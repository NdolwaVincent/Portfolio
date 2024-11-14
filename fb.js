// Import Firebase functions (modular SDK)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.x.x/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.x.x/firebase-database.js";


// Your Firebase configuration object (replace with your actual credentials)
const firebaseConfig = {
  apiKey: "AIzaSyD6k4OlLYnotuuChAjLBoHmqfv9-iwrlfY",
  authDomain: "alfajiri-database.firebaseapp.com",
  databaseURL: "https://alfajiri-database-default-rtdb.firebaseio.com",
  projectId: "alfajiri-database",
  storageBucket: "alfajiri-database.appspot.com",
  messagingSenderId: "310417854615",
  appId: "1:310417854615:web:6f65002a119caeaf9119d2",
  measurementId: "G-21TBZCRBHM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Reference to the database path where data will be stored
const dataRef = ref(database, 'users');

// Handle form submission to add data to Firebase
document.getElementById('dataForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent page reload on form submit

  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;

  // Push new data to Firebase
  const newData = { name, age };

  // Add data to Firebase
  push(dataRef, newData)
    .then(() => {
      document.getElementById('statusMessage').textContent = "Data added successfully!";
      document.getElementById('statusMessage').style.color = 'green';
    })
    .catch((error) => {
      document.getElementById('statusMessage').textContent = "Error: " + error.message;
      document.getElementById('statusMessage').style.color = 'red';
    });

  // Clear form fields
  document.getElementById('name').value = '';
  document.getElementById('age').value = '';
});
