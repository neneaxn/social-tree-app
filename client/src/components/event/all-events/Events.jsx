import styles from './Events.module.css'

export default function Events() {
    return(
        <section className={styles.eventsPage}>
        <h1>All Events</h1>            
        
        {/* <!-- Display paragraph: If there is no games  --> */}
        {/* {games.length == 0 && (
            <h3 className="no-articles">No articles yet</h3>
        )} */}
        
        {/* <!-- Display div: with information about every game (if any) --> */}
        {/* {games.map(game => (
            <GameItem key={game._id} {...game}/>
        ))} */}

    </section>
    );
}