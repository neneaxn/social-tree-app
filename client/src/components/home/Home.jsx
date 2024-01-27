import styles from './Home.module.css'

export default function Home() {
    return(
        <section className={styles.homePage}>

        <div className={styles.welcome}>
            <h1>Welcome to our community!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, recusandae et. </p>
        </div>
        {/* <img src="/public/images/background.jpg" alt="event"/> */}

        <div className={styles.latestEvents}>
            <h1>Latest Events</h1>
            <p>list of latest events</p>

            {/* <!-- Display div: with information about every game (if any) --> */}
            {/* {latestGames.map(game => <LatestGame {...game}/>)} */}

            {/* <!-- Display paragraph: If there is no games  --> */}
            {/* {!latestGames.length && <p className="no-articles">No games yet</p>} */}
            
        </div>
    </section>
    );
}

