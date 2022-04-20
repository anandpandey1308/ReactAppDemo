import React, { useState } from 'react';
import App from './App';
import './Style.css';

export default function Login() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: 'user1',
      password: 'pass1',
    },
  ];

  const errors = {
    uname: 'invalid username',
    pass: 'invalid password',
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: 'pass', message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: 'uname', message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <>
      <section>
        <div class="box">
          <div className="square" style={{ '--i': '0' }}>
            {' '}
          </div>
          <div className="square" style={{ '--i': '1' }}>
            {' '}
          </div>
          <div className="square" style={{ '--i': '2' }}>
            {' '}
          </div>
          <div className="square" style={{ '--i': '3' }}>
            {' '}
          </div>
          <div className="square" style={{ '--i': '4' }}>
            {' '}
          </div>
          <div className="square" style={{ '--i': '5' }}></div>

          <div class="contain">
            <div class="form">
              <h2>LOGIN </h2>
              <form onSubmit={handleSubmit}>
                <div class="inputBx">
                  <input type="text" name="uname" required />
                  <span>Login</span>
                  <i class="fas fa-user-circle"></i>

                  {renderErrorMessage('uname')}
                </div>
                <div class="inputBx password">
                  <input type="password" name="pass" required />
                  <span>Password</span>
                  
                  <i class="fas fa-key"></i>
                  {renderErrorMessage('pass')}
                </div>
                <div class="inputBx">
                  <input type="submit" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );

  return <>{isSubmitted ? <App /> : renderForm}</>;
}
