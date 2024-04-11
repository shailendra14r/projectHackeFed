import logo from "./logo.svg";
import "./App.css";

import Header from "./header.jsx";
import Login from "./login.jsx";
import SignUP from "./sing-up.jsx";

import { Switch } from "@mui/material";
import Home from "./homePage.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      {/* <SignUP /> */}
      {/* <Home /> */}
      <Login />

      {/* <Router>
        <Header />
        <Switch>
          <Route path="/">
            <Home />
          </Route> */}
      {/* <Route path="/signIN">
            <Login />
          </Route>
          <Route path="/signUP">
            <SignUP />
          </Route> */}
      {/* </Switch>
      </Router> */}
    </div>
  );
}

export default App;
