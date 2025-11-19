import styles from './Events.module.css'
import EventItem from './single-event/EventItem';
import { useEffect, useState } from 'react';
import * as eventService from '../../../services/eventsServices'

export default function Events() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        eventService.getAll()
            .then(res => setEvents(res))
            .catch(err => console.log(`${err.message}: events`))
    }, []);

    return(
        <div className={styles.events}> 
            <h1 className={styles.eventsHeadingOne}>All Events</h1> 
        
            {events.length == 0 ?
                (<p className={styles.noEvents}>No events currently. Please come back later!</p>)
            : 
                (events.map(event => (<EventItem key={event._id} {...event}/>)))
            }   

        </div>
    );
}