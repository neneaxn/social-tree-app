import { Link } from 'react-router-dom';
import styles from '../user-guide/UserGuide.module.css';
import Path from '../../../lib/paths';

export default function UserGuide() {
    return (
            <div className={styles.block}>
                <h3 className={styles.heading}>Ready to Branch Out?</h3>
                <p className={styles.subtext}>Explore hundreds of events or plant your own social tree today.</p>
                
                <div className={styles.buttons}>
                    <Link to={Path.AllEvents} className={`${styles.button} ${styles.primary}`}>
                        Browse All Events
                    </Link>
                    <Link to={Path.CreateEvent}className={`${styles.button} ${styles.secondary}`}>
                        Create Event
                    </Link>
                </div>
            </div>
    )
}