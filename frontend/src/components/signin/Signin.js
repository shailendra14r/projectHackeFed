import React, { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import "./signin.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Chip } from "@mui/material";
import { Badge } from "@mui/base";
import {DatePicker} from 'keep-react'
import path from "../../path";
import axios from "axios";
import { addUser } from "../../utils/slices/userSlice";
import {useDispatch} from 'react-redux';
import LinearProgress from '@mui/material/LinearProgress';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setToken } from "../../utils/slices/utilitySlice";
import { Cactus } from "phosphor-react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


const Signin = () => {
  const [searchParam] = useSearchParams();
  const [activeStep, setActiveStep] = useState(0);
  const [donar,setDonar] = useState(searchParam.get('donar'));
  const [error, setError] = useState("");
  const [otp,setOtp] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setconfirm] = useState("");
  const [username, setusername] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [dob, setdob] = useState("");
  const [gender, setgender] = useState("male"); 
  const [city, setcity] = useState("");
  const [organ,setOrgan] = useState("");
  
  const [illness,setIllness] = useState([]);
  const [currentIllness,setCurrentIllness] = useState("");
  const [currentOrgan,setCurrentOrgan] = useState("");
  const [organs,setOrgans] = useState([]);

  const [bloodGroup,setBloodGroup] = useState("");
  const [referral,setReferral] = useState("");

  const [load,setload] = useState(false);
  const [state,setState] = useState("");
  const [disabled,setDisabled] = useState(true);
  const [isUserUnique,setUserUnique] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
   
 
  const illnessSelectHandle = (e)=>{
    if(e.keyCode == "13"){
      if(e.target.value.length > 0)
        setIllness([...illness,e.target.value.toUpperCase().trim()]);
      e.target.value = "";
      setCurrentIllness("");
    }
  }
  const organsSelectHandle = (event)=>{
   
    setOrgans([...organs,event.target.value]);
  }

  const deleteOrgan = (e)=>{
    let organTemp = organs;
    organTemp = organTemp.filter((ele)=>{
      return ele != e;
    })
    setOrgans(organTemp);
    return;
  }

  const deleteSkill = (e)=>{
    let illTemp = illness;
    illTemp = illTemp.filter((ele)=>{
      return ele != e;
    })
    setIllness(illTemp);
    return;
  }

  const validate = () => {
    if (!emailRegex.test(email) && email.length > 0) {
      setError("Enter a Valid Email");
      return false;
    }
    if (!passwordRegex.test(password) && password.length > 0) {
      console.log(password);
      setError("Enter password with a capital letter,small,Number and symbol");
      return false;
    }
    if (password != confirm) {
      setError("Password didnt match with confirm");
      return false;
    }
    setError("");
    return true;
  };

  const isEmpty = () => {
    if (
      !username ||
      !email ||
      !password ||
      !firstname ||
      !lastname ||
      !dob == 0
    ) {
      setError("Mandatory field is Empty. Fill up and try again");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmitOtp = (e)=>{
     console.log(e);

     if(e.target.value == ''){
      setOtp('');
     }
     if(e.target.value.length <=6 && e.target.value.slice(-1)>='0' && e.target.value.slice(-1)<='9'){
      console.log("run")
      setOtp(e.target.value);
     }

  };

  const handleSubmitSignin = async ()=>{
     if(otp.length<6){
      toast.error("OTP should be 6 digit");
      return;
     }
      setload(true);
       try{
          const response = await axios.post(`${path}signin`,{
          email,password,otp,
          firstname,lastname,gender,dob,city,state,
          illness,organs,need:organ,bloodGroup,referral
        });

        console.log(response);

        if(response.data.success){
            dispatch(setToken(response.data.token));
            console.log("setting user part 1");
            dispatch(addUser(response.data.userData));
            navigate('../');
            setError("");
        }
        else{
          toast.error(response.data.msg);
          setError(response.data.msg)
        }
      }
      catch(err){
        console.log(error);
      }

      setload(false);
  };


  const submitHandler = async () => {
      try{
        
          setload(true);
          const res = await axios.post(`${path}register`, {
           email
          });
          console.log(res);
          if(res.data.success){
          setActiveStep(3);
          }
          setload(false);
    
      }catch(err){
        console.log(err);
       }
  };

  // const userNameChangeHandler = async ()=>{
  //     try{
  //         const response = await axios.get(`${path}getUserName?user=${username}`);
  //         console.log(response);
  //         if(!response.data.isUserUnique){
  //           toast.error("Username is not available",{
  //             className: "toast-message"
  //           });
  //         }else{
  //           toast.success("Username is available");
  //         }

  //         setUserUnique(response.data.isUserUnique);
  //     }
  //     catch(err){
  //       toast.error("Error Occured in Fetchin Username");
  //     }
  // };

  return (
    <div className="signin">
    {load && <LinearProgress></LinearProgress>}
      <ToastContainer></ToastContainer>
      <div className="stepper largeScreen hidden lg:block">
        <Stepper activeStep={activeStep}>
          <Step>
            <StepLabel>Register</StepLabel>
          </Step>
          <Step>
            <StepLabel>Details</StepLabel>
          </Step>
          <Step>
            <StepLabel>Submit</StepLabel>
          </Step>
          <Step>
            <StepLabel>Verify</StepLabel>
          </Step>
        </Stepper>
      </div>
      
      <div className="stepper smallScreen lg:hidden">
      <Stepper activeStep={activeStep}>
        <Step>
          <StepLabel></StepLabel>
        </Step>
        <Step>
          <StepLabel></StepLabel>
        </Step>
        <Step>
          <StepLabel></StepLabel>
        </Step>
        <Step>
          <StepLabel></StepLabel>
        </Step>
      </Stepper>
    </div>

      

      <div className="signin-button">
        <Button
          sx={{ color: "black" }}
          disabled={activeStep == 0}
          startIcon={<ArrowBackIosIcon></ArrowBackIosIcon>}
          onClick={() => setActiveStep(activeStep - 1)}
        >
          Back
        </Button>
      </div>

      <div className="signin-body">
        {activeStep == 0 ? (
          <>
            {/* First Paenel */}
            <div className="login-box">
              <div className="login-box-title">Welcome</div>
              
              {/* <div className={isUserUnique?"login-box-field":"login-box-field invalid-user"}> */}
                {/* <p>Username</p>
                <input
                  value={username}
                  onChange={(e) => setusername(e.target.value?.toLowerCase())}
                  onBlur={()=>{ 
                    validate()
                    userNameChangeHandler()
                    }}
                  placeholder="Choose a unique username"
                ></input>
              </div> */}

              <div className="login-box-field">
                <p>Email</p>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={validate}
                ></input>
              </div>

              <div className="login-box-field">
                <p>Password</p>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onBlur={validate}
                ></input>
              </div>
              <div className="login-box-field">
                <p>Confirm </p>
                <input
                  type="password"
                  placeholder="Re-enter Password"
                  value={confirm}
                  onChange={(e) => setconfirm(e.target.value)}
                  onBlur={validate}
                ></input>
              </div>

              <div className="login-box-error">{error}</div>
              <div className="login-box-link">Have a Account ? Login <Link to='/login'>here</Link></div>
            </div>

            
            <div className="login-side-display"></div>
          </>
        ) : // second panel
        activeStep == 1 ? (
          <>
            <div className="login-box">
              <div className="login-box-title">Tell us more</div>
              <div className="login-box-field">
                <p>First Name</p>
                <input
                  value={firstname}
                  onChange={(e) => setfirstname(e.target.value)}
                  placeholder=""
                ></input>
              </div>
              <div className="login-box-field">
                <p>Last name</p>
                <input
                  value={lastname}
                  onChange={(e) => setlastname(e.target.value)}
                ></input>
              </div>
              <div className="login-box-field">
                <p>Date of Birth</p>
                <input
                  type="date"
                  value={dob}
                  onChange={(e) => setdob(e.target.value)}
                ></input>
              </div>
              <div className="login-box-field">
                <p>Gender</p>
                <select
                  value={gender}
                  onChange={(e) => setgender(e.target.value)}
                >
                  <option value={"male"}>Male</option>
                  <option value={"female"}>Female</option>
                  <option value={"other"}>Others</option>
                </select>
              </div>
              <div className="login-box-field">
                <p>City</p>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setcity(e.target.value)}
                ></input>
              </div>
              
              <div className="login-box-field">
                <p>State</p>
                <input
                  type="text"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                ></input>
              </div>  
              <div className="login-box-error">{error}</div>
            </div>
            <div className="login-side-display"></div>
          </>
        ) : 
         activeStep == 2 ? (
          // third Panel
          <>
            <div className="login-box">
              <div className="login-box-title">Final Step</div>

              <div className="login-box-field">
                <p>Disease</p>
                <input
                  onKeyDown={illnessSelectHandle}
                  placeholder="Any ongoing Treatment or Infection"
                  value={currentIllness}
                  onChange={(e)=> setCurrentIllness(e.target.value)}
                ></input>
              </div>
              
              <div className="skills-array">
                {illness.map((skill) => (
                  <Chip label={skill}  onDelete={()=>deleteSkill(skill)}></Chip>
                ))}
              </div>

                {
                donar ? <>
               <div className="login-box-field">
                <p>Organs to Register</p>
                <select
                  value={""}
                  onChange={(e) => setOrgans([...organs,e.target.value])}
                >
                  <option value={""}>Select Organ</option>
                  <option value={"liver"}>Liver</option>
                  <option value={"heart"}>Heart</option>
                  <option value={"eyes"}>Eyes</option>
                  <option value={"kidney"}>Kidney</option>
                  <option value={"lungs"}>lungs</option>
                  {/* <option value={"oshphegus"}>Oshephegus</option> */}
                </select>
               </div>
                <div className="skills-array">
                {organs.map((skill) => (
                  <Chip label={skill}  onDelete={()=>deleteOrgan(skill)}></Chip>
                ))}
              </div>
                </>:<>
               <div className="login-box-field">
                <p>Need Of</p>
                <input
                  value={organ}
                  onChange={(e) => setOrgan(e.target.value)}
                  placeholder="Organ you Need for Transplant ?"
                  ></input>
              </div>
                </>
                }
               <div className="login-box-field">
                <p>Blood Group</p>
                <select
                  value={bloodGroup}
                  onChange={(e) => setBloodGroup(e.target.value)}
                >
                  <option value={""}>Select Blood Group</option>
                  <option value={"A+"}>A+</option>
                  <option value={"A-"}>A-</option>
                  <option value={"B+"}>B+</option>
                  <option value={"B-"}>B-</option>
                  <option value={"AB+"}>AB+</option>
                  <option value={"AB-"}>AB-</option>
                  <option value={"O+"}>O+</option>
                  <option value={"O-"}>O-</option>
                  {/* <option value={"oshphegus"}>Oshephegus</option> */}
                </select>
               </div>
              <div className="login-box-field">
                <p>Referred By</p>
                <input
                  type="text"
                  value={referral}
                  onChange={(e) => setReferral(e.target.value)}
                  placeholder="Doctor / Hospital "
                ></input>
              </div>

              <div className="login-box-error">{error}</div>
            </div>
            <div className="login-side-display"></div>
          </>)
          : (<div className="otp">
                  <div>OTP Verification</div>
                  <p>Enter otp sent to {email}</p>
                  <div className="otp-inbox">
                      <input onChange={handleSubmitOtp} value={otp} type="text"></input>
                  </div>
                  <div className="login-box-error" style={{fontSize:"12px"}}>{error}</div>
                  <Button variant="contained" fullWidth onClick={handleSubmitSignin} disabled={load}>Verify</Button>
          </div>)
        }


      </div>
      <div
        className="signin-button"
        style={{ justifyContent: "center", paddingBottom: "20px" }}
      >
        {activeStep == 2 ? (
          <Button variant="contained" onClick={submitHandler} disabled={load}>
            Submit
          </Button>
        ) : ""}
        {
          activeStep <=1 ? <Button
            variant="outlined"
            onClick={() => setActiveStep(activeStep + 1)}
          >
            Next
          </Button> :""
        }
      </div>
    </div>
  );
};

export default Signin;
