import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { IoLogoAppleAppstore } from "react-icons/io5";
import { SiGoogleplay } from "react-icons/si";

const Footer = () => (
  <footer className="footer">
    <div className="footer-top">
      <div className="footer-brand">
        <span>An initiative by</span>
        <br />
        <img
          src="https://cdn.fcglcdn.com/education/totsweb/live/fcintelli/firstcry-logo.png"
          className="footer-logo"
        />
      </div>
      <div className="footer-column">
        <h3>Intellitots</h3>
        <h4>Preschool Programs</h4>
        <p>Intellibaby Parent Toddler Circle (1- 2 Years)</p>
        <p>Tots Readiness Program (1.5 - 3 Years)</p>
        <p>Toddler (2 - 3 Years)</p>
        <p>Nursery (3 - 4 Years)</p>
        <p>Pre-Primary 1 (4 - 5 Years)</p>
        <p>Pre-Primary 2 (5 - 6 Years)</p>
      </div>
      <div className="footer-column">
        <h3>Preschool Locator</h3>
        <h3>Own a Preschool</h3>
        <h3>Events At Intellitots</h3>
        <h3>Daycare</h3>
        <h3>Admissions</h3>
      </div>
      <div className="footer-column">
        <h3>Intellibaby</h3>
        <p>EduMag</p>
        <p>Baby</p>
        <p>Toddler</p>
        <p>Preschooler</p>
        <p>Big Kid</p>
        <p>Stories</p>
        <p>Rhymes & Songs</p>
      </div>
      <div className="footer-column">
        <h3>Worksheets</h3>
        <p>Printable Worksheets</p>
        <p>Worksheets Generator</p>
        <h3>Intelliskills</h3>
        <p>Toys</p>
        <p>Books</p>
      </div>
      <div className="footer-apps">
        <p>Download the App from</p>
        <div>
          <SiGoogleplay />
          <IoLogoAppleAppstore />
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <p>© 2026 FirstCry Intelli Education. All rights reserved</p>
      <p>Privacy Policy | Terms & Conditions</p>
      <div className="social-links">
        <span>FOLLOW US ON SOCIAL MEDIA</span>
        <FaFacebookF />
        <FaYoutube />
      </div>
    </div>
  </footer>
);

export default Footer;
