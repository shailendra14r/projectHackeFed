import React, { useEffect, useRef, useState } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { Button, Avatar, Icon } from "@mui/material";
import { Sidebar } from "keep-react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {
  Chat,
  SignIn,
  Note,
  Lightning,
  UserPlus,
  User,
  UsersThree,
  Sliders,
  SignOut,
  Bell,
  Book,
} from "phosphor-react";


import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./Navbar.css";
import Tooltip from "@mui/material/Tooltip";
import Badge from "@mui/material/Badge";
import logo from "././../static/logo.png";
import { Drawer, Divider } from "@mui/material";
import path from "./../path";
import axios from "axios";
import { addUser } from "./../utils/slices/userSlice";
const version = "1.0.0";

const Navbar = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [notificationBadge, setNotificationBadge] = useState(0);
  const [showFilterModal, setshowFilterModal] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [load, setload] = useState(false);
  const locationState = useLocation();
  const dispatch = useDispatch();

  const location = useRef();

  useEffect(() => {
    location.current = window.location;
  }, []);



  

  return (
    <>
        <div className="drawerOpener">
          <Drawer anchor="left" open={isDrawerOpen}>
            <div
              onClick={() => setDrawerOpen(!isDrawerOpen)}
              className="drawerClose"
            >
              <IconButton>
                <ArrowBackIosRoundedIcon></ArrowBackIosRoundedIcon>
              </IconButton>

            </div>
            <div className="drawer">
              <Sidebar aria-label="Sidebar with multi-level dropdown example">
          
                  <span
                    className=""
                    style={{
                      "font-weight": 700,
                      "font-size": "1.4rem",
                      marginLeft: "4px",
                    }}
                  >
                    E-
                  </span>
                  <span
                    className=""
                    style={{
                      "font-weight": 800,
                      color: "#1C8765",
                      "font-size": "1.4rem",
                    }}
                  >
                    Navodit
                  </span>
                  <div
                    onClick={() => setDrawerOpen(!isDrawerOpen)}
                  >
                    <Link to={"/sharepost"}>
                      <Sidebar.Item icon={<Note size={24} />}>
                        Home
                      </Sidebar.Item>
                    </Link>
                    <Link to={"/sharepost"}>
                      <Sidebar.Item icon={<Note size={24} />}>
                        Donar
                      </Sidebar.Item>
                    </Link>
                    <Link to={"/sharepost"}>
                      <Sidebar.Item icon={<Note size={24} />}>
                        Blood Donars
                      </Sidebar.Item>
                    </Link>
                    <Link onClick={()=>localStorage.clear()}>
                      <Sidebar.Item icon={<Note size={24} />}>
                        Logout
                      </Sidebar.Item>
                    </Link>
                    <Link to={"/sharepost"}>
                      <Sidebar.Item icon={<Note size={24} />}>
                        Profile
                      </Sidebar.Item>
                    </Link>
                  </div> 
              </Sidebar>
            </div>
          </Drawer>
        </div>

      <nav className="navbar-container">
        <div className="navbar-toolbar">
          <ul
            className="icon-class"
            style={{ minWidth: "9.4rem" }}
            onClick={() => navigate("/")}
          >
            <li>{<img src={logo} alt="E_navodit" width={"33px"} style={{borderRadius:"50%"}}/>}</li>
            <li>
              <span
                className=""
                style={{
                  "font-weight": 700,
                  "font-size": "1.4rem",
                  marginLeft: "4px",
                }}
              >
              E-
              </span>
              <span
                className=""
                style={{
                  "font-weight": 800,
                  color: "#1C8765",
                  "font-size": "1.4rem",
                }}
              >
                Navodit
              </span>
            </li>
            <li>
              <span
                style={{
                  margin: "4px",
                  color: "gray",
                }}
              >
                Heathcare
              </span>
            </li>
          </ul>

          <ul className="nav-button">
            <li className="cursor-pointer nav_link" onClick={() => navigate("/home")}>
              Home
            </li>
            <Link to="/donarHome">
              <li className="cursor-pointer nav_link" style={{ minWidth: "4rem" }}>
               Donors
              </li>
            </Link>
            <Link to="/people">
              <li className="cursor-pointer nav_link" style={{ minWidth: "4rem" }}>
                Blood Donars
              </li>
            </Link>
            {/* <Link onClick={()=>{console.log(user.userDB.firstname)}}>
                CHECK
            </Link> */}
           
            
          </ul>

          <div style={{ flex: 1 }}></div>
      
          <div style={{ flex: 1 }}></div>

          <ul className="nav-icons">
            {/* <li>
              <Tooltip title="Search">
                <IconButton
                  aria-label="delete"
                  onClick={() => navigate("/search")}
                >
                  <SearchIcon sx={{ color: "black", fontSize: "28px" }} />
                </IconButton>
              </Tooltip>
            </li>

            <li>
              <Link to={"/notifications"}>
                <Tooltip title="notification">
                  <IconButton
                    aria-label="delete"
                    className="chat-icon"
                    onClick={() => {
                      if (!user.user) {
                        setLoginError(true);
                        navigate("/");
                      }
                    }}
                  >
                    <Badge badgeContent={notificationBadge} color="primary">
                      <NotificationsNoneRoundedIcon
                        sx={{ color: "black", fontSize: "25px" }}
                      />
                    </Badge>
                  </IconButton>
                </Tooltip>
              </Link>
            </li> */}
          </ul>

          { user.user ? (
            <div className="flex gap-x-4">
            <Avatar
              sx={{ height: "30px", width: "30px" }}
              onClick={() => navigate("/profile")}

              src={user.userDB?.profilePicture || user.user?.profilePicture}
              className="cursor-pointer"
            ></Avatar>
          </div>
          ) : (
             <Button variant="outlined" Link="/login">
             <Link to="/Login">
               {"Signin"}
             </Link>
           </Button>
          )}
          <div
            className="drawer-opener"
            onClick={() => setDrawerOpen(!isDrawerOpen)}
          >
            <MoreVertIcon
              sx={{ width: "24px", marginLeft: "4px" }}
            ></MoreVertIcon>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
