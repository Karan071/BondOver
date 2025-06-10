import React from 'react';
import styles from './SponsorsSection.module.css';

import sponsor1 from '../../assets/logos/lo1.png';
import sponsor2 from '../../assets/logos/lo2.png';
import sponsor3 from '../../assets/logos/lo3.png';
import sponsor4 from '../../assets/logos/lo4.png';
import sponsor5 from '../../assets/logos/lo5.png';
import sponsor6 from '../../assets/logos/lo6.png';
import sponsor7 from '../../assets/logos/lo7.jpg';

const sponsors = [
  { name: 'Alpheric', logo: sponsor1 },
  { name: 'FitVio', logo: sponsor2 },
  { name: 'Aimshala', logo: sponsor3 },
  { name: 'BigBingo', logo: sponsor4 },
  { name: 'EKROCX', logo: sponsor5 },
  { name: 'Interior Design', logo: sponsor6 },
  { name: 'KHELOGE', logo: sponsor7 },
];

const SponsorsSection = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.h2}>Sponsors That <br /><span>Power the Movement</span></h2>
      <p className={styles.description}>
        Bond Over Sports (BOS) thrives with the support of brands that believe in community-first engagement and purposeful visibility.
        From grassroots tournaments to nationwide campaigns, our sponsors help take sports where it matters most.
      </p>

      <div className={styles.logoGrid}>
        {sponsors.map((sponsor, index) => (
          <div className={styles.logoCard} key={index}>
            <img src={sponsor.logo} alt={sponsor.name} />
          </div>
        ))}
      </div>
      <p className={styles.subtitle}>
        Purpose-Driven Brands. Real Impact.
      </p>
      <p className={styles.footerNote}>
        Whether it’s BOS kits, event zones, trophies, or CSR collaborations — their support brings every story to life.
      </p>
    </section>
  );
};

export default SponsorsSection;
