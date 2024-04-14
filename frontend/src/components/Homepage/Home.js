import React, { useEffect, useState } from "react";
import "./homes.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import arrow from "./Vector.png";
import InputLabel from '@mui/material/InputLabel';
import { bloodTypes, organs } from "../../utils/HomeData.js";
import Profile from "./Profile.js";
import axios from "axios";
import path from "../../path.js";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


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
  <TextField value={city} label="city" onChange={e=>setCity(e.target.value)} fullWidth></TextField>
  <FormControl fullWidth className="my-2">
  <InputLabel id="demo-simple-select-label" fullWidth >Organ</InputLabel>
  <Select
    sx={{color:"black"}}
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={organ}
    label={"Organ"}
    fullWidth
    onChange={(e)=>setOrgans(e.target.value)}
    >
      { organs.map((val)=> <MenuItem value={val}>{val}</MenuItem>) }
  </Select>
</FormControl>
<FormControl fullWidth>
  <InputLabel id="demo-simple-select-label" fullWidth>Blood Group</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={bloodGroup}
    label="Blood Group"
    fullWidth
    onChange={(e)=>setBloodgeoup(e.target.value)}
    >
      { bloodTypes.map((val)=> <MenuItem value={val}>{val}</MenuItem>) }
  </Select>
</FormControl>
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
