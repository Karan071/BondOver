import styles from './WhatYouGet.module.css'; 
import Icon1 from '../assets/Icon/mo1.png';
import Icon2 from '../assets/Icon/mo2.png';
import Icon3 from '../assets/Icon/mo3.png';
import Icon4 from '../assets/Icon/mo4.png';

export default function WhatYouGet(){
    return(
      <div className={styles.container}>
      <h2>What You Get</h2>
      <div className={styles.Iconcards}>
        
      <div className={styles.Iconcard}>
        <img src={Icon1} alt="Certificate Icon"/>
        <p>Participation Certificate</p>
      </div>
      <div className={styles.Iconcard}>
        <img src={Icon2} alt="BOS Kit Icon"/>
        <p>Free BOS Kit</p>
        <p> (for select roles)</p>
      </div>
      <div className={styles.Iconcard}>
        <img src={Icon3} alt="Recognition Icon"/>
        <p>Recognition across</p>
        <p> BOS media</p>
      </div>
      <div className={styles.Iconcard}>
        <img src={Icon4} alt="Network Icon"/>
        <p>Access to the</p>
        <p> HSWF.Network</p>
      </div>
     </div>
    </div>

    );
}