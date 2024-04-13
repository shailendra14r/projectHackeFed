import React from "react";
import "./Home.css";
import "./homes.css";
import vector from "./Vector.png";
import donor1 from "./Rectangle 19.png";
import donor2 from "./Rectangle 25.png"
import donor3 from "./Rectangle 28.png"
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';


import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const DonarHome = () => {

  const dropdown = {
    blood: [
      'A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'
    ],
    cornea: [
      'A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'
    ],
    limbs: [
      'A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'
    ],
    kindey: [
      'A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'
    ],
    liver: [
      'A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'
    ],
  };


  const [anchorEl, setAnchorEl] = React.useState(null);
  const [field, setField] = React.useState("");

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setField(event.currentTarget.id);
  };
  const handleSearch = (name) => {
    setAnchorEl(null);
  };

  return (
    <div className="Homepage">
      <div className="top">
        <Button
          style={{ textTransform: "none" }}
          id="blood"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          Blood Donate
        </Button>
        <Button
          style={{ textTransform: "none" }}
          id="cornea"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          Cornea Transplant
        </Button>
        <Button
          style={{ textTransform: "none" }}
          id="limbs"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          Allotransplantation
        </Button>
        <Button
          style={{ textTransform: "none" }}
          id="kidney"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          Renal Transplant
        </Button>
        <Button
          style={{ textTransform: "none" }}
          id="liver"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          hepatic transplantation
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={() => setAnchorEl(null)}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {dropdown[field]?.map((name, index) => {
            return (
              <MenuItem key={index} onClick={() => handleSearch(name)}>
                {name}
              </MenuItem>
            );
          })}
        </Menu>
      </div>

      <div className="center">
        <div className="upper">
          <div className="wel" style={{ color: "#000000" }}>
            Welcome
          </div>
          <div className="session">
            <span style={{ color: "#FF5BAE" }}>Join us in making a difference and giving hope to those in need ❤️‍🩹.</span>
          </div>
        </div>
        <div className="mid">
          <div className="button">
            <button>
                Start Searching{" "}
              <img src={vector} className="vector" alt="myimg"></img>
            </button>
          </div>
        </div>
        <div className="last">
          <div className="connect">Connect with Donors</div>
          <div className="all">
            <div className="donor">
              <img src={donor1} className="image-law" alt="myimg"></img>
              <div className="datas">
                <div className="nam">
                  Jaydee Devine{" "}
                  <span style={{ color: "green" }}>27 years</span>
                </div>
                <Stack spacing={1} direction="row" alignItems="center" sx={{ padding: '10px 30px 10px 41px',display: 'flex' ,justifyContent:'start'}}>
                  <Chip label="A+" color="primary" />
                  <Chip label="cornea" color="success" />
                  <Chip label="hepatic" color="success" />
                </Stack>
              </div>
            </div>
            <div className="donor">
              <img src={donor2} className="image-law" alt="myimg"></img>
              <div className="datas">
                <div className="nam">
                  Jaydee Devine{" "}
                  <span style={{ color: "green" }}>36 years</span>
                </div>
                <Stack spacing={1} direction="row" alignItems="center" sx={{ padding: '10px 30px 10px 41px',display: 'flex' ,justifyContent:'start'}}>
                  <Chip label="O+" color="primary" />
                  <Chip label="renal" color="success" />
                  <Chip label="limbs" color="success" />
                </Stack>
              </div>
            </div>
            <div className="donor">
              <img src={donor3} className="image-law" alt="myimg"></img>
              <div className="datas">
                <div className="nam">
                  Jaydee Devine{" "}
                  <span style={{ color: "green" }}>29 years</span>
                </div>
                <Stack spacing={1} direction="row" alignItems="center" sx={{ padding: '10px 30px 10px 41px',display: 'flex' ,justifyContent:'start'}}>
                  <Chip label="O+" color="primary" />
                  <Chip label="limbs" color="success" />
                </Stack>
              </div>
            </div>
            <div className="donor">
              <img src={donor2} className="image-law" alt="myimg"></img>
              <div className="datas">
                <div className="nam">
                  Jaydee Devine{" "}
                  <span style={{ color: "green" }}>29 years</span>
                </div>
                <Stack spacing={1} direction="row" alignItems="center" sx={{ padding: '10px 30px 10px 41px',display: 'flex' ,justifyContent:'start'}}>
                  <Chip label="B+" color="primary" />
                  <Chip label="limbs" color="success" />
                  <Chip label="renal" color="success" />
                </Stack>
              </div>
            </div>
            <div className="donor">
              <img src={donor3} className="image-law" alt="myimg"></img>
              <div className="datas">
                <div className="nam">
                  Jaydee Devine{" "}
                  <span style={{ color: "green" }}>29 years</span>
                </div>
                <Stack spacing={1} direction="row" alignItems="center" sx={{ padding: '10px 30px 10px 41px',display: 'flex' ,justifyContent:'start'}}>
                  <Chip label="B+" color="primary" />
                  <Chip label="limbs" color="success" />
                  <Chip label="renal" color="success" />
                </Stack>
              </div>
            </div>
            <div className="donor">
              <img src={donor2} className="image-law" alt="myimg"></img>
              <div className="datas">
                <div className="nam">
                  Jaydee Devine{" "}
                  <span style={{ color: "green" }}>29 years</span>
                </div>
                <Stack spacing={1} direction="row" alignItems="center" sx={{ padding: '10px 30px 10px 41px',display: 'flex' ,justifyContent:'start'}}>
                  <Chip label="B+" color="primary" />
                  <Chip label="limbs" color="success" />
                  <Chip label="renal" color="success" />
                </Stack>
              </div>
            </div>
            <div className="donor">
              <img src={donor1} className="image-law" alt="myimg"></img>
              <div className="datas">
                <div className="nam">
                  Jaydee Devine{" "}
                  <span style={{ color: "green" }}>29 years</span>
                </div>
                <Stack spacing={1} direction="row" alignItems="center" sx={{ padding: '10px 30px 10px 41px',display: 'flex' ,justifyContent:'start'}}>
                  <Chip label="B+" color="primary" />
                  <Chip label="limbs" color="success" />
                  <Chip label="renal" color="success" />
                </Stack>
              </div>
            </div>
            <div className="donor">
              <img src={donor3} className="image-law" alt="myimg"></img>
              <div className="datas">
                <div className="nam">
                  Jaydee Devine{" "}
                  <span style={{ color: "green" }}>29 years</span>
                </div>
                <Stack spacing={1} direction="row" alignItems="center" sx={{ padding: '10px 30px 10px 41px',display: 'flex' ,justifyContent:'start'}}>
                  <Chip label="B+" color="primary" />
                  <Chip label="limbs" color="success" />
                  <Chip label="renal" color="success" />
                </Stack>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonarHome;
