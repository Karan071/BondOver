import React, { useState } from "react";
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

import "./Join.css";

const JOIN_AS_OPTIONS = [
  { id: "player",    label: "Player",          icon: PlayerIcon },
  { id: "volunteer", label: "Volunteer",       icon: VolunteerIcon },
  { id: "organizer", label: "Organizer",       icon: OrganizerIcon },
  { id: "creator",   label: "Content Creator", icon: ContentIcon },
  { id: "supporter", label: "Supporter",       icon: SupporterIcon },
];

export default function Join() {
  const [mobileNumber, setMobileNumber] = useState("");
  const handleMobileChange = (e) => setMobileNumber(e.target.value);

  const [form, setForm] = useState({
    name: "",
    dob: "",
    locality: "",
    email: "",
    gender: "male",
    joinAs: "",
  });
  const [loading, setLoading]   = useState(false);
  const [success, setSuccess]   = useState(false);
  const [error, setError]       = useState("");

  const handleChange = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));
  const setGender = (g) => () =>
    setForm((f) => ({ ...f, gender: g }));
  const setJoinAs = (j) => () =>
    setForm((f) => ({ ...f, joinAs: j }));

  const handleGenerateOTP = () => {
    // TODO: call your OTP API
    console.log("Generate OTP for", mobileNumber);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      // TODO: submit `form`
      console.log("Submitting details", form);
      setSuccess(true);
    } catch {
      setError("Failed to submit. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

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

      <section className="sponsor-container">
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
                type="tel"
                maxLength={10}
                placeholder="Enter Mobile Number"
                value={mobileNumber}
                onChange={handleMobileChange}
                className="mobile-input__field"
              />
            </div>
          </div>
        </div>

        <div className="wrapBtn mobileMargin">
          <GradientButton
            type="button"
            disabled={!/^\d{10}$/.test(mobileNumber)}
            onClick={handleGenerateOTP}
          >
            Generate OTP
          </GradientButton>
        </div>
      </section>

      <section className="sponsor-container">
        <h1 className="sponsor-title text-left">Fill in your details</h1>
        <form onSubmit={handleSubmit}>
          <div className="section">
            <RenderInput
              label="Full name "
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange("name")}
            />
            <RenderInput
              label="DOB "
              type="date"
              value={form.dob}
              onChange={handleChange("dob")}
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

          <div className="section">
            <RenderInput
              label="Email "
              type="email"
              placeholder="Enter Email"
              value={form.email}
              onChange={handleChange("email")}
              className="fullWidth"
            />
          </div>

          <div className="sts-wrapper fullWidth">
            <span className="sts-heading">Gender *</span>
            <div className="sts-options">
              {["male", "female", "other"].map((g) => (
                <button
                  key={g}
                  type="button"
                  className={`sts-btn ${
                    form.gender === g ? "sts-btn--selected" : ""
                  }`}
                  onClick={setGender(g)}
                >
                  {/* Assuming you have icons named male.svg etc */}
                  <img src={`/icons/${g}.svg`} alt={g} className="sts-btn__icon-img" />
                  <span className="sts-btn__label">
                    {g[0].toUpperCase() + g.slice(1)}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="sts-wrapper fullWidth">
            <span className="sts-heading">Join As *</span>
            <div className="sts-options">
              {JOIN_AS_OPTIONS.map(({ id, label, icon }) => (
                <button
                  key={id}
                  type="button"
                  className={`sts-btn ${
                    form.joinAs === id ? "sts-btn--selected" : ""
                  }`}
                  onClick={setJoinAs(id)}
                >
                  <img src={icon} alt={label} className="sts-btn__icon-img" />
                  <span className="sts-btn__label">{label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="note">
            📧 Confirmation and event kit details will be shared via
            email/WhatsApp
          </div>

          <div className="wrapBtn">
            <button
              type="submit"
              className="gbtn SubmitBtn"
              disabled={loading}
            >
              {loading ? "Submitting…" : "Register Now"}
            </button>
          </div>

          {success && (
            <p className="success-message">Form submitted successfully!</p>
          )}
          {error && <p className="error-message">{error}</p>}
        </form>
      </section>

      <Footer />
    </>
  );
}
