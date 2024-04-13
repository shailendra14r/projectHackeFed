import React from 'react';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import location_icon from "./location-icon.png"


export default function Profile({name, age, img, address}) {
  return (
    <div className="profile">
      <div className="profile-img">
        <img src={img} />
      </div>
      <div className="profile-details">
        <div className="donor-details">
          <p className="donor-name">{name}</p>
          <p className="donor-age">{age} years</p>
          <div className="donor-address">
            <img src={location_icon} />
            <p>{address}</p>
          </div>
        </div>
        <div className="tags-contact">
          <div className="tags">
            <Chip className='tag' label="limbs" color="primary" />
            <Chip className='tag' label="limbs" color="success" />
            <Chip className='tag' label="renal" color="success" />
          </div>
          <Button className="btn button1" sx={{mx:1, my:1, minWidth: 150}} variant="contained">Contact</Button>
        </div>
      </div>
    </div>
  )
}
