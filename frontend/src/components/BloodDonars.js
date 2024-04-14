import './BloodDonars.css';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar, Button } from '@mui/material';
import axios from 'axios';
import path from '../path';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import { Input, Label } from 'keep-react'

const BloodDonars = ()=>{
    const [data, setData] = useState([]);
    const [bloodType,setBloodType] = useState('');

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

  useEffect(()=>{
  if(bloodType != '') getBlood();
  },[bloodType])

  const getBlood = async (ele)=>{
    try {
      const response = await axios.post(`${path}search_donars`,{
        bloodGroup:bloodType
      });
      if (response.data) {
        setData(response.data);
      }
    } catch (err) {
      console.log(err);
    }
  }

    const navigate = useNavigate();
    return <div className='blood-donars'>  
        <div className='flex full-width justify-center content-center items-center'>
        <div className='mx-4 flex content-center h-min'>Slect by Blood Type</div>
    <Select
    value={bloodType}
    onChange={(e)=>setBloodType(e.target.value)}>
                  <MenuItem value={"A+"}>A+</MenuItem>
                  <MenuItem value={"A-"}>A-</MenuItem>
                  <MenuItem value={"B+"}>B+</MenuItem>
                  <MenuItem value={"B-"}>B-</MenuItem>
                  <MenuItem value={"AB+"}>AB+</MenuItem>
                  <MenuItem value={"AB-"}>AB-</MenuItem>
                  <MenuItem value={"O+"}>O+</MenuItem>
                  <MenuItem value={"O-"}>O-</MenuItem>
  </Select>
        </div>
        {data?.map((user) => (
        <div className="search-user py-[12px]" onClick={()=>{navigate(`/show?id=${user?._id}`)}}>
          <div className="search-avatar">
            <Avatar src={user.profilePicture}></Avatar>
          </div>
          <div className="search-text">
            <div className="search-details">
              <p>
               {user.firstname + " "+user.lastname}
              </p>
              <span>
                {" "}{user.city}{" "}
              - {" "}{user.state}{" "}
              - {""}{user.country}
              </span>
            </div>
            <div className="search-button-group">
            <Button sx={{fontSize:"1.2rem"}} variant='outlined' startIcon={<BloodtypeIcon sx={{color:"red"}}></BloodtypeIcon>}>{user.bloodGroup}</Button>
            </div>
             </div>
        </div>
      ))}
</div>;
}


export default BloodDonars;