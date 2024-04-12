import React, { useState } from "react";
import "./signup.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlefirstChange = (event) => {
    setfirstname(event.target.value);
  };
  const handlelastChange = (event) => {
    setlastname(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your authentication logic here
    console.log("Email:", email);
    console.log("Password:", password);
    console.log(firstname);
    console.log(lastname);
  };

  return (
    <div class="signup">
      <div class="signup-page">
        <div class="signup-top">
          <h1>SignUP Page</h1>
        </div>
        <div class="signup-middle">
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
                type="firstname"
                value={firstname}
                onChange={handlefirstChange}
                required
                id="outlined-basic"
                label="FirstName"
                variant="outlined"
              />
              <br />
              <TextField
                type="lastname"
                value={lastname}
                onChange={handlelastChange}
                required
                id="outlined-basic"
                label="LastName"
                variant="outlined"
              />
              <br />
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
            <Button variant="contained">SignUP</Button>
          </form>
        </div>
        <div class="signup-bottom">
          <div class="bottom-1">
            <h3>Sign-IN</h3>
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

export default SignupPage;
