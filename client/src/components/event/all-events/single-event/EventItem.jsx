import styles from '../single-event/EventItem.module.css'
import { Link } from "react-router-dom";

export default function EventItem({
    _id,
    imageUrl,
    title,
    location,
}) {
    return (
            <div className={styles.allEvents}>
                <div className={styles.allEVentsInfo}>
                    <img src={imageUrl}/>
                    <div className={styles.eventContent}>
                        <h1>{title}</h1>
                        <h2>{location}</h2>                 
                        <Link to={`/events/${_id}`}>Read more</Link>  
                    </div>
                </div>
            </div>
    )
}