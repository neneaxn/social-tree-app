import { useState, useEffect } from 'react';
import * as eventService from '../../services/eventsServices'
import styles from './Home.module.css'
import HomeEvents from './home-events/HomeEvent';


export default function Home() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        eventService.getAll()
            .then(result => setEvents(result));
    }, []);    

    return(
        <section className={styles.homePage}>

            <div className={styles.welcome}>
                <h1 className={styles.headingOne}>Welcome to our community!</h1>
                <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, recusandae et. </p>
            </div>

            <div className={styles.latestEvents}>
                <h2 className={styles.headingTwo}>Our events</h2>

                {events.length == 0 ? 
                    (<p className={styles.noEvents}>No upcoming events!</p>) 
                : 
                    (events.map(event => <HomeEvents key={event._id} {...event}/>))
                }               
            </div>
        </section>
    );
}



