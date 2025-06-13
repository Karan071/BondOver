import { useState } from "react";
import axios from "axios";

import RenderInput from "../../Layout/RenderInput";
import GradientButton from "../../Components/GradientButton";
import VerificationCode from "../../Components/NotificationCard/VerificationCode";
import ThankYou from "../../Components/NotificationCard/ThankYou";
import useOtp from "../../Hooks/useOtp";
import "./SponsorForm.css";
import titleIcon from "../../assets/Sponsor/Formicon/img1.png";
import zoneIcon from "../../assets/Sponsor/Formicon/img2.png";
import merchIcon from "../../assets/Sponsor/Formicon/img3.png";
import digitalIcon from "../../assets/Sponsor/Formicon/img4.png";
import csrIcon from "../../assets/Sponsor/Formicon/img5.png";
import otherIcon from "../../assets/Sponsor/Formicon/img6.png";

export default function SponsorForm() {
  const [organizationName, setOrganizationName] = useState("");
  const [contactPersonName, setContactPersonName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [message, setMessage] = useState("");
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [customType, setCustomType] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [showThankYou, setShowThankYou] = useState(false);
  const { otpSent, verified, verifying, error: otpError, sendOtp, verifyOtp, reset } = useOtp();


  const TYPE_OPTIONS = [
    { id: "title", label: "Title Sponsor", iconSrc: titleIcon },
    { id: "zone", label: "Zone Sponsor", iconSrc: zoneIcon },
    { id: "merchandise", label: "Merchandise Sponsor", iconSrc: merchIcon },
    { id: "digital", label: "Digital Sponsor", iconSrc: digitalIcon },
    { id: "csr", label: "CSR Initiative", iconSrc: csrIcon },
    { id: "others", label: "Others", iconSrc: otherIcon },
  ];  const handleMobileNumberChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 10);
    setMobileNumber(value);
  };

  const handleGenerateOTP = async () => {
    await sendOtp(mobileNumber);
  };

  const handleVerify = async (otp) => {
    await verifyOtp(mobileNumber, otp);
  };

  const handleChangeNumber = () => {
    reset();
    setMobileNumber("");
  };

  const toggleType = (id) =>
    setSelectedTypes((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
    );

  const addCustomType = () => {
    const t = customType.trim();
    if (t && !selectedTypes.includes(t)) {
      setSelectedTypes([...selectedTypes, t]);
      setCustomType("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError("");

    try {
      await axios.post(
        "http://154.26.130.161/hswf/api/sponsor/enquiry",
        {
          organisation_name: organizationName,
          name: contactPersonName,
          phone: mobileNumber,
          email,
          type: selectedTypes,
          query: message
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          }
        }
      );      setSuccess(true);
      setShowThankYou(true);

      setOrganizationName("");
      setContactPersonName("");
      setEmail("");
      setMobileNumber("");
      setSelectedTypes([]);
      setMessage("");
      setCustomType("");
    } catch (err) {
      setError("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (showThankYou) {
    return <ThankYou onClose={() => setShowThankYou(false)} />;
  }

  if (!verified) {
    return (
      <section className="sponsor-container margin">
        {otpSent ? (
          <div className="verification-modal-overlay">
            <VerificationCode
              phoneNumber={`+91 ${mobileNumber}`}
              onVerify={handleVerify}
              onResend={() => sendOtp(mobileNumber)}
              onChangeNumber={handleChangeNumber}
              loading={verifying}
              error={otpError}
            />
          </div>
        ) : (
          <>
            <h1 className="sponsor-title text-left">Sponsor Inquiry</h1>
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
                    onChange={handleMobileNumberChange}
                    className="mobile-input__field"
                  />
                </div>
              </div>
              {otpError && <div className="error-message">{otpError}</div>}
            </div>
            <div className="wrapBtn mobileMargin">
              <GradientButton
                type="button"
                disabled={!/^\d{10}$/.test(mobileNumber) || verifying}
                onClick={handleGenerateOTP}
              >
                {verifying ? "Sending OTP..." : "Generate OTP"}
              </GradientButton>
            </div>
          </>
        )}
      </section>
    );
  }

  return (
    <form className="sponsor-container margin" onSubmit={handleSubmit}>
      <h1 className="sponsor-title text-left">Sponsor Inquiry</h1>

      <div className="section">
        <p className="section-header text-left">Organisation Information</p>

        <RenderInput
          label="Organisation / Brand Name"
          name="organizationName"
          placeholder="Enter Organization / Brand Name"
          value={organizationName}
          onChange={(e) => setOrganizationName(e.target.value)}
        />
        <RenderInput
          label="Contact Person Name"
          name="contactPersonName"
          placeholder="Enter Contact Person Name"
          value={contactPersonName}
          onChange={(e) => setContactPersonName(e.target.value)}
        />
        <RenderInput
          label="Email"
          name="email"
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

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
              readOnly
              className="mobile-input__field"
            />
          </div>
        </div>
      </div>


      <div className="sts-wrapper">
        <h2 className="sts-heading">Preferred Sponsorship Type</h2>
        <p className="sts-description">Select one or more:</p>

        <div className="sts-options">
          {TYPE_OPTIONS.map(({ id, label, icon: Icon, iconSrc }) => (
            <button
              key={id}
              type="button"
              onClick={() => toggleType(id)}
              className={`sts-btn ${selectedTypes.includes(id) ? "sts-btn--selected" : ""}`}
            >

              {iconSrc ? (
                <img src={iconSrc} alt="" className="sts-btn__icon-img" />
              ) : (
                <Icon size={16} className="sts-btn__icon" />
              )}

              <span className="sts-btn__label">{label}</span>
            </button>
          ))}

        </div>

        <div className="sts-input-group">
          <input
            type="text"
            value={customType}
            onChange={(e) => setCustomType(e.target.value)}
            placeholder="Enter Sponsorship Type" className="sts-input"
          />
          <button type="button" className="button gbtn" onClick={addCustomType}>Add</button>
        </div>
      </div>
      <div className="section mobileMargin">
        <p className="section-header text-left less">Message / Query</p>

        <RenderInput
          label="Share any Sponsor Inquirye"
          name="message"
          isTextarea
          placeholder="Write here...."

          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="message-block"
        />
      </div>
      <div className="wrapBtn">
        <GradientButton type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </GradientButton>
      </div>

      {success && <p className="success-message">Form submitted successfully!</p>}


      {error && <p className="error-message">{error}</p>}
    </form>
  );
}