import { useParams, Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import * as eventService from "../../../services/eventsServices";
import * as attendanceService from "../../../services/attendanceService";
import styles from '../details/Details.module.css'
import AuthContext from "../../../contexts/authContext";
import Path from "../../../lib/paths";
import pathToUrl from '../../../utils/pathToUrl'

export default function EventDetails() {
    const navigate = useNavigate();
    const { email, userId } = useContext(AuthContext);
    const { eventId } = useParams();
    const [ event, setEvent ] = useState({});
    //TODO
    const [ guestCount, setGuestCount ] = useState(0);
    const [ isAttending, setIsAttending ] = useState(false);
    
    
    useEffect(() => {
        eventService.getOne(eventId)
            .then(event => setEvent(event))
        //check this 
        attendanceService.getCount(eventId)
            .then(res => setGuestCount(res))
            .catch(err => console.log(`${err.message}: attendances`))
    }, [eventId]);
    
    const handleAttendanceClick = async () => {
        const newIsAttanding = !isAttending;
        const method = newIsAttanding ? 'POST' : 'DELETE';

        try {
            if (method == 'POST') {
                //also add attendance count to event id
                const res = await attendanceService.add(eventId);
                console.log('added');
                
            } else {
                //data/attendances/_id
                //remove attendance to event id
                attendanceService.remove(eventId) //attandanceId
                console.log('removed');    
            }
        } catch(err) {
            console.log(err.message);            
        }

        if (newIsAttanding) {
            setGuestCount(count => count + 1)
        } else {
            setGuestCount(count => count - 1)
        };

        setIsAttending(newIsAttanding)
        
        // if (isAttending) {
        //     setGuestCount(prevCount => prevCount - 1);
        //     const newCount = guestCount - 1
        //     const newData = { eventId, counter: newCount };
        //     attendanceService.update(eventId, newData);      
        //     setIsAttending(false);
        // } else {
        //     setGuestCount(prevCount => prevCount + 1);
        //     const newCount = guestCount + 1;
        //     const newData = { eventId, counter: newCount };
        //     attendanceService.update(eventId, newData);     
        //     setIsAttending(true);

        // setIsAttending(!isAttending);
    };

    const deleteButtonClickHandler = async () => {
            const hasConfirmed = confirm(`Are you sure you want to delete ${event.title}?`);
            
            if (hasConfirmed) {
                await eventService.remove(eventId)
                navigate('/events')
            }
    }

    const buttonText = isAttending ? "Unsubscribe" : "Join Event";
    const isOwner = userId === event._ownerId;

    return (
        <div className={styles.eventDetails}>
            <section className={styles.infoSection}>

                <div className={styles.eventHeader}>
                    <img className={styles.eventImg} src={event.imageUrl} alt={event.title} />
                    <h1 className={styles.detailsHeadingOne}>{event.title}</h1>
                    <span className={styles.type}>Type: {event.type}</span> <br/>
                    <span className={styles.location}>Location: {event.location}</span>                    
                </div>

                <p className={styles.text}>
                    {event.summary}
                </p>
       
                <div id="guests-info" className={styles.guestsInfo}>
                    <p className={styles.counterStyle}>
                        {guestCount} Guests attending
                    </p>
                    
                    {isOwner && (
                    <button
                        className={styles.joinEventButton}
                        style={{backgroundColor: isAttending ? '#da9c55ff' : '#dde0baff'}}
                        onClick={handleAttendanceClick}
                    >
                        {buttonText}
                    </button>
                    )}
                </div>
                

                {isOwner && <div id="event-buttons" className={styles.buttons}>
                    <Link to={pathToUrl(Path.EventEdit, { eventId })} className={styles.editButtonStyle}>
                        Edit
                    </Link>
                    <button className={styles.deleteButtonStyle} onClick={deleteButtonClickHandler}>Delete</button>
                </div>
                }           
            </section> 
        </div>
    )
}