import { useContext, useEffect, useState } from "react";
import styles from './Profile.module.css';
import * as eventService from '../../services/eventsServices'; 
import * as attendanceService from '../../services/attendanceService'
import AuthContext from "../../contexts/authContext";
import EventItem from "../event/all-events/single-event/EventItem";


export default function Profile() {    
    const { isAuthenticated, email, userId, isAdmin } = useContext(AuthContext);
    const [userEvents, setUserEvents] = useState([]);
    const [userJoinedEvents, setUserJoinedEvents] = useState([]);

    useEffect(() => {
            eventService.getByOwner(userId)
                .then(res => setUserEvents(res))
                .catch(err => console.log(`${err.message}: events`))
    }, [userId]);

    useEffect(() => {
        if (!userId) {
            setUserJoinedEvents([]);
            return;
        }

        const fetchJoinedEvents = async () => {
            try {
                const attendedEventIds = await attendanceService.getEventsAttendedByUser(userId);
                const joinedEvents = await eventService.getAttendedEventsByIds(attendedEventIds);

                setUserJoinedEvents(joinedEvents);
            } catch (err) {
                console.error("Error fetching joined events: ", err);
                setUserJoinedEvents([]);
            }
        };

        fetchJoinedEvents();
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
            {/* user info */}
            <div className={styles.profileHeader}>
                <h1 className={styles.profileHeading}>User Profile</h1>
                <div className={styles.userInfo}>
                    <p className={styles.userLabel}>Email:</p>
                    <p className={styles.userValue}>{email}</p>
                    <p className={styles.userLabel}>User ID:</p>
                    <p className={styles.userValue}>{userId}</p>
                </div>
            </div>

            {isAdmin ? (
                <p className={styles.noEvents} style={{color: '#6C5749'}}>
                    Administrative Access. You can edit/delete any event.
                </p>
            ) : (
                <div>
                    {/* events created by user */}
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
                                    You have not created any events yet!
                                </p>
                            )}
                        </div>
                    </div>

                    {/* events user is attending */}
                    <div className={styles.myEventsSection}>
                        <h2 className={styles.eventsHeading}>Events You Are Attending</h2>

                        <div className={styles.eventsGrid}>
                            {userJoinedEvents.length > 0 ? (
                                userJoinedEvents.map(event => (
                                    <EventItem key={event._id} {...event} />
                                ))
                            ) : (
                                <p className={styles.noEvents}>
                                    You have not joined any events yet!
                                </p>
                            )}
                        </div>
                    </div>
                </div>)}
        </section>
    );
}