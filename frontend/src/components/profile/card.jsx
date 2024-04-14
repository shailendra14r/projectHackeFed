import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import PersonIcon from "@mui/icons-material/Person";
import "./card.css";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import path from "../../path";
import axios from "axios";
export default function MediaControlCard() {
  const theme = useTheme();
  const [serchParams] = useSearchParams();
  const id = serchParams.get("id");
  const [data, setData] = useState(false);

  const getDonarDetails = async () => {
    try {
      const response = await axios.get(`${path}donar_details?id=${id}`);
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    getDonarDetails();
  }, []);

  return (
    <Card
      sx={{
        display: "flex",
        minWidth: "700px",
        border: "none !important",
        minHeight: "250px",
      }}
      elevation={0}
    >
      <div
        style={{ display: "flex", flexDirection: "column" }}
        class="Card-media"
      >
        <CardMedia
          component="img"
          sx={{
            width: "200px",
            height: "200px",
            border: "1px solid black",
            padding: "5px",
          }}
          image={data?.profilePicture}
          alt="Live from space album cover"
        />
        <Button className="verify" variant="outlined">
          <VerifiedUserIcon /> Verified
        </Button>
      </div>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent>
          <div className="card-content">
            <div class="card-content-1" style={{ marginRight: "20px" }}>
              <Typography
                component="div"
                variant="h5"
                style={{ fontSize: "200%" }}
              >
                <b style={{ color: "rgb(2, 65, 36)" }}>
                  {data?.firstname + " " + data?.lastname}
                </b>
              </Typography>
              <Typography
                style={{
                  marginTop: "5px",
                  marginBottom: "5px",
                  color: "rgb(2, 65, 36)",
                }}
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                <PersonIcon />
                &nbsp; 57 years
              </Typography>
              <Typography
                style={{ marginBottom: "5px", color: "rgb(2, 65, 36)" }}
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                <AddLocationIcon />
                {data?.city + " " + data?.state}
                <br></br> <span className="ml-5">{data?.country}</span>
              </Typography>
            </div>
            <div class="card-content-2" style={{ marginTop: "50px" }}>
              {/* <Typography
                component="div"
                variant="h5"
                style={{ fontSize: "1.1rem", color: "rgb(2, 65, 36)" }}
              >
                <ul>
                  <li>Male</li>
                </ul>
              </Typography>
              <Typography
                style={{ marginTop: "5px", marginBottom: "5px" }}
                variant="subtitle1"
                color="text.secondary"
                component="div"
              ></Typography>
              <Typography
                style={{ marginBottom: "5px", color: "rgb(2, 65, 36)" }}
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                <ul>
                  <li>Suffering from Diabeties</li>
                </ul>
              </Typography>
              <Typography
                style={{ marginBottom: "5px", color: "red" }}
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                <ul>
                  <li>Blood grp : A+</li>
                </ul> */}
              <div class="list">
                <ul>
                  <li style={{ fontSize: "1.1rem", color: "rgb(2, 65, 36)" }}>
                    {data?.gender}
                  </li>
                  <li
                    style={{ marginBottom: "5px", color: "rgb(2, 65, 36)" }}
                    className="flex flex-wrap"
                  >
                    {data?.illness ? "Suffering from" : ""}

                    {data?.illness?.map((ele) => {
                      return <span className="bold mx-2">{ele}</span>;
                    })}
                  </li>
                  <li style={{ marginBottom: "5px", color: "red" }}>
                    Blood Group:{data?.bloodGroup}
                  </li>
                </ul>
              </div>
              {/* </Typography> */}
            </div>
          </div>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              fontSize: "200%",
              fontStyle: "bold",
              color: "red",
            }}
          >
            <VolunteerActivismIcon />
            &nbsp; {data?.organs?.map((ele) => ele + " ")}
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
}
