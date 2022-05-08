// Need to run node server.js in the terminal to start a server to return an authentication token
// before running npm start in the terminal, otherwise it will never return an authentication token

// Import React and useState hook from the react module
import React, { useState } from 'react';

// Import CSS
import './App.css';
import '../Login/Login.css';

// Import BrowserRouter, Route, Routes from react-router-dom module
// Needed to install react-router-dom in terminal for this to work: npm i react-router-dom
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Importing functions from their locations in the project
import Dashboard from '../Dashboard/Dashboard';
import Login from '../Login/Login';
import Preferences from '../Preferences/Preferences';

// Function for application
function App() {
    // Declaring constant for token and setToken by calling useState to set their return values (imported from the react module at the top of the page)
    const [token, setToken] = useState();

    // If a token has not been returned, display the Login component
    if (!token) {
        return <Login setToken={setToken} />
    }

    // If a token has been returned, the user has logged in successfully and the code below is what gets displayed in the browser
    return (
        <div className="wrapper">
            <h1>Application</h1>
            { /* If the user changes the URL to go to the dashboard or preferences it will display that component 
             using the BrowserRouter, Routes and Route imported from the react-router-dom module at the top of the page */ }
            <BrowserRouter>
                <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/preferences" element={<Preferences />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;