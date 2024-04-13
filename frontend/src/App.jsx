import logo from "./components/logo.svg";
import "./App.css";
import Header from "./components/NavBar.js";
// import Login from "./components/login.jsx";
// import SignUP from "./components/sing-up.jsx";

import Login from './components/signin/Login.js';
import SignUP from './components/signin/Signin.js';
import { GoogleOAuthProvider } from "@react-oauth/google";
import Home from "./components/homePage.jsx";
import {Routes,Route} from 'react-router-dom';
import Register from "./components/signin/Register.js";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" index element={<Home></Home>}></Route>
        <Route path="/login" element={ <GoogleOAuthProvider clientId="713976535576-c7c6grdnm12gjr9imqm388bp8utginil.apps.googleusercontent.com">
                 <Login></Login>
                </GoogleOAuthProvider>
        }></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/signup" element={<SignUP></SignUP>}></Route>
      </Routes>
    </div>
  );
}

export default App;
