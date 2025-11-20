import { Link } from 'react-router-dom';
import styles from '../user-guide/UserGuide.module.css'

export default function UserGuide() {
    return (
            <div className={styles.ctaBlock}>
                <h3 className={styles.ctaHeading}>Ready to Branch Out?</h3>
                <p className={styles.ctaSubtext}>Explore hundreds of events or plant your own social tree today.</p>
                
                <div className={styles.ctaButtons}>
                    <Link to="/events" className={`${styles.ctaButton} ${styles.primaryCta}`}>
                        Browse All Events
                    </Link>
                    <Link to="/create" className={`${styles.ctaButton} ${styles.secondaryCta}`}>
                        Create Event
                    </Link>
                </div>
            </div>
    )
}