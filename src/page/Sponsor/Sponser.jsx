import React from "react";
import styles from "./Sponser.module.css";
import SponsorForm from "./SponsorForm.jsx";
import Navbar from "../../Layout/Navbar";
import Sponsorships from "./Sponsership.jsx";
import LogoCard from "./LogoCard/LogoCard.jsx";
import Footer from "../../Layout/footer/Footer.jsx";
import eduIcon from "../../assets/Sponsor/SponsorFlag.png";
import cultureIcon from "../../assets/Sponsor/SponsorAuthentic.png";
import govIcon from "../../assets/Sponsor/SponsorCsr.png";
import nonprofitIcon from "../../assets/Sponsor/SponsorContent.png";
import LetsTalk from "./LetsTalk.jsx";

const partners = [
  {
    title: "Nationwide Recognition",
    icon: eduIcon,
    color: "red",
    description:
      "Showcase your brand across India at community events, cultural festivals, and sports tournaments.",
  },
  {
    title: "Authentic Engagement",
    icon: cultureIcon,
    color: "orange",
    description:
      "Reach students, families, youth leaders, and communities through meaningful on-ground and digital experiences.",
  },
  {
    title: "CSR Alignment",
    icon: govIcon,
    color: "blue",
    description:
      "Support causes like youth development, gender inclusion in sports, rural engagement, and cultural revival.",
  },
  {
    title: "Content That Converts",
    icon: nonprofitIcon,
    color: "purple",
    description:
      "Your brand will feature in reels, stories, posters, kits, and campaigns with long shelf life and high shareability.",
  },
];

const Sponser = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navWrapper}>
        <Navbar />
      </div>
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <h1 className={styles.heroTitle}>Sponsor Bond Over Sports</h1>
          <h2 className={styles.heroSubtitle}>
            Back the Movement. Boost Your Brand. Build Impact.
          </h2>
          <p className={styles.heroText}>
            Bond Over Sports is more than events — it&apos;s a grassroots movement
            uniting people through heritage, sports, and storytelling. By
            sponsoring BOS, you&apos;re not just getting visibility — you&apos;re
            becoming a catalyst for change.
          </p>
        </div>
      </section>
      <section className={styles.section}>
        <h2 className={styles.h2}>Why Sponsor BOS?</h2>

        <div className={styles.grid}>
          {partners.map((item, idx) => (
            <div key={idx} className={`${styles.card} ${styles[item.color]}`}>
              <div className={styles.iconBox}>
                <img src={item.icon} alt={item.title} />
              </div>

              <h3 className={styles.title}>{item.title}</h3>

              <p className={styles.description}>{item.description}</p>
            </div>
          ))}
        </div>
      </section>
      <Sponsorships />
      <SponsorForm />
      <LogoCard />
      <LetsTalk />
      <Footer />
    </div>
  );
};

export default Sponser;
