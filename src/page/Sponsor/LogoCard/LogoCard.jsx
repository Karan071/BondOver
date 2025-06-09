// src/components/LogoCard.jsx
import React from "react";
import "./Logo.css";

// Import all of your logo assets
import Alpheric from "../../../assets/Sponsor/Logo/Alpheric.png";
import Fitvio from "../../../assets/Sponsor/Logo/Fitvio.png";
import Aimshala from "../../../assets/Sponsor/Logo/Aimshala.png";
import HSWF from "../../../assets/Sponsor/Logo/Hswf.png";
import Kheloge from "../../../assets/Sponsor/Logo/Kheloge.jpg";
import Ekrocx from "../../../assets/Sponsor/Logo/Ekrocx.png";

const logos = [
  { id: 1, src: Alpheric, alt: "Alpheric" },
  { id: 2, src: Fitvio, alt: "FitVio Sports" },
  { id: 3, src: Aimshala, alt: "Aimshala" },
  { id: 4, src: HSWF, alt: "Hardcore Sports Welfare Foundation" },
  { id: 5, src: Kheloge, alt: "Kheloge" },
  { id: 6, src: Ekrocx, alt: "Ekrocx Technologies" },
  { id: 7, src: Alpheric, alt: "Alpheric" },
  { id: 8, src: Fitvio, alt: "FitVio Sports" },
  { id: 9, src: Aimshala, alt: "Aimshala" },
];

export default function LogoCard() {
  return (
    <section className="sponsors-section">
      <div className="sponsors-container">
        {/* Left side: Heading */}
        <div className="text-section">
          <h2 className="sponsors-title">
            Previous Sponsors
            <br />
            & Collaborators
          </h2>
        </div>

        {/* Right side: Grid of logos */}
        <div className="grid-section">
          {logos.map((logo) => (
            <div key={logo.id} className="grid-item">
              <img src={logo.src} alt={logo.alt} className="logo-image" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
