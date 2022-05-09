// Import React and useState hook from the react module
import React, { useState } from 'react';
// Import PropTypes from the prop-types module
import PropTypes from 'prop-types';

// Function to make a POST request to the server which is set up in the server.js file and is used to return the token to authenticate the user.
// Note: If this was a large application you would add this to a separate directory
async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

// Function accepts setToken prop from the Login component in the App.js file, which needs to be deconstructed using PropTypes at the bottom of the file
export default function Login({ setToken }) {
    // Declaring constants for username and setUserName calling useState to set their return values (imported from the react module at the top of the page)
    const [username, setUserName] = useState();
    // Declaring constants for password and setPassword calling useState to set their return values (imported from the react module at the top of the page)
    const [password, setPassword] = useState();
    // Declaring constats for validationMessage and setValidationMessage calling useState to set their return values (imported from the react module at the top of the page)
    const [validationMessage, setValidationMessage] = useState();

    // Create a form submit handler that calls loginUser with the username and password
    // Call setToken with a successful result
    // Note: In a full application, you’ll need to handle situations where the component unmounts before a Promise resolves. Check out the 
    // tutorial https://www.digitalocean.com/community/tutorials/how-to-call-web-apis-with-the-useeffect-hook-in-react for more information.
    const handleSubmit = async e => {
        e.preventDefault();
        // If the password is valid. Note: hard coding the password here as 'password' for testing purposes
        if (password === 'password') {
            const token = await loginUser({
                username,
                password
            });
            setToken(token);
        }

        // If the password is invalid set a validation message
        setValidationMessage('The password provided is invalid');
    }

    // This displays the login form
    return (
        <div className="login-wrapper">
            <h1>Please Log In</h1>
            { /* Call form submit handler 'handleSubmit' using the onSubmit event handler on the form element */}
            <form className="login-form" onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    { /* Add onChange event that will get the value entered in the user name input */}
                    <input type="text" onChange={e => setUserName(e.target.value)} />
                </label>
                <label>
                    <p>Password</p>
                    { /* Add onChange event that will get the value entered in the password input */}
                    <input type="password" onChange={e => setPassword(e.target.value)} />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
            { /* If validation fails display a message */}
            <div className="validation-message">{validationMessage}</div>
        </div>
    )
}

// The setToken property is being passed to the Login component from the App componenet so we need to destructure the props object to pull out the setToken prop
Login.propTypes = {
    setToken: PropTypes.func.isRequired
}