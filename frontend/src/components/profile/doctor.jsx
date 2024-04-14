import "./doctor.css";
import Button from "@mui/material/Button";
import Card from "./card.jsx";
import InfoIcon from "@mui/icons-material/Info";
import DocCard from "./docCard.jsx";

export default function show() {
  return (
    <>
      <div className="heading-1">Doctor Details</div>
      <div className="main">
        <div className="main-1">
          <div className="card row">
            <div className="col-8 offset-1">
              <DocCard />
            </div>
          </div>
          <div className="contact offset-3">
            <Button
              style={{
                marginTop: "30px",
                marginLeft: "40px",
                backgroundColor: "green",
                color: "white",
              }}
              variant="contained"
            >
              Contact Now
            </Button>
          </div>
        </div>
        <div class="main-3"></div>
        <div class="main-2">
          <div className="about-box col-8 offset-2">
            <div className="about">
              <InfoIcon /> &nbsp;About
            </div>
            <br />
            My name is Utkarsh Singh, and I need a urgent heart for transplant ,
            I am 57 years old and my blood group is A+. Living with this
            condition has been incredibly challenging for me and my loved ones.
            Despite all medical interventions and treatments, my heart function
            has deteriorated to a point where a transplant is imperative for me
            to have any chance of leading a healthy life.
            <br />
            <br />
            I understand the complexities and risks associated with organ
            transplantation, but I am willing to undergo any necessary
            procedures and adhere to all post-transplant protocols to ensure a
            successful outcome. Please consider my case with utmost urgency and
            include me on the transplant waiting list.
            <br />
            <br />I am hopeful that with your expertise and assistance, I can
            receive the life-saving transplant I desperately need.
          </div>
        </div>
      </div>
    </>
  );
}
