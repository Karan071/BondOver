import { useState } from "react";
import Navbar from "../../Layout/Navbar";
import "./Register.css";
import WhatYouGet from "../../Components/WhatYouGet";
import GradientButton from "../../Components/GradientButton";
import Footer from "../../Layout/footer/Footer.jsx";
import VerificationCode from "../../Components/NotificationCard/VerificationCode.jsx";
import ThankYou from "../../Components/NotificationCard/ThankYou.jsx";
import useOtp from "../../Hooks/useOtp";

import imge from '../../assets/TempPhoto.png'
import { DynamicCard } from "../../Components/DynamicCard/DynamicCard.jsx";

export default function Register() {
  const [mobileNumber, setMobileNumber] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);

  const { otpSent, verified, verifying, error, sendOtp, verifyOtp, reset } = useOtp();

  const handleSendOtp = async () => {
    await sendOtp(mobileNumber);

  };

  const handleVerify = async (otp) => {
    await verifyOtp(mobileNumber, otp);
 
    if (verified) setShowThankYou(true);
  };

  const handleChangeNumber = () => {
    reset();
    setMobileNumber("");
    setShowThankYou(false);
  };

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


      
      {!otpSent && (
        <div className="sponsor-container margin">
          <DynamicCard image={imge} age="14-25" title="Gully Cricket Championship Delhi Edition" location="Gandhi Maidan, Patna" date="June 2025 | 8 AM – 5 PM"/>

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
                  required
                  id="mobileNumber"
                  type="tel"
                  maxLength={10}
                  placeholder="Enter Mobile Number"
                  value={mobileNumber}
                  onChange={e => {
                    const onlyDigits = e.target.value.replace(/\D/g, "").slice(0, 10);
                    setMobileNumber(onlyDigits);
                  }}
                  className="mobile-input__field"
                />
              </div>
            </div>
            {error && <div className="error-message">{error}</div>}
          </div>
          <div className="wrapBtn mobileMargin">
            <GradientButton
              type="button"
              disabled={!/^\d{10}$/.test(mobileNumber) || verifying}
              onClick={handleSendOtp}
              inpclass="gradientButton"
            >
              {verifying ? "Sending OTP..." : "Generate OTP"}
            </GradientButton>
          </div>
        </div>
      )}

      {otpSent && !verified && (
        <div className="verification-modal-overlay">
          <VerificationCode
            phoneNumber={`+91 ${mobileNumber}`}
            onVerify={handleVerify}
            onResend={() => sendOtp(mobileNumber)}
            onChangeNumber={handleChangeNumber}
            loading={verifying}
            error={error}
          />
        </div>
      )}

      {verified && showThankYou && (
        <ThankYou onClose={handleChangeNumber} />
      )}

      <Footer />
    </div>
  );
}
