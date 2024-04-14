import React from 'react';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import location_icon from "./location-icon.png"
import { useNavigate } from 'react-router-dom';

export default function Profile({data}) {
  console.log(data);
  const navigate = useNavigate();
  return (
    <div className="profile" onClick={()=> navigate(`/show?id=${data?._id}`)}>
      <div className="profile-img">
        <img src={data?.profilePicture} />
      </div>
      <div className="profile-details">
        <div className="donor-details">
          <p className="donor-name">{data.firstname + " " + data.lastname}</p>
          <p className="donor-age">{data?.dob} years</p>
          <div className="donor-address">
            <img src={location_icon} />
            <p>{data.city}{"," + data.state}{"," + data.country}</p>
          </div>
          <Chip className='tag' label={data.organs[0]} color="secondary" />
        </div>
        <div className="tags-contact">
          <div className="tags">
            {
              data.illness?.map((ele)=>  <Chip className='tag' label={ele} color="secondary" />)
            }
          </div>
          <Button className="btn button1" sx={{mx:1, my:1, maxWidth: 150}} variant="contained">Contact</Button>
        </div>
      </div>
    </div>
  )
}
