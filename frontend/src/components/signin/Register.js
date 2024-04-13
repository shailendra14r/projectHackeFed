import { Button,IconButton } from "@mui/material";
import logo from './../../static/logo.png'
import { useNavigate } from "react-router-dom";
const Register = ()=>{
    const navigate = useNavigate();
    return <>
     <div className="login">
        <div className="login-box">
          <div className="login-box-title">Select your Role</div>
          <div className="login-box-field">
          </div>
          <div className="login-box-field">
          </div>
       

          <Button
            fullwidth
            variant="contained"
            onClick={()=>navigate('/signup?donar=1')}
          >
            Donar Registeration
          </Button>

          <hr></hr>

          <Button
            fullwidth
            variant="outlined"
            className="sm-text"  
            onClick={()=>navigate('/signup')}
          >
            Accepter Registration
          </Button>

         
        </div>

        {/* {showModal && (
          <ForgetPassword
            cancel={() => {
              setShowModal(false);
            }}
          ></ForgetPassword>
        )} */}
    
        <div className="login-side-display"></div>
      </div>
    </>;
}

export default Register;