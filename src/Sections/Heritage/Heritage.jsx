import styles from './HeritageEvents.module.css';
import img1 from '../../assets/Sec2HeritageSection/Heritage1.jpg'; // Replace with actual paths
import img2 from '../../assets/Sec2HeritageSection/Heritage2.jpg';
import img3 from '../../assets/Sec2HeritageSection/Heritage3.jpg';
import avatar1 from '../../assets/Avatar/Avatar1.png';
import avatar2 from '../../assets/Avatar/Avatar2.png'; 

function HeritageEvents() {
  return (
    <section className={styles.section}>
      <div className={styles.images}>
        <img src={img1} alt="Event 1" className={styles.eventImage} />
        <img src={img2} alt="Event 2" className={styles.eventImageMain} />
        <img src={img3} alt="Event 3" className={styles.eventImage} />
        <div className={styles.avatarGroup}>
            <img src={avatar2} alt="User 1" className={`${styles.avatar} ${styles.avatarYellow}`} />
            <img src={avatar1} alt="User 2" className={`${styles.avatar} ${styles.avatarOrange}`} />
            <div className={`${styles.avatar} ${styles.avatarCount}`}>+98</div>
        </div>
      </div>
      <div className={styles.content}>
        <h2>Celebrating Heritage<br /><span>Through Events</span></h2>
        <h4>Experience the Spirit of Sports Near You</h4>
        <p>
          BOS curates and supports sports events rooted in heritage—from local competitions to large-scale festivals. 
          These aren’t just games—they’re experiences that bring people closer, preserve culture, and inspire the next generation.
        </p>
        <ul>
          <li>Traditional Games</li>
          <li>Inter-school & Inter-college Sports</li>
          <li>Community Festivals</li>
          <li>Inclusive & Adaptive Sports Meets</li>
        </ul>
        <strong>Discover BOS Events Around You</strong>
        <p>Explore what’s happening nearby and get involved!</p>
      </div>
    </section>
  );
};

export default HeritageEvents;
