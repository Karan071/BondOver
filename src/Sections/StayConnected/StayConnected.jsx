import React from 'react';
import styles from './StayConnected.module.css';
import Button from '../../Components/button.jsx';

const StayConnected = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.box}>
        <div className={styles.top}>
          <h2 className={styles.h2}>Stay Connected</h2>
          <p className={styles.p}>
            Follow our journey, explore events, and be part of the growing BOS family.
          </p>
        </div>
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <div className={styles.inputs}>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email" required />
            <Button text="Subscribe" className={styles.but}/>
          </div>
          
        </form>
      </div>
    </section>
  );
};

export default StayConnected;
