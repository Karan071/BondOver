import { useState } from "react";
import Navbar from "../../Layout/Navbar";
import "./Register.css";
import WhatYouGet from "../../Components/WhatYouGet";
import GradientButton from "../../Components/GradientButton";
import Footer from "../../Layout/footer/Footer.jsx";
import VerificationCode from "../../Components/NotificationCard/VerificationCode.jsx";
import ThankYou from "../../Components/NotificationCard/ThankYou.jsx";
import useOtp from "../../Hooks/useOtp";
import { baseURL } from "../../config.js";

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
      <StaticInfo />
      {!otpSent && (
        <div className="sponsor-container margin">
          <DynamicCard image={imge} age="14-25" title="Gully Cricket Championship Delhi Edition" location="Gandhi Maidan, Patna" date="June 2025 | 8 AM – 5 PM" />

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


function JoinForm({ form, handleChange, setGender, setJoinAs, loading, success, error, handleSubmit }) {

  return (
    <section className="sponsor-container sponsor-container-latter">
      <h1 className="sponsor-title text-left">Fill in your details</h1>
      <form onSubmit={handleSubmit}>
        <div className="divideSection">
          <div className="halfSection">
            <RenderInput
              label="Full name"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange("name")}
            />
          </div>
          <div className="halfSection">
            <div className="halfSection genderFlexRow">
              <div>
                <span className="genderLabel">
                  Gender <span className="redStar">*</span>
                </span>
              </div>

              <div className="genderOptions">
                {["male", "female", "other"].map((g) => (
                  <button
                    key={g}
                    type="button"
                    className={`sts `}
                    onClick={setGender(g)}
                  >
                    <img src={`${form.gender === g ? genderImagesSelected[g] : genderImages[g]}`} alt={g} className="sts-btn__icon-img" />
                    <span className={`sts-btn__label ${form.gender === g ? "sts-selected" : ""}`}>
                      {g[0].toUpperCase() + g.slice(1)}
                    </span>
                  </button>
                ))}
              </div>

            </div>
          </div>
        </div>
        <div className="divideSection">
          <RenderInput
            label="DOB "
            type="date"
            value={form.dob}
            onChange={handleChange("dob")}
          />
          <RenderInput
            label="Email "
            type="email"
            placeholder="Enter Email"
            value={form.email}
            onChange={handleChange("email")}
            className="fullWidth"
          />

        </div>

        <div className="section">
          <RenderInput
            label="Locality "
            placeholder="Enter Your Society Name (As Listed On Google Maps)"
            value={form.locality}
            onChange={handleChange("locality")}
            className="fullWidth"
          />
        </div>


        <div className="sts-wrapper fullWidth">
          <span className="sts-heading">Join As *</span>
          <div className="sts-options">
            {JOIN_AS_OPTIONS.map(({ id, label, icon }) => (
              <button
                key={id}
                type="button"
                className={`sts-btn ${form.joinAs === id ? "sts-btn--selected" : ""}`}
                onClick={setJoinAs(id)}
              >
                <img src={icon} alt={label} className="sts-btn__icon-img" />
                <span className="sts-btn__label">{label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="notea">
          <img src={wa} alt="target" className="logo" /> Confirmation and event kit details will be shared via
          email/WhatsApp
        </div>

        <div className="wrapBtn">
          <button
            type="submit"
            className="button gbtn SubmitBtn"
            disabled={loading}
          >
            {loading ? "Submitting…" : "Register Now"}
          </button>
        </div>

        <div className="note">
          <img src={Target} alt="target" className="logo" /> Don’t miss your chance to be part of something bigger than the game.
        </div>

        {success && (
          <p className="success-message">Form submitted successfully!</p>
        )}
        {error && <p className="error-message">{error}</p>}
      </form>
    </section>
  );
}

function StaticInfo() {
  return (
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
  )
}