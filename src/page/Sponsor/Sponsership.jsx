// src/components/SponsorshipCards.jsx

import "./SponsorshipCards.css"; 

import titleImg from "../../assets/Sponsor/Sponsorship1.png";
import zoneImg from "../../assets/Sponsor/Sponsorship2.png";
import digitalImg from "../../assets/Sponsor/Sponsorship3.png";
import causeImg from "../../assets/Sponsor/Sponsorship4.png";
import kitImg from "../../assets/Sponsor/Sponsorship5.png";

import titleIcon from "../../assets/Sponsor/StarHands.png";
import zoneIcon from "../../assets/Sponsor/Target.png";
import digitalIcon from "../../assets/Sponsor/Digital.png";
import causeIcon from "../../assets/Sponsor/Eye.png";
import kitIcon from "../../assets/Sponsor/Shirt.png";

export default function SponsorshipCards() {
  return (
    <div className="sponsorship-container">
      {/* Section Title */}
      <h2 className="section-title">Sponsorship Opportunities</h2>

      {/* Top Row: Title Sponsor & Zone Sponsor */}
      <div className="card-row-top">
        {/* Title Sponsor Card */}
        <div className="card-wrapper">
          <div className="card-content top-card">
            {/* Text Section */}
            <div className="card-text">
              <h3 className="card-title">Title Sponsor</h3>
              <p className="card-description">
                Your name becomes part of every BOS event and campaign
              </p>
            </div>

            {/* Image Section */}
            <div className="card-image-wrapper">
              <img
                src={titleImg}
                alt="Title Sponsor"
                className="sponsor-image top-image"
              />
              <div className="icon-overlay">
                <img src={titleIcon} alt="Title Icon" className="icon-img" />
              </div>
            </div>
          </div>
        </div>

        {/* Zone Sponsor Card */}
        <div className="card-wrapper">
          <div className="card-content top-card">
            {/* Text Section */}
            <div className="card-text">
              <h3 className="card-title">Zone Sponsor</h3>
              <p className="card-description">
                Sponsor zones like Women’s Arena, Youth Pavilion, Heritage Zone,
                etc.
              </p>
            </div>

            {/* Image Section */}
            <div className="card-image-wrapper">
              <img
                src={zoneImg}
                alt="Zone Sponsor"
                className="sponsor-image top-image"
              />
              <div className="icon-overlay">
                <img src={zoneIcon} alt="Zone Icon" className="icon-img" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row: Digital Sponsor, Cause Sponsor, Kit & Merchandise Sponsor */}
      <div className="card-row-bottom">
        {/* Digital Sponsor Card */}
        <div className="card-wrapper">
          <div className="card-content bottom-card">
            <div className="card-text">
              <h3 className="card-title">Digital Sponsor</h3>
              <p className="card-description">
                Branding on event promotions, reels, influencer content & website
              </p>
            </div>
            <div className="flex-spacer" />
            <div className="card-image-wrapper">
              <img
                src={digitalImg}
                alt="Digital Sponsor"
                className="sponsor-image bottom-image"
              />
              <div className="icon-overlay">
                <img
                  src={digitalIcon}
                  alt="Digital Icon"
                  className="icon-img"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Cause Sponsor Card */}
        <div className="card-wrapper">
          <div className="card-content bottom-card">
            <div className="card-text">
              <h3 className="card-title">Cause Sponsor</h3>
              <p className="card-description">
                Back specific initiatives (e.g., girls’ sports, school
                tournaments, special needs events)
              </p>
            </div>
            <div className="flex-spacer" />
            <div className="card-image-wrapper">
              <img
                src={causeImg}
                alt="Cause Sponsor"
                className="sponsor-image bottom-image"
              />
              <div className="icon-overlay">
                <img src={causeIcon} alt="Cause Icon" className="icon-img" />
              </div>
            </div>
          </div>
        </div>

        {/* Kit & Merchandise Sponsor Card */}
        <div className="card-wrapper">
          <div className="card-content bottom-card">
            <div className="card-text">
              <h3 className="card-title">Kit &amp; Merchandise Sponsor</h3>
              <p className="card-description">
                BOS T-shirts, medals, lanyards, certificates – all co-branded
              </p>
            </div>
            <div className="flex-spacer" />
            <div className="card-image-wrapper">
              <img
                src={kitImg}
                alt="Kit & Merchandise Sponsor"
                className="sponsor-image bottom-image"
              />
              <div className="icon-overlay">
                <img src={kitIcon} alt="Kit Icon" className="icon-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
