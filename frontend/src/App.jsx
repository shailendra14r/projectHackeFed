import logo from "./components/logo.svg";
import "./App.css";
import Header from "./components/header.jsx";
import Login from "./components/login.jsx";
import SignUP from "./components/sing-up.jsx";
import Home from "./components/homePage.jsx";
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" index element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUP></SignUP>}></Route>
      </Routes>
    </div>
  );
}

export default App;
