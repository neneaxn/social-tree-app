import { useEffect, useState } from 'react';
import styles from './Events.module.css';
import * as eventService from '../../../services/eventsServices';
import EventItem from './single-event/EventItem';
import Loading from '../../loading/Loading';

export default function Events() {
    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);

        eventService.getAll()
            .then(res => setEvents(res))
            .catch(err => console.log(`${err.message}: events`))
            .finally(() => setIsLoading(false))
    }, []);

    if (isLoading) {
        return <Loading/>
    }

    return(
        <div className={styles.events}> 
            <h1 className={styles.eventsHeadingOne}>All Events</h1> 
        
            <div className={styles.eventsGridWrapper}> 

                
                {events.length == 0 ?
                    (<p className={styles.noEvents}>No events currently. Please come back later!</p>)
                : 
                    (events.map(event => (<EventItem key={event._id} {...event}/>)))
                } 
        
            </div>
        </div>
    );
}