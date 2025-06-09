import styles from './Hero.module.css';
import stadiumImg from '../../assets/HeroBackground.jpg'; 
import Button from '../../Components/button.jsx';
import fitLogo from '../../assets/logos/FIT.jpg';
import nitiLogo from '../../assets/logos/NITI.png';
import Navbar from '../../Layout/Navbar.jsx';
import { useNavigate } from 'react-router-dom';

function Hero () {
  return (
    <section className={styles.hero} style={{ backgroundImage: `url(${stadiumImg})` }}>
      <div className={styles.overlay}>

        <Navbar/>

        <div className={styles.marqueeWrapper}>
          <div className={styles.marquee}>
            <span>BOND OVER SPORTS&nbsp;&nbsp;&nbsp;</span>
            <span>BOND OVER SPORTS&nbsp;&nbsp;&nbsp;</span>
            <span>BOND OVER SPORTS&nbsp;&nbsp;&nbsp;</span>
            <span>BOND OVER SPORTS&nbsp;&nbsp;&nbsp;</span>
          </div>
        </div>

        <div className={`${styles.content} `}>
          <h1>Where Heritage Meets Passion, And Communities Come Together Through Sports</h1>
          <p className={styles.subheading}>
            Bond Over Sports (BOS) is a movement to revive traditional games and unite communities through Sports.
          </p>
          <p className={styles.description}>
            Whether it's kabaddi in the heartlands, kho-kho at school yards, or gully cricket in urban lanes, every game has a story—and we’re here to tell it.
          </p>
          <div className={styles.container}>
            <p className={styles.label}>Registered Under</p>
            <div className={styles.grid}>
              <div className={styles.logoBox}>
                <img src={fitLogo} alt="FIT India" />
              </div>
              <div className={styles.logoBox}>
                <img src={nitiLogo} alt="NITI Aayog" />
              </div>
            </div>
          </div>
          <div className={styles.buttons}>
            <Button className={styles.primary} text="Join the movement" onClick={() => {}} />
            <div className={styles.secWrapper}>
              <div className={styles.out}></div>
              <button className={styles.secondary} onClick={() => {}}>Explore Events</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
