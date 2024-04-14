import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import PersonIcon from "@mui/icons-material/Person";
import "./docCard.css";
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
export default function MediaControlCard() {
  const theme = useTheme();
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
          image="https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg"
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
                <b style={{ color: "rgb(2, 65, 36)" }}>Utkarsh Singh</b>
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
                <AddLocationIcon /> Noida,UP
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
                    Male
                  </li>
                  <li style={{ marginBottom: "5px", color: "rgb(2, 65, 36)" }}>
                    Suffering from Diabeties
                  </li>
                  <li style={{ marginBottom: "5px", color: "red" }}>
                    Blood Group:A+
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
            &nbsp; Heart, Liver, Eyes
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
}
