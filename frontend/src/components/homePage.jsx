import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./home.css";

export default function MediaCard() {
  return (
    <>
      <div className="card-container">
        <div className="cards">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://irp.cdn-website.com/69c0b277/dms3rep/multi/Organ+Donation+-+Types-+Process-+Registration+-+Importance.jpg"
            />
            <Typography gutterBottom variant="h5" component="div">
              Quote
            </Typography>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
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
            <Typography gutterBottom variant="h5" component="div">
              Fact
            </Typography>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
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
            <Typography gutterBottom variant="h5" component="div">
              Mission
            </Typography>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Organs and tissue that can be donated include: heart, kidneys,
                lungs, pancreas, liver, intestines, corneas, skin, tendons,
                bone, nerve and heart valves.
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="total-life">
        <h1>Total Smile kept Alive: 2043</h1> ;
      </div>
    </>
  );
}
