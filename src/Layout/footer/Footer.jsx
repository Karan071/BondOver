import styles from './Footer.module.css';
import logo from '../../assets/Logo2.png'; // BOS logo
import thread from '../../assets/Icon/Thread.png';
import phone from '../../assets/Icon/phone.png';
import mail from '../../assets/Icon/mail.png';
import location from '../../assets/Icon/location.png';


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.columns}>

        {/* Logo */}
        <div className={`${styles.col} ${styles.col1}`}>
          <img src={logo} alt="Bond Over Sports Logo" className={styles.logo} />
        </div>

        {/* Contact */}
        <div className={`${styles.col} ${styles.col2}`}>
          <div>
            <p><img src={phone} alt="phone" className={styles.import}/> +91 80760 70025</p>
            <p><img src={mail} alt="Mail" className={styles.import}/> hello@bondoversports.com</p>
          
          <div className={styles.socials}>
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src={thread} alt="Threads"  className={styles.import} />
            </a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
          </div>
        </div>

        {/* Address */}
        <div className={`${styles.col} ${styles.col3}`}>
          <p><img src={location} alt="location" className={`${styles.import} ${styles.im3}`}/></p>
          <p className={styles.strong}><strong>Bond Over Sports</strong></p>
          <p>601, Magnus Tower, Sector 73</p>
          <p>Noida, Uttar Pradesh, India 201307</p>
        </div>
      </div>

      <div className={styles.hr}></div>

      <div className={styles.bottom}>
        <span>
          © Bond Over Sports | Powered by HSWF.Network <span className={styles.sm}>- Initiative of <strong> &nbsp; Alpheric</strong> </span>
        </span>
        <div>
          <a href="#">Privacy Policy</a> | <a href="#">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
