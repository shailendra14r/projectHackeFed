import React, { useEffect, useState } from "react";
import "./homes.css";
import donor1 from "./Rectangle 19.png";
import donor2 from "./Rectangle 25.png";
import donor3 from "./Rectangle 28.png";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import arrow from "./Vector.png";
import { countries, bloodTypes, organs } from "../../utils/HomeData.js";
import Profile from "./Profile.js";
import axios from "axios";
import path from "../../path.js";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Input } from "@mui/material";


const DonarHome = () => {
  const [data, setData] = useState([]);
 
  const [city,setCity] = useState('');
  const [bloodGroup,setBloodgeoup] = useState("A+");
  const [organ,setOrgans] = useState("Liver");

  const getProfileDate = async () => {
    try {
      const response = await axios.get(`${path}donars`);
      if (response.data) {
        setData(response.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProfileDate();
  }, []);

  return (
    <div className="Homepage">
      <div className="left">
        <h3>SEARCH</h3>
  <div className="select_upper">

  <TextField value={city} label="city" onChange={e=>setCity(e.target.value)}></TextField>

  <Select
    sx={{color:"black"}}
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={organ}
    label={"Age"}
    onChange={(e)=>setOrgans(e.target.value)}
    >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>


  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={bloodGroup}
    label="Blood Group"
    onChange={(e)=>setBloodgeoup(e.target.value)}
    >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
</div>

        <Button
          className="btn button1"
          sx={{ my: 1, minWidth: 150 }}
          variant="contained"
          >
          <p>Filter</p>
          <img src={arrow} />
        </Button>
        <Button
          className="btn button2"
          sx={{ my: 1, minWidth: 150 }}
          variant="outlined"
          >
          Reset
        </Button>
      </div>
      <div className="right">
        <div className="right-details">
          <h1>Connect to donors</h1>
          <p>Be a lifeline: Donate organs, give the gift of life.</p>
        </div>
        <div className="button-container">
          <Button
            className="btn button1"
            sx={{ mx: 1, my: 1, minWidth: 150 }}
            variant="contained"
          >
            Blood
          </Button>
          <Button
            className="btn button1"
            sx={{ mx: 1, my: 1, minWidth: 150 }}
            variant="contained"
          >
            Kidney
          </Button>
          <Button
            className="btn button1"
            sx={{ mx: 1, my: 1, minWidth: 150 }}
            variant="contained"
          >
            Liver
          </Button>
          <Button
            className="btn button1"
            sx={{ mx: 1, my: 1, minWidth: 150 }}
            variant="contained"
          >
            Cornea
          </Button>
        </div>
        <div>
          <div className="profiles-container">
            {data
              ? data.map((ele) => {
                  return (
                    <>
                      <Profile data={ele} />
                    </>
                  );
                })
              : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonarHome;
