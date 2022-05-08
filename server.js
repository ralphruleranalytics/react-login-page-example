// Needed a server to act as a backend that would return a token so I created one using Node.js and the Express web
// framework. Installed express and cors as a devDependency in the terminal: npm install --save-dev express cors

// To start the server run node server.js in the terminal which will output a response. You can also visit
// http://localhost:8080/login to see the JSON object

// Import express and save the result to a variable called 'app'
const express = require('express');
const app = express();

// Add cors as a middleware by importing cors and adding it to the app variable by calling 'use'
// Warning: Do not enable CORS for all routes in a production application. This can lead to security vulnerabilities.
const cors = require('cors');
app.use(cors());

// Listen to a specific route with app.use. The first argumnet is the path the application listens to.
// The second argument is a callback function that runs when the application serves the path. The callback
// takes the req argument whihc contains the request data and a res argument that handles the result
app.use('/login', (req, res) => {
    res.send({
        token: 'authenticated'
    });
});

// Run the server on port 8080 using app.listen
app.listen(8080, () => console.log('API is running on http://localhost://8080/login'));