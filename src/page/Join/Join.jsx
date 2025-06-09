import React, { useState } from "react";
import RenderInput from "../../Layout/RenderInput";
import Player from "../../assets/Movement/JoinFormIcon/Player.png";
import volunteer from "../../assets/Movement/JoinFormIcon/Volunteer.png";
import Organizer from "../../assets/Movement/JoinFormIcon/Organizer.png";
import Content from "../../assets/Movement/JoinFormIcon/Content.png";
import Supporter from"../../assets/Movement/JoinFormIcon/Supporter.png";
import "./Join.module.css";

const TYPE_OPTIONS = [
  { id: "player", label: "Player", iconSrc: Player },
    { id: "Volunteer", label: "Zone Sponsor", iconSrc: volunteer },
    { id: "Organizer", label: "Organizer", iconSrc: Organizer },
    { id: "Content", label: "Content Creator", iconSrc: Content  },
    { id: "Supporter", label: "Supporter", iconSrc: Supporter},

  ];

export default function Join() {
  // — your existing form state —
  const [organizationName, setOrganizationName] = useState("");
  const [contactPersonName, setContactPersonName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [customType, setCustomType] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const toggleType = (id) =>
    setSelectedTypes((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );

  const addCustomType = () => {
    if (customType.trim()) {
      setSelectedTypes((prev) => [...prev, customType.trim()]);
      setCustomType("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      // … your submission logic …
      setSuccess(true);
    } catch (err) {
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="sponsor-container" onSubmit={handleSubmit}>
      <h1 className="sponsor-title text-left">Sponsor Inquiry</h1>

      {/* ── Organisation Information ─────────────────────────────────── */}
      <div className="section">
        <RenderInput
          label="Organisation / Brand Name"
          name="organizationName"
          placeholder="Enter Organization / Brand Name"
          value={organizationName}
          onChange={(e) => setOrganizationName(e.target.value)}
        />

        <RenderInput
          className="fullWidth"
          label="Contact Person Name"
          name="contactPersonName"
          placeholder="Enter Contact Person Name"
          value={contactPersonName}
          onChange={(e) => setContactPersonName(e.target.value)}
        />

        <RenderInput
          className="fullWidth"
          label="Email"
          name="email"
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      {/* ── Preferred Sponsorship Type ──────────────────────────────── */}
      <div className="sts-wrapper fullWidth">
        <h2 className="sts-heading">Preferred Sponsorship Type</h2>
        <p className="sts-description">Select one or more:</p>

        <div className="sts-options">
          {TYPE_OPTIONS.map(({ id, label, icon: Icon, iconSrc }) => (
            <button
              key={id}
              type="button"
              onClick={() => toggleType(id)}
              className={`sts-btn ${
                selectedTypes.includes(id) ? "sts-btn--selected" : ""
              }`}
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
            placeholder="Enter Sponsorship Type"
            className="sts-input"
          />
          
        </div>
      </div>

      {/* ── Message / Query ────────────────────────────────────────── */}
      <div className="section mobileMargin">
        <p className="section-header text-left">Message / Query</p>
        <p className="small-note text-left">
          Share any Sponsor Inquiry
        </p>

        <RenderInput
          className="message-block fullWidth"
          label="Message"
          name="message"
          isTextarea
          placeholder="Write here…"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      {/* ── Submit Button ──────────────────────────────────────────── */}
      <div className="wrapBtn">
        <button type="submit" className="gbtn SubmitBtn" disabled={loading}>
          {loading ? "Submitting…" : "Submit"}
        </button>
      </div>

      {success && (
        <p className="success-message">Form submitted successfully!</p>
      )}
      {error && <p className="error-message">{error}</p>}
    </form>
  );
}
