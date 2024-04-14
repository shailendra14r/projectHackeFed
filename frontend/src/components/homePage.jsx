import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./home.css";
import { Link } from "react-router-dom";
import Alert from "@mui/material/Alert";
import LastCard from "./last.jsx";
import Footer from "./footer.jsx";

export default function MediaCard() {
  return (
    <>
      <div
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/1169662101/photo/adult-and-child-hands-holding-red-heart-on-aqua-background-heart-health-donation-csr-concept.jpg?s=2048x2048&w=is&k=20&c=0M3aEnheUL2PSOYheQJjDL6rm7iJFE5mMMc4QtFaXJI=')",
          backgroundSize: "cover",
          minWidth: "100vw",
          height: "500px",
          paddingTop: "100px",
          paddingLeft: "100px",
        }}
      >
        <div class="background-card">
          <div class="h-1">More donars, More hopes</div>
          <br />
          <br />
          <br />
          <h4>
            Every registered organ donor offers hope to people who need
            transplants – and to the families who love them
          </h4>

          <div class="h-1">Total Smile kept Alive: 2043</div>
          <br />
          <br />
          <br />
          <Link to={"/login"}>
            <Button variant="contained" sx={{ color: "white" }}>
              Login
            </Button>
          </Link>
        </div>
      </div>
      <div className="card-container">
        <div className="cards">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://irp.cdn-website.com/69c0b277/dms3rep/multi/Organ+Donation+-+Types-+Process-+Registration+-+Importance.jpg"
            />
            <Typography
              className="card-title"
              gutterBottom
              variant="h5"
              component="div"
            >
              Quote
            </Typography>
            <CardContent>
              <Typography
                className="card-content"
                variant="body2"
              >
                People who donate organs are blessed as they give others a
                second chance at life for others. It is in your hands to pass on
                your life to someone who is in dire need of it.
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div className="cards">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://media.istockphoto.com/id/160194832/photo/surgeon-with-organ-donation.jpg?s=612x612&w=0&k=20&c=K3iaNAajpKLdlPN_uEcw_ZATqkJJ_Hbtxm31opCwsbA="
            />
            <Typography
              className="card-title"
              gutterBottom
              variant="h5"
              component="div"
            >
              Fact
            </Typography>
            <CardContent>
              <Typography
                className="card-content"
                variant="body2"
                color="text.secondary"
              >
                To increase the number of donated organs, eyes and tissues
                available to save and heal lives, while developing a culture
                where donation is embraced as a fundamental human responsibility
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div className="cards">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://bsmedia.business-standard.com/_media/bs/img/article/2023-09/18/full/1695029177-166.jpg"
            />
            <Typography
              className="card-title"
              gutterBottom
              variant="h5"
              component="div"
            >
              Mission
            </Typography>
            <CardContent>
              <Typography
                className="card-content"
                variant="body2"
                color="text.secondary"
              >
                Organs and tissue that can be donated include: heart, kidneys,
                lungs, pancreas, liver, intestines, corneas, skin, tendons,
                bone, nerve and heart valves.
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="updates update-hackfed row">
        <div className="heading col-8 offset-2" style={{maxWidth:"700px"}} >
          <div class="h-1" >
            Organ Procurement and Transplantation Network Modernization
            Initiative
          </div>
          <br />
          <br />
          <br />
        </div>
        <div class="middle col-8 offset-2"  style={{maxWidth:"700px"}}>
          <Alert severity="info">
            <div class="h-2"> Updates</div>
            <br />

            <p>
              HRSA is sharing updates about the path forward for the OPTN
              Modernization Initiative, including the approach to securing
              best-in-class expertise and an independent Board of Directors.
            </p>
          </Alert>
        </div>

        <div class="bottom col-8 offset-2"  style={{maxWidth:"700px"}}>
          <p>
            On March 22, 2023, HRSA launched the Organ Procurement and
            Transplantation Network (OPTN) Modernization Initiative to better
            serve the needs of patients and families. The Initiative will
            strengthen accountability, equity, and performance of the organ
            donation and transplantation system through a focus on five key
            areas: technology; data transparency; governance; operations; and
            quality improvement and innovation. As a first step in the
            Modernization Initiative, HRSA launched a new dashboard and Public
            Use File (PUF) to enhance transparency in the national organ
            donation, procurement, and transplantation system. View the
            dashboard and accompanying PUF for demographic information about
            organ donors, waitlist candidates/registrants, and transplant
            recipients, as well as organ-specific data such as procured organ
            transplantation rates and transplant outcomes for several solid
            organ types.
          </p>
        </div>
      </div>
       <br/>
       <br/>
      <div className="process">
        <div className="process-1 box">
          <p style={{ fontSize: "2rem", fontWeight: "600" }}>
            The Sign Up process
          </p>
          <br />
          <ul>
            <li>How Do I Sign Up</li>
            <li>Why Do I Sign Up</li>
            <li>What Happens After I Sign Up</li>
          </ul>
        </div>
        <div className="process-2 box">
          <p style={{ fontSize: "2rem", fontWeight: "600" }}>
            Learn About Donation
          </p>
          <br />
          <ul>
            <li>How Donation Works</li>
            <li>What CAn be Donated</li>
            <li>Living Organ Donation</li>
          </ul>
        </div>
      </div>
      <div className="lastcard">
        <LastCard />
      </div>
      <Footer />
    </>
  );
}
