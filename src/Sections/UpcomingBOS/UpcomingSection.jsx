import styles from './UpcomingEvents.module.css';
import { FaMapMarkerAlt } from 'react-icons/fa';
import calendarIcon from '../../assets/Icon/calenderIcon.png';
import { useNavigate } from 'react-router-dom';

const EventCard = ({ image, title, ageGroup, location, date }) => {
  const navigate = useNavigate();
  return (
    <>
    <div className={styles.container}>
    <div className={`${styles.card} cardBackground`}>
      <img src={image} alt="event" className={styles.image} />
      <div className={styles.body}>
        <p className={`${styles.age} ${styles.Age}`}>Age group: {ageGroup}</p>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.location}>
          <FaMapMarkerAlt className={styles.icon} />
          {location}
        </p>
        <p className={styles.date}>
      <img src={calendarIcon} alt="calendar" className={styles.dateIm}/>
      {date}
      </p>
        <button className={styles.but} onClick={() => navigate("/register")}>Register Now</button>
      </div>
    </div>
    </div>
    </>
  );
};

export default EventCard;
