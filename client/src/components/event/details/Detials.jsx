import { useParams, Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import styles from '../details/Details.module.css';
import * as eventService from "../../../services/eventsServices";
import * as attendanceService from "../../../services/attendanceService";
import AuthContext from "../../../contexts/authContext";
import Path from "../../../lib/paths";
import pathToUrl from '../../../utils/pathToUrl';
import Loading from "../../loading/Loading";
import EventNotFound from "../../error/event-not-found/EventNotFound";

export default function EventDetails() {
    const navigate = useNavigate();
    const { isAuthenticated, userId } = useContext(AuthContext);
    const { eventId } = useParams();
    const [ event, setEvent ] = useState({});
    const [ currentAttendanceRecord, setCurrentAttendanceRecord ] = useState(null);
    const [ guestCount, setGuestCount ] = useState(0);
    const isAttending = currentAttendanceRecord !== null;

    const [isLoading, setIsLoading] = useState(true);
    const [isCheckingAttendance, setIsCheckingAttendance] = useState(false); //for Join button purposes

    //event data
    useEffect(() => {
        eventService.getOne(eventId)
            .then(eventData => {
                setEvent(eventData);
                
                attendanceService.getCount(eventId)
                    .then(countData => {
                        setGuestCount(countData);
                    })
                    .catch(err => {
                        console.error("Error fetching guest count (404 is fine if none exist):", err);
                        setGuestCount(0);
                    });
            })
            .catch(err => {
                console.error("Loading data Error (Event NOT found or server error):", err);
            })
            .finally(() => setIsLoading(false));
    }, [eventId]);


    //attendance data
    useEffect(() => {
        if (userId) {
            setIsCheckingAttendance(true);

            attendanceService.getByUserAndEvent(eventId, userId)
                .then(attendance => {
                    setCurrentAttendanceRecord(attendance);
                })
                .catch(err => {
                    console.error('Error fetching user attendance:', err);
                    setCurrentAttendanceRecord(null); 
                })
                .finally(() => {
                    setIsCheckingAttendance(false); //for Join button
                });
        } else {
            // reset state in case the user logged-out
            setCurrentAttendanceRecord(null);
        }
    }, [eventId, userId]);


    const handleAttendanceClick = async () => {
        
        if (!isAuthenticated) return navigate(Path.Login);

        const isJoining = !isAttending;

        try {
            if (isJoining) {
                const res = await attendanceService.add(eventId);
                setCurrentAttendanceRecord(res);
                setGuestCount(count => count + 1);          
            } else {
                const attendanceId = currentAttendanceRecord?._id;
                
                if (attendanceId) {
                    await attendanceService.remove(attendanceId);
                    setCurrentAttendanceRecord(null);
                    setGuestCount(count => count - 1);
                }
            }
        } catch(err) {
            console.error('Attendance action failed: ', err); 
        }
    };
    

    const deleteButtonClickHandler = async () => {
        const hasConfirmed = confirm(`Are you sure you want to delete ${event.title}?`);

        if (hasConfirmed) {
            try{
                await eventService.remove(eventId);
                navigate('/events');
            } catch (err) {
                console.log("Deletion failed: ", err);
                alert("Failed to delete the event. Please try again."); 
            }
        }
    }


    const buttonText = isAttending ? "Unsubscribe" : "Join Event";
    const isOwner = userId === event._ownerId;

    //message while data is loading
    if (isLoading) {
        return <Loading/>
    }

    //in case of non-existing event
    if (!event || !event._id) {
        return <EventNotFound/>
    }

    return (

        <div className={styles.eventDetails}>
            <section className={styles.infoSection}>

                {/* event details */}
                <div className={styles.eventHeader}>
                    <img className={styles.eventImg} src={event.imageUrl} alt={event.title} />
                    <h1 className={styles.detailsHeadingOne}>{event.title}</h1>
                    <span className={styles.type}>Type: {event.type}</span> <br/>
                    <span className={styles.location}>Location: {event.location}</span>                    
                </div>

                <p className={styles.text}>
                    {event.description}
                </p>

                {/* attendance info */}
                <div id="guests-info" className={styles.guestsInfo}>
                    <p className={styles.counterStyle}>
                        {guestCount} Guests attending
                    </p>
                    
                    {/* Join functionality */}
                    {(isAuthenticated && !isOwner) && (
                    <button
                        className={styles.joinEventButton}
                        style={{backgroundColor: isAttending ? '#9c8b77ff' : '#d4d0b4ff'}}
                        onClick={handleAttendanceClick}
                        disabled={isCheckingAttendance}
                    >
                        {buttonText}
                    </button>
                    )}

                </div>
                
                {/* editing permissions */}
                {isOwner && (
                    <div id="event-buttons" className={styles.buttonsContainer}>
                        <Link to={pathToUrl(Path.EventEdit, { eventId })} className={styles.editButtonStyle}>
                            Edit
                        </Link>

                        <button className={styles.removeButtonStyle} onClick={deleteButtonClickHandler}>
                            Delete
                        </button>
                    </div>)
                }           
            </section> 
        </div>
    )
}