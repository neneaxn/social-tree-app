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
            <h1>Welcome to our community!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, recusandae et. </p>
        </div>
        {/* <img src="/public/images/background.jpg" alt="event"/> */}

        <div className={styles.latestEvents}>
            <div id="home-page">
                <h1>Our events</h1>

                {/* <!-- Display div: with information about every game (if any) --> */}
                {events.map(event => <HomeEvents key={event._id} {...event}/>)}
                {/* <!-- Display paragraph: If there is no games  --> */}
                {!events.length && <p className="no-articles">No upcoming events!</p>}
            </div>            

            {/* <!-- Display div: with information about every game (if any) --> */}
            {/* {latestGames.map(game => <LatestGame {...game}/>)} */}

            {/* <!-- Display paragraph: If there is no games  --> */}
            {/* {!latestGames.length && <p className="no-articles">No games yet</p>} */}
            
        </div>
    </section>
    );
}

