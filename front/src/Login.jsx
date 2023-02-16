import React, { useState } from "react";
import "./Login.scss";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email:", email, "Password:", password);
    props.handleLogin();
  };
  return (
    <div className="login-box">
      <div className="overlay"></div>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="input-box">
          <label>
            <span></span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </label>
        </div>
        <div className="input-box">
          <label>
            <span></span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default Login;
