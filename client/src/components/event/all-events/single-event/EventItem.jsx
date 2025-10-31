import styles from '../single-event/EventItem.module.css'
import { Link } from "react-router-dom";

export default function EventItem() {
    return (
            <div className={styles.allEvents}>
                <div className={styles.allEVentsInfo}>
                    <img src='https://shorturl.at/Y7Otp'/>
                    <div className={styles.eventContent}>
                        <h1>BEER FEST</h1>
                        <h2>Sofia City Center</h2>                 
                        <Link to={'/details'}>Read more</Link>  
                    </div>
                </div>
            </div>
    )
}