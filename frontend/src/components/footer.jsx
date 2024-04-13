import "./footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
export default function footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">
                Copyright © 2024 All Rights Reserved by &nbsp;
                <a href="#">E-Navodit Healthcare</a>.
              </p>
            </div>
            <div className="footer-icons">
              <ul className="social-icons">
                <li>
                  <a className="facebook" href="#">
                    <FacebookIcon />
                  </a>
                </li>
                <li>
                  <a className="twitter" href="#">
                    <TwitterIcon />
                  </a>
                </li>
                <li>
                  <a className="dribbble" href="#">
                    <InstagramIcon />
                  </a>
                </li>
                <li>
                  <a className="linkedin" href="#">
                    <LinkedInIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
