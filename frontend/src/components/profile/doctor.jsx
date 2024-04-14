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
            Myself Dr. Vivek Sharma is a dedicated and compassionate neurologist
            practicing at Vedanta. With a profound commitment to patient care
            and a passion for neurology,I brings a wealth of knowledge and
            expertise to the field. Graduating with honors from BHU, completed
            extensive training in neurology, specializing in the diagnosis and
            treatment of neurological disorders.
            <br />
            <br />I am known for my meticulous approach to patient care, taking
            the time to listen to patients' concerns and develop personalized
            treatment plans tailored to their unique needs. Whether it's
            managing complex neurological conditions, conducting thorough
            diagnostic evaluations, or providing empathetic support to patients
            and their families, dedicated to delivering the highest standard of
            care.
          </div>
        </div>
      </div>
    </>
  );
}
