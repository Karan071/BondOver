import styles from './LetsTalk.module.css';
import phone from '../../assets/Sponsor/img/call.png';
import message from '../../assets/Sponsor/img/Message.png';
import left from '../../assets/Sponsor/img/left.png';
import right from '../../assets/Sponsor/img/right.png';

export default function LetsTalk(){

    return(
        <section className={styles.container}>
            <div className={styles.contant}>
                <h2 className={styles.heading}>Let’s Talk!</h2>
                <p className={styles.paragraph}>For detailed sponsorship decks, customised packages or CSR partnership discussions:</p>
                <div className={styles.Cinfo}>
                    <span className={styles.spam}><img src={phone} alt="phone" className={styles.phone}/>+91 9805 2345 23 </span>
                    <div></div>
                    <span className={styles.spam}><img src={message} alt="message" className={styles.message}/>neeraj@bondoversports.com</span>
                </div>
            </div>
            <img src={left} alt="Photo on left" className={styles.left}/>
            <img src={right} alt="Photo on right" className={styles.right}/>
        </section>
    );
}