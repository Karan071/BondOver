import styles from './DynamicCard.module.css';
import { FaMapMarkerAlt } from 'react-icons/fa';
import calendarIcon from '../../assets/Icon/calenderIcon.png';

export function DynamicCard({image,age,title,location,date}){
    return(
        <div className={styles.container}>
            <img src={image} alt={title}  className={styles.img}/>
            <div>
                <p className={styles.age}>Age Group : {age}</p>
                <h3 className={styles.h3}>{title}</h3>
                <p className={styles.p}>
                    <FaMapMarkerAlt className={styles.icon} />
                    {location}
                </p>
                <p className={styles.p}>
                    <img src={calendarIcon} alt="calendar" className={styles.icon}/>
                    {date}
                </p>
            </div>
        </div>
    )
}