import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';
import Logo from '../assets/Logo.png';
import Button from '../Components/button.jsx';
import { FiMenu, FiX } from 'react-icons/fi';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  }, [isMenuOpen]);

  // Determine text color style based on route
  const linkColor = location.pathname === '/' ? '#fff' : '#000';

  return (
    <div className={styles.logoNav}>
      <img src={Logo} alt="BOS Logo" className={styles.logo} />

      <nav className={`${styles.nav} ${isMenuOpen ? styles.mobileOpen : ''}`}>
        {isMenuOpen && (
          <button onClick={() => setIsMenuOpen(false)} className={styles.closeButton}>
            <FiX size={28} />
          </button>
        )}
        <img src={Logo} alt="BOS Logo" className={`${styles.logo} ${styles.inNav}`} />
        <a href="#" style={{ color: linkColor }}>ABOUT</a>
        <a href="#" style={{ color: linkColor }}>EVENTS</a>
        <a href="#" style={{ color: linkColor }}>JOIN AS</a>
        <a href="#" style={{ color: linkColor }}>SPONSERS</a>
        <a href="#" style={{ color: linkColor }}>PARTNERS</a>
        <a href="#" style={{ color: linkColor }}>INSTA TRACK</a>
        <a href="#" style={{ color: linkColor }}>HSWF.NETWORK</a>
        <Button className={`${styles.joinBtn} ${styles.inNav}`} text="Join" />
      </nav>

      {!isMenuOpen && (
        <div className={styles.mobileMenuToggle}>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={styles.menuButton}>
            <FiMenu size={28} style={{color:linkColor}} />
          </button>
        </div>
      )}

      <div className={styles.joinButtonWrapper}>
        <Button className={`${styles.joinBtn} ${styles.outNav}`} text="Join" />
      </div>
    </div>
  );
}

export default Navbar;