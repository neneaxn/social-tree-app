import { useState, useEffect } from 'react';
import * as eventService from '../../services/eventsServices'
import styles from './Home.module.css'
import HomeEvents from './home-events/HomeEvent';
import Values from './values/Values';
import UserGuide from './user-guide/UserGuide';


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
                <p className={styles.description}>Discover and create meaningful gatherings, from professional workshops to passionate hobby groups. 
    Your next great connection starts here. </p>
            </div>

            <Values/>

            <div className={styles.latestEvents}>
                <h2 className={styles.headingTwo}>Our events</h2>

                {events.length == 0 ? 
                    (<p className={styles.noEvents}>No upcoming events!</p>) 
                : 
                <div className={events.length > 3 ? styles.scrollingSlider : styles.staticRow}> 
                    <div className={styles.sliderContent}> 
                        {events.map(event => <HomeEvents key={event._id} {...event}/>)}
                    </div>
                </div>
                }               
            </div>

            <UserGuide/>
            
        </section>
    );
}



