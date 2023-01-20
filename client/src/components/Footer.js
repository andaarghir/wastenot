import React from "react";
// import InstagramIcon from "@material-ui/icons/Instagram";
// import TwitterIcon from "@material-ui/icons/Twitter";
// import FacebookIcon from "@material-ui/icons/Facebook";
// import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
          <div className="col-footer">
          <h2>Services</h2>
                            <div className="list-footer">
                                <li><a className="footer-link" href="#">Web design</a></li>
                                <li><a className="footer-link" href="#">Development</a></li>
                                <li><a className="footer-link" href="#">Hosting</a></li>
                            </div>
          </div>
          <div className="col-footer">
          <h2>Services</h2>
                            <div className="list-footer">
                                <li><a className="footer-link" href="#">Web design</a></li>
                                <li><a className="footer-link" href="#">Development</a></li>
                                <li><a className="footer-link" href="#">Hosting</a></li>
                            </div>
          </div>
          <div className="col-footer">
          <h2>Services</h2>
                            <div className="list-footer">
                                <li><a className="footer-link" href="#">Web design</a></li>
                                <li><a className="footer-link" href="#">Development</a></li>
                                <li><a className="footer-link" href="#">Hosting</a></li>
                            </div>
          </div>
          <div className="col-footer2 item social">
                            <a href="#"><i class="icon ion-social-facebook"></i></a>
                            <a href="#"><i class="icon ion-social-snapchat"></i></a>
                            <a href="#"><i class="icon ion-social-instagram"></i></a>
                            <p class="copyright">WasteNot © 2023</p>
          </div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css"></script>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css"></link>
    </div>
  );
}

export default Footer;
