import "./show.css";
import Button from "@mui/material/Button";
import Card from "./card.jsx";
import InfoIcon from "@mui/icons-material/Info";

export default function show() {
  return (
    <div className="main">
      <div className="heading-1">Profile Details</div>
      <div className="card row">
        <div className="col-8 offset-4">
          <Card />
        </div>
      </div>
      <div className="contact offset-5">
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

      <div className="about-box col-8 offset-4">
        <div className="about">
          <hr />
          <InfoIcon /> &nbsp;About
        </div>
        My name is Utkarsh Singh, and I need a urgent heart fro transplant , I
        am 57 years old and my blood group is A+. Living with this condition has
        been incredibly challenging for me and my loved ones. Despite all
        medical interventions and treatments, my heart function has deteriorated
        to a point where a transplant is imperative for me to have any chance of
        leading a healthy life. I understand the complexities and risks
        associated with organ transplantation, but I am willing to undergo any
        necessary procedures and adhere to all post-transplant protocols to
        ensure a successful outcome. Please consider my case with utmost urgency
        and include me on the transplant waiting list. I am hopeful that with
        your expertise and assistance, I can receive the life-saving transplant
        I desperately need.
      </div>
    </div>
  );
}
