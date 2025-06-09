
import styles from './EventHorizontalCard.module.css';
import { FaMapMarkerAlt } from 'react-icons/fa';
import calendarIcon from '../../assets/Icon/calenderIcon.png';
import Button from '../../Components/button.jsx';

function EventHorizontalCard({ image, label, title, location, date, description }){
  return (
    <div className={`${styles.card} cardBackground`}>
      <img src={image} alt="event" className={styles.image} />
      <div className={styles.content}>
        <span className={styles.label}>{label}</span>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.info}>
          <FaMapMarkerAlt className={styles.icon} /> {location}
        </p>
        <p className={styles.info}>
              <img src={calendarIcon} alt="calendar" className={styles.dateIm}/>
              {date}
        </p>
        <p className={styles.highlight}>
          <strong>Come together. Play together. Grow stronger.</strong>
        </p>
        <p className={styles.description}>{description}</p>
        <Button text="Register Now" className={styles.but}></Button>
      </div>
    </div>
  );
};

export default EventHorizontalCard;
