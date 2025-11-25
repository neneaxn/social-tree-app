import { Link } from "react-router-dom";
import styles from '../single-event/EventItem.module.css';

export default function EventItem({
    _id,
    imageUrl,
    title,
    location,
}) {
    return (
            <div className={styles.allEvents}>
                <div className={styles.allEVentsInfo}>
                    <img className={styles.imageStyle}src={imageUrl}/>
                    <div className={styles.eventContent}>
                        <h1 className={styles.eventItemHeadingOne}>{title}</h1>
                        <h2 className={styles.eventItemHeadingTwo}>{location}</h2>                 
                        <Link to={`/events/${_id}`} className={styles.eventItemA}>Explore</Link>  
                    </div>
                </div>
            </div>
    )
}