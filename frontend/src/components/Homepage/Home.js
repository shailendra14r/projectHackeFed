import React from "react";
import "./homes.css";
import donor1 from "./Rectangle 19.png";
import donor2 from "./Rectangle 25.png"
import donor3 from "./Rectangle 28.png"
import Stack from '@mui/material/Stack';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import arrow from './Vector.png';
import {countries, bloodTypes, organs} from '../../utils/HomeData.js';
import Profile from "./Profile.js";



const DonarHome = () => {

  return (
          <div className="Homepage">
            <div className="left">
              <h3>SEARCH</h3>

              <Autocomplete
                className="location"
                id="country-select"
                sx={{ minWidth: 150 }}
                options={countries}
                autoHighlight
                getOptionLabel={(option) => option.label}
                renderOption={(props, option) => (
                  <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                    <img
                      loading="lazy"
                      width="20"
                      srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                      src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                      alt=""
                    />
                      {option.label} ({option.code}) +{option.phone}
                  </Box>
                )}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Choose a country"
                    inputProps={{
                      ...params.inputProps,
                      autoComplete: 'new-password', // disable autocomplete and autofill
                    }}
                  />
                )}
              />

          <Autocomplete
            className = "location"
            disablePortal
            id="blood-type"
            options={bloodTypes}
            sx={{ minWidth: 150 }}
            renderInput={(params) => <TextField {...params} label="Choose Your Blood Group" />}
          />

          <Autocomplete
            className = "location"
            disablePortal
            id="combo-box"
            options={organs}
            sx={{ minWidth: 150 }}
            renderInput={(params) => <TextField {...params} label="Specify Organ" />}
          />

          <Button className="btn button1" sx={{my:1, minWidth: 150}} variant="contained">
            <p>Filter</p>
            <img src={arrow} />
          </Button>
          <Button className="btn button2" sx={{my:1, minWidth: 150}} variant="outlined">Reset</Button>

      </div>
      <div className="right">
        <div className="right-details">
          <h1>Connect to donors</h1>
          <p>Be a lifeline: Donate organs, give the gift of life.</p>
        </div>
        <div className="button-container">
            <Button className="btn button1" sx={{mx:1, my:1, minWidth: 150}} variant="contained">Blood</Button>
            <Button className="btn button1" sx={{mx:1, my:1, minWidth: 150}} variant="contained">Kidney</Button>
            <Button className="btn button1" sx={{mx:1, my:1, minWidth: 150}} variant="contained">Liver</Button>
            <Button className="btn button1" sx={{mx:1, my:1, minWidth: 150}} variant="contained">Cornea</Button>
        </div>
        <div className="profiles-container">
          <Profile name="Jaydee Devine" address="Kailash Hills, Delhi" age={17} img = {donor1}/>
          <Profile name="Jaydee Devine" address="Kailash Hills, Delhi" age={37} img = {donor2}/>
          <Profile name="Jaydee Devine" address="Kailash Hills, Delhi" age={26} img = {donor3}/>
        </div>
      </div>
    </div>
  );
};

export default DonarHome;
