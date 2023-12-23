import { useState } from "react";
import './Login.css';

function Login(){
    
            const [username, setUsername] = useState('');
            const [password, setPassword] = useState('');
            const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    if (username && password) {
      setLoggedIn(true);
    }
  };

    return(
        <div className="formbox">
          <h2 className="loginhead">Login Form</h2>
      <div className="login-container">
        {loggedIn ? (
          <div>
            <h2>Welcome, {username}!</h2>
            <p>You are now logged in.</p>
          </div>
        ) : (
          <div>
            <form>
              <div className="input-container">
                <label for="email">Email:</label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="input-container">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div>
                <a href="Forget Password?">Forget Password?</a>
              </div>

              <button type="button" onClick={handleLogin}>
                LOGIN
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
    );
}
export default Login;