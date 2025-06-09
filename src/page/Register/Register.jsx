import { useState } from "react";
import Navbar from "../../Layout/Navbar"
import "./Register.css";
import WhatYouGet from "../../Components/WhatYouGet";
import GradientButton from "../../Components/GradientButton"; 
import Footer from "../../Layout/footer/Footer.jsx";

export default function Register() {

  const [mobileNumber, setMobileNumber] = useState("");
  const handleMobileNumberChange = (e) => setMobileNumber(e.target.value);

  return (
    <div>
      <div className="container">
        <div className="navWrapper">
          <Navbar />
        </div>
      </div>

      <section className="heroSection">
        <div className="container">
          <h1 className="heroTitle">Join the Movement</h1>
          <h2 className="heroSubtitle">
            Be more than just a spectator — be the spirit of the game.
          </h2>
          <p className="heroText">
            Join hundreds of passionate individuals coming together to celebrate
            heritage, sportsmanship, and community pride. Whether you're
            playing, volunteering, organizing, or just capturing the moments —
            you matter.
          </p>
        </div>
        <WhatYouGet />
      </section>

      <div className="sponsor-container">
        <h1 className="sponsor-title text-left">Register For Event</h1>

        <div className="section">
          <p className="section-header text-left">
            Please enter a 10-digit valid mobile number to receive OTP
          </p>

          <div className="mobile-input__wrapper">
            <label htmlFor="mobileNumber" className="mobile-input__label">
              Mobile Number <span>*</span>
            </label>

            <div className="mobile-input__group">
              <span className="mobile-input__country">+91</span>
              <input
                id="mobileNumber"
                name="mobileNumber"
                type="text"
                value={mobileNumber}
                onChange={handleMobileNumberChange}
                placeholder="Enter Mobile Number"
                className="mobile-input__field"
              />
            </div>
          </div>
        </div>

        <div className="wrapBtn mobileMargin">
          <GradientButton type="button" className="gbtn SubmitBtn">
            Generate OTP 
          </GradientButton>
        </div>
      
      </div>
        <Footer/>
    </div>
  );
}
