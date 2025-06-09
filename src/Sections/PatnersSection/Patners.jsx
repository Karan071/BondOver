import styles from './PartnersSection.module.css';
import { useNavigate } from 'react-router-dom';

import eduIcon from '../../assets/Icon/ic1.png';
import cultureIcon from '../../assets/Icon/ic2.png';
import sportsIcon from '../../assets/Icon/ic3.png';
import govIcon from '../../assets/Icon/ic4.png';
import nonprofitIcon from '../../assets/Icon/ic5.png';
import Button from '../../Components/button.jsx';


const partners = [
  { title: 'Educational Institutions', icon: eduIcon, color: 'red' },
  { title: 'Cultural & Heritage Foundations', icon: cultureIcon, color: 'orange' },
  { title: 'Sports Federations', icon: sportsIcon, color: 'green' },
  { title: 'Government Bodies', icon: govIcon, color: 'blue' },
  { title: 'Non-Profits & Youth Clubs', icon: nonprofitIcon, color: 'purple' },
];

const PartnersSection = () => {
  const navigate = useNavigate();
  return (
    <section className={styles.section} id='partners'>
      <h2 className={styles.h2}>Our Partners</h2>
      <p className={styles.subtitle}>We proudly collaborate with:</p>

      <div className={styles.grid}>

        {partners.map((item, idx) => (
          <div key={idx} className={`${styles.card} ${styles[item.color]}`}>
            <div className={styles.iconBox}>
              <img src={item.icon} alt={item.title} />
            </div>
            <p className={styles.title}>{item.title}</p>
          </div>
        ))}
        
      </div>

      <p className={styles.note}>
        Let’s work together to create impact where it matters most—on the ground.
      </p>

      <Button 
        text="Become a Partner" 
        className={styles.but}
        onClick={() => navigate('/partner')}
      />
    </section>
  );
};

export default PartnersSection;
