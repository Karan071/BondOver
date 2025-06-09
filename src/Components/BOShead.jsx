import styles from './BOShead.module.css';

export default function BOShead() {
  return (
    <div className={styles.bosWrapper} id='events'>
      <div className={styles.bosSection}>
        <h2 className={styles.bosHeading}>
          <div className={styles.bosHeadingGroup}>
            <span className={styles.bosHeadingSpan}>Upcoming BOS</span>
            <span className={styles.bosHeadingRest}>Events Around You</span>
          </div>
        </h2>
        <p className={styles.bosParagraph}>
          BOS curates and supports sports events rooted in heritage—from local
          competitions to large-scale festivals. These aren’t just games—they’re
          experiences that bring people closer, preserve culture, and inspire the
          next generation.
        </p>
      </div>
    </div>
  );
}
