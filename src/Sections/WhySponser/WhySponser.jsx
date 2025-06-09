import styles from "./SponsorSection.module.css";
import { useNavigate } from 'react-router-dom';
import sportImg from "../../assets/Sponserwhy.png";
import vector from "../../assets/vector/Vector.png";
import Button from "../../Components/button.jsx";

// Array of sponsor benefits
const benefits = [
  { title: "Meaningful Visibility" },
  { title: "Grassroots Engagement" },
  { title: "Authentic CSR Impact" },
];

const SponsorSection = () => {
  const navigate = useNavigate();
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        {/* Left-side image */}
        <div className={styles.image}>
          <img src={sportImg} alt="BOS Athletes" />
        </div>

        {/* Right-side content */}
        <div className={styles.content}>
          <h2 className={styles.h2}>Why Sponsor BOS?</h2>

          {/* Subtitle message */}
          <p className={styles.subtitle}>
            Support a movement that blends sports, culture, and community impact.
          </p>

          <p className={styles.intro}>BOS gives your brand:</p>
          <div className={styles.grid}>
            {benefits.map((item, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.iconPlaceholder}>
                  <img src={vector} alt="vector" className={styles.iconImage} />
                </div>
                <p className={styles.title}>{item.title}</p>
              </div>
            ))}
          </div>

          {/* Inspirational note */}
          <p className={styles.note}>
            Be seen where it matters. Be remembered for what matters.
          </p>

          {/* CTA Button */}
          <Button 
            className={styles.but} 
            text="Sponsor BOS" 
            onClick={() => navigate('/sponser')}
          />
        </div>
      </div>
    </section>
  );
};

export default SponsorSection;
