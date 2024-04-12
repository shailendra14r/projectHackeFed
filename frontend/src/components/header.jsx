
import Img from "./logo.png";
import "./header.css";
import { Link } from "react-router-dom";

export default function header() {
  return (
    <div class="header">
      <div class="left">
        <img class="logo" src={Img} />
        {/* <Link to="/"> */}
        <h3 class="logo-name">E-NAVODIT HEALTHCARE</h3>
        {/* </Link> */}
      </div>
      <div class="center"></div>
      <div class="right">
        {/* <Link to={"/signIN"}> */}
        <h3 class="signin">Sign-IN</h3>
        {/* </Link> */}
        {/* <Link to={"/signUP"}> */}
        <h3 class="register">Sign-UP</h3>
        {/* </Link> */}
      </div>
    </div>
  );
}
