import logo from "./components/logo.svg";
import "./App.css";
import Header from "./components/NavBar.js";
// import Login from "./components/login.jsx";
// import SignUP from "./components/sing-up.jsx";

import Login from "./components/signin/Login.js";
import SignUP from "./components/signin/Signin.js";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Home from "./components/homePage.jsx";
import { Routes, Route } from "react-router-dom";
import Register from "./components/signin/Register.js";
import DonarHome from "./components/Homepage/Home.js";
import Show from "./components/profile/show.jsx";
import BloodDonars from './components/BloodDonars.js'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" index element={<Home></Home>}></Route>
        <Route path="/donarhome" element={<DonarHome></DonarHome>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/login"
          element={
            <GoogleOAuthProvider clientId="713976535576-c7c6grdnm12gjr9imqm388bp8utginil.apps.googleusercontent.com">
              <Login></Login>
            </GoogleOAuthProvider>
          }
        ></Route>
        <Route path="/blood_donars" element={<BloodDonars></BloodDonars>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/signup" element={<SignUP></SignUP>}></Route>
        <Route path="/show" element={<Show></Show>}></Route>
      </Routes>
    </div>
  );
}

export default App;
