import styles from '../values/Values.module.css';

export default function Values() {
    return(
        <div className={styles.valueSection}>
                
                <div className={styles.valueCard}>
                    <div className={styles.valueIcon}>💼</div> 
                    <h4 className={styles.valueHeading}>Professional Networking</h4>
                    <p className={styles.valueText}>Host business meetups, find mentors, and expand your professional circle with targeted events.</p>
                </div>

                <div className={styles.valueCard}>
                    <div className={styles.valueIcon}>☕</div> 
                    <h4 className={styles.valueHeading}>Passion & Hobbies</h4>
                    <p className={styles.valueText}>Easily organize and discover local gatherings for book clubs, hiking groups, art classes, and more.</p>
                </div>
                
                <div className={styles.valueCard}>
                    <div className={styles.valueIcon}>🚀</div> 
                    <h4 className={styles.valueHeading}>Join With a Click</h4>
                    <p className={styles.valueText}>No complicated sign-ups. View event details and secure your spot instantly with simple, one-click access.</p>
                </div>
                
            </div>
    )
}