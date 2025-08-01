import { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import Logo from '../assets/Logo.png';
import Button from '../Components/button.jsx';
import { FiMenu, FiX } from 'react-icons/fi';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  }, [isMenuOpen]);

  // Determine text color style based on route
  const linkColor = location.pathname === '/' ? '#fff' : '#000';

  return (
    <div className={styles.logoNav}>
      <Link to="/" className={styles.logoLink}>
        <img src={Logo} alt="BOS Logo" className={styles.logo} />
      </Link>

      <nav className={`${styles.nav} ${isMenuOpen ? styles.mobileOpen : ''}`}>
        {isMenuOpen && (
          <button onClick={() => setIsMenuOpen(false)} className={styles.closeButton}>
            <FiX size={28} />
          </button>
        )}
        <img src={Logo} alt="BOS Logo" className={`${styles.logo} ${styles.inNav}`} />
        <a href="#about" style={{ color: linkColor }} onClick={() => setIsMenuOpen(false)}>ABOUT</a>
        <a href="#events" style={{ color: linkColor }} onClick={() => setIsMenuOpen(false)}>EVENTS</a>
        <a href="#joinas" style={{ color: linkColor }} onClick={() => setIsMenuOpen(false)}>JOIN AS</a>
        <a href="#sponser" style={{ color: linkColor }} onClick={() => setIsMenuOpen(false)}>SPONSERS</a>
        <a href="#partners" style={{ color: linkColor }} onClick={() => setIsMenuOpen(false)}>PARTNERS</a>
        <a href="#insta" style={{ color: linkColor }} onClick={() => setIsMenuOpen(false)}>INSTA TRACK</a>
        <a href="#network" style={{ color: linkColor }}  onClick={() => setIsMenuOpen(false)}>HSWF.NETWORK</a>
        <Button className={`${styles.joinBtn} ${styles.inNav}`} text="Join" onClick={() => navigate("/join")} />
      </nav>

      {!isMenuOpen && (
        <div className={styles.mobileMenuToggle}>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={styles.menuButton}>
            <FiMenu size={28} style={{ color: linkColor }} />
          </button>
        </div>
      )}

      <div className={styles.joinButtonWrapper}>
        <Button className={`${styles.joinBtn} ${styles.outNav}`} text="Join" onClick={() => navigate("/join")} />
      </div>
    </div>
  );
}

export default Navbar;