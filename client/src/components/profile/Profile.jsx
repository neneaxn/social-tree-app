import { useContext, useEffect, useState } from "react";
import styles from './Profile.module.css';
import * as eventService from '../../services/eventsServices'; 
import AuthContext from "../../contexts/authContext";
import EventItem from "../event/all-events/single-event/EventItem";


export default function Profile() {    
    const { isAuthenticated, email, userId } = useContext(AuthContext);
    const [userEvents, setUserEvents] = useState([])

    useEffect(() => {
            eventService.getByOwner(userId)
                .then(res => setUserEvents(res))
                .catch(err => console.log(`${err.message}: events`))
    }, [userId]);
    

    if (!isAuthenticated) {
        return (
            <div className={styles.profileContainer}>
                <h1 className={styles.unauthorizedHeading}>Unauthorized</h1>
                <p>Please log in to view your profile.</p>
            </div>
        );
    }

    return (
        <section className={styles.profile}>
            <div className={styles.profileHeader}>
                <h1 className={styles.profileHeading}>User Profile</h1>
                <div className={styles.userInfo}>
                    <p className={styles.userLabel}>Email:</p>
                    <p className={styles.userValue}>{email}</p>
                    <p className={styles.userLabel}>User ID:</p>
                    <p className={styles.userValue}>{userId}</p>
                </div>
            </div>

            <div className={styles.myEventsSection}>
                <h2 className={styles.eventsHeading}>Events You Created</h2>

                <div className={styles.eventsGrid}>
                    {userEvents.length > 0 ? (
                        userEvents.map(event => (
                            // Reusing the existing EventItem component
                            <EventItem key={event._id} {...event} />
                        ))
                    ) : (
                        <p className={styles.noEvents}>
                            You haven't created any events yet!
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
}