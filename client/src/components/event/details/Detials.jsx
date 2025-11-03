import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as eventService from "../../../services/eventsServices";
import * as attendanceService from "../../../services/attendanceService";
import styles from '../details/Details.module.css'

export default function EventDetails() {
    const { eventId } = useParams();
    const [ event, setEvent ] = useState({});
    //TODO
    const [ guestCount, setGuestCount ] = useState(0);
    const [ isAttending, setIsAttending ] = useState(false);
    
    
    useEffect(() => {
        eventService.getOne(eventId)
            .then(event => setEvent(event))

        attendanceService.getCount(eventId)
            .then(res => setGuestCount(res))
    }, [eventId]);
    
    const handleAttendanceClick = async () => {
        const newIsAttanding = !isAttending;
        const method = newIsAttanding ? 'POST' : 'DELETE';

        try {
            if (method == 'POST') {
                const res = await eventService.addAttendance(eventId);
                console.log(res);
                
            } else {
                eventService.removeAttendance(eventId,)
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



    const buttonText = isAttending ? "Unsubscribe" : "Join Event";

    return (
        <div className={styles.eventDetails}>
            <div className={styles.infoSection}>

                <div className={styles.eventHeader}>
                    <img className={styles.eventImg} src={event.imageUrl} alt={event.title} />
                    <h1>{event.title}</h1>
                    <span className={styles.type}>Type: {event.type}</span> <br/>
                    <span className={styles.location}>Location: {event.location}</span>                    
                </div>

                <p className={styles.text}>
                    {event.summary}
                </p>

                <div className={styles.counterStyle}>
                    {guestCount} Guests Attending
                </div>
                <button
                    className={styles.buttonStyle}
                    style={{backgroundColor: isAttending ? '#da9c55ff' : '#dde0baff'}}
                    onClick={handleAttendanceClick}
                >
                    {buttonText}
                </button>
            </div>

                {/* <!-- Edit/Delete buttons ( Only for creator of this event )  -->
                <div className="buttons">
                    <a href="#" className="button">Edit</a>
                    <a href="#" className="button">Delete</a>
                </div>
            </div> */}

        </div>
    )
}