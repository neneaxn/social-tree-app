import { Link } from 'react-router-dom';
import Path from '../../../lib/paths';
import pathToUrl from '../../../utils/pathToUrl';
import styles from '../home-events/HomeEvent.module.css'

export default function HomeEvents({
    _id,
    title,
    imageUrl,
}) {
    return (
        <div className={styles.event}>
            <div className={styles.image}>
                <img src={imageUrl}/>
            </div>
            <h2 className={styles.headingTwoHomeEvent}>{title}</h2>
            <div className={styles.buttons}>
                <Link to={pathToUrl(Path.EventDetails, { eventId: _id })} className={styles.moreButton}>More</Link>
            </div>
        </div>
    )
}