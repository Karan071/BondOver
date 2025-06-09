import styles from './CommunityTalks.module.css';

import avatar1 from '../../assets/Avatar/Tempavatar.png';
import avatar2 from '../../assets/Avatar/Tempavatar.png';
import avatar3 from '../../assets/Avatar/Tempavatar.png';
import quoteIcon from '../../assets/vector/Vector2.png';

const testimonials = [
  {
    name: 'Rekha, Parent',
    location: 'Patna',
    text: 'My daughter played kho-kho for the first time. BOS created that platform — I’ll never forget it.',
    avatar: avatar1,
  },
  {
    name: 'Shubham',
    location: 'Player – Bengaluru',
    text: 'I got to represent my locality in football. No politics, no fees, just pure sport.',
    avatar: avatar2,
  },
  {
    name: 'Anjali',
    location: 'Volunteer – Jodhpur',
    text: 'As a volunteer, I felt like I was doing something that really mattered. Can’t wait for the next event.',
    avatar: avatar3,
  },
];

const CommunityTalks = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.h2}>Our Community Talks</h2>

      <div className={styles.grid}>
        {testimonials.map((item, idx) => (
          <div className={styles.card} key={idx}>
            <div className={styles.header}>
              <div className={styles.user}>
                <img src={item.avatar} alt={item.name} />
                <div>
                  <strong className={styles.name}>{item.name}</strong>
                  <p className={styles.location}>{item.location}</p>
                </div>
              </div>
              <img src={quoteIcon} alt="quote" className={styles.quoteIcon} />
            </div>
            <p className={styles.text}>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CommunityTalks;
