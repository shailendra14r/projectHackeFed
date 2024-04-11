import React, { useState } from "react";
import "./login.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your authentication logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div class="login">
      <div class="login-page">
        <div class="login-top">
          <h1>Login Page</h1>
        </div>
        <div class="login-middle">
          <form onSubmit={handleSubmit}>
            <div class="email">
              <br />
              {/* <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                required
              /> */}
              <TextField
                type="email"
                value={email}
                onChange={handleEmailChange}
                required
                id="outlined-basic"
                label="Email"
                variant="outlined"
              />
            </div>
            <div class="password">
              <TextField
                type="password"
                value={password}
                onChange={handlePasswordChange}
                required
                id="outlined-basic"
                label="Password"
                variant="outlined"
              />
            </div>
            <Button variant="contained">Login</Button>
          </form>
        </div>
        <div class="login-bottom">
          <div class="bottom-1">
            <h3>Sign-Up</h3>
          </div>
          <div class="bottom-2">
            <InstagramIcon className="bottom-icons" />
            <TwitterIcon className="bottom-icons" />
            <LinkedInIcon className="bottom-icons" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
