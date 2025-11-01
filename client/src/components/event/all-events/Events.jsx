import styles from './Events.module.css'
import EventItem from './single-event/EventItem';
import { useEffect } from 'react';
import * as eventService from '../../../services/eventsServices'

export default function Events() {
    useEffect(() => {

    }, []);

    return(
        <div className={styles.events}> 
            <h1>All Events</h1>
            {<EventItem/>}  
        
            {/* <!-- Display paragraph: If there is no games  --> */}
            {/* {games.length == 0 && (
                <h3 className="no-articles">No articles yet</h3>
            )} */}
            
            {/* <!-- Display div: with information about every game (if any) --> */}
            {/* {games.map(game => (
                <GameItem key={game._id} {...game}/>
            ))} */}

        </div>
    );
}