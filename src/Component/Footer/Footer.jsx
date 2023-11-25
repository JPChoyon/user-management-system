import { FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa";
import moment from "moment";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="rounded-lg">
      <div className="md:flex text-center">
        <div className="footer-left flex-1 py-10">
          <h2 className="footer-heading">CONTACT US</h2>
          <p className="footer-pera">
            123 ABS Street, Uni 21, Bangladesh <br /> +88 123456789 <br />
            Mon - Fri: 08:00 - 22:00 <br />
            Sat - Sun: 10:00 - 23:00
          </p>
        </div>
        <div className="footer-right flex-1 py-10">
          <h2 className="footer-heading">Follow US</h2>
          <p className="footer-pera">Join us on social media</p>
          <div className="footer-social-icon-container w-40 flex mx-auto  gap-5  text-3xl">
            <FaFacebook></FaFacebook>
            <FaInstagramSquare></FaInstagramSquare>
            <FaTwitter></FaTwitter>
          </div>
        </div>
      </div>
      <div>
        <p className="text-center bg-black text-white py-6 ">
          Copyright ©JP Choyon Khan. All rights reserved 
          {moment().format(' MMM , YYYY')}
        </p>
      </div>
    </div>
  );
};

export default Footer;
