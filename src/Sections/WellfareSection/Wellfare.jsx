
import styles from './HswfSection.module.css';
import logo from '../../assets/logos/WellfareLogo.png'; // Add your image here
import Button from '../../Components/button.jsx';
import { Link } from 'react-router-dom';

const HswfSection = () => {
  return (
    <section className={styles.section} id='network'>
      <h3 className={styles.h3}>Brought to You by</h3>
      <h2 className={styles.h2}>Hardcore Sports Welfare Foundation</h2>

      <p className={styles.desc}>
        Hardcore Sports Welfare Foundation <span className={styles.highlight}>(HSWF.Network)</span> is a not-for-profit initiative committed to making sports more accessible, inclusive, and impactful across India.
      </p>
      <p className={styles.desc2}>
        From training grassroots coaches and supporting community clubs to organizing events that inspire youth participation HSWF empowers local ecosystems through sports.
      </p>
      <p className={styles.desc3}>
        <strong>We believe sports is not just play—it’s a pathway to leadership, health, and unity.</strong>
      </p>

      <p className={styles.focus}>
        Enabling clubs • Supporting players • Building community through sport.
      </p>

      <div className={styles.footer}>
        <div>
          <img src={logo} alt="HSWF Logo" className={styles.logo} />
        </div>
        <div className={styles.legal}>
          <h4>Legal & Registration Details</h4>
          <p><strong>PAN</strong> – AAGCH5442Q</p>
          <p><strong>Section 12A & 80G</strong> – AAGCH5442QE20221</p>
          <p><strong>CIN</strong> – U92400DL2022NPL406386</p>
          <p><strong>Niti Aayog</strong> – DL/2022/0332632</p>
        </div>
        <div>
          <Link to="https://hswf.network/" target="_blank">
            <Button className={styles.but} text="Visit HSWF.Network" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HswfSection;
