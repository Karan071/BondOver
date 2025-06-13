import { useState } from "react";
import Navbar from "../../Layout/Navbar";
import Footer from "../../Layout/footer/Footer";
import WhatYouGet from "../../Components/WhatYouGet";
import RenderInput from "../../Layout/RenderInput";
import GradientButton from "../../Components/GradientButton";
import PlayerIcon from "../../assets/Movement/JoinFormIcon/Player.png";
import VolunteerIcon from "../../assets/Movement/JoinFormIcon/Volunteer.png";
import OrganizerIcon from "../../assets/Movement/JoinFormIcon/Organizer.png";
import ContentIcon from "../../assets/Movement/JoinFormIcon/Content.png";
import SupporterIcon from "../../assets/Movement/JoinFormIcon/Supporter.png";
import Target from "../../assets/logos/Target.png"
import wa from "../../assets/logos/w1.png"

import men from '../../assets/Icon/men.png';
import female from '../../assets/Icon/woman.png';
import other from '../../assets/Icon/other.png';
import menR from '../../assets/Icon/menR.png';
import femaleR from '../../assets/Icon/womanR.png';
import otherR from '../../assets/Icon/otherR.png';

import VerificationCode from "../../Components/NotificationCard/VerificationCode";
import ThankYou from "../../Components/NotificationCard/ThankYou";
import useOtp from "../../Hooks/useOtp";

import "./Join.css";

const JOIN_AS_OPTIONS = [
  { id: "player", label: "Player", icon: PlayerIcon },
  { id: "volunteer", label: "Volunteer", icon: VolunteerIcon },
  { id: "organizer", label: "Organizer", icon: OrganizerIcon },
  { id: "creator", label: "Content Creator", icon: ContentIcon },
  { id: "supporter", label: "Supporter", icon: SupporterIcon },
];

export default function Join() {
  const [mobileNumber, setMobileNumber] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);

  const { otpSent, verified, verifying, error, sendOtp, verifyOtp, reset } = useOtp();

  const [form, setForm] = useState({
    name: "",
    dob: "",
    locality: "",
    email: "",
    gender: "male",
    joinAs: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formError, setFormError] = useState("");

  const handleChange = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));
  const setGender = (g) => () =>
    setForm((f) => ({ ...f, gender: g }));
  const setJoinAs = (j) => () =>
    setForm((f) => ({ ...f, joinAs: j }));

  const handleSendOtp = async () => {
    await sendOtp(mobileNumber);
    // otpSent will be updated by the hook
  };

  const handleVerify = async (otp) => {
    await verifyOtp(mobileNumber, otp);
    // verified will be updated by the hook
  };

  const handleChangeNumber = () => {
    reset();
    setMobileNumber("");
    setShowThankYou(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFormError("");
    try {
      // TODO: submit `form` to your backend
      setSuccess(true);
      setShowThankYou(true);
    } catch {
      setFormError("Failed to submit. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="navWrapper">
        <Navbar />
      </div>
      <Information />
      {!otpSent && (
        <>
          <OTP
            mobileNumber={mobileNumber}
            handleMobileChange={e => setMobileNumber(e.target.value)}
            handleGenerateOTP={handleSendOtp}
            loading={verifying}
            error={error}
          />
        </>
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

      {verified && !showThankYou && (
        <JoinForm
          form={form}
          handleChange={handleChange}
          setGender={setGender}
          setJoinAs={setJoinAs}
          loading={loading}
          success={success}
          error={formError}
          handleSubmit={handleSubmit}
        />
      )}

      {showThankYou && (
        <ThankYou onClose={handleChangeNumber} />
      )}
      <Footer />
    </>
  );
}


const genderImages = {
  male: men,
  female: female,
  other: other,
};

const genderImagesSelected = {
  male: menR,
  female: femaleR,
  other: otherR,
};

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

function OTP({ mobileNumber, handleMobileChange, handleGenerateOTP, loading, error }) {
  return (
    <section className="sponsor-container upperSponsor margin">
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
              onChange={handleMobileChange}
              className="mobile-input__field"
            />
          </div>
        </div>
        {error && <div className="error-message">{error}</div>}
      </div>
      <div className="wrapBtn mobileMargin">
        <GradientButton
          type="button"
          disabled={!/^\d{10}$/.test(mobileNumber) || loading}
          onClick={handleGenerateOTP}
          inpclass="gradientButton"
        >
          {loading ? "Sending OTP..." : "Generate OTP"}
        </GradientButton>
      </div>
    </section>
  );
}

// static card for the information section
function Information() {
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
  );
}