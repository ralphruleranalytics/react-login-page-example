# Simple Login Page

Just a simple login page using React that takes a user name and password.

If you enter the correct password i.e. 'password' it will return an authentication token and send you to the route in the URL e.g. http://localhost://3000, http://localhost://3000/dashboard or http://localhost://3000/preferences.

If you enter an incorrect password it will display a validation message and keep you on the login page.

Most of the relevant code is in the App.js, Login.js and server.js files.

Run node server.js in the terminal to start a server to return an authentication token before trying to submit the form.

Other things that could be added to the application include using local storage or session storage to ensure the user stays logged in when you navigate to another page.

Could also try moving the loginUser function from the App.js file to a file in a separate directory for shared code e.g. a Services directory, adding an import statement for this to the App.js file and calling the method from there.

## Run the following in the terminal before starting program

To install the react-router-dom features such as BrowserRouter, Route and Routes: -

npm i react-router-dom

To install express and cors as a devDevependency so we can run a server to return an authentication token: -

npm install --save-dev express cors
