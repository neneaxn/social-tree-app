import Path from '../../../lib/paths'
import {Link} from 'react-router-dom'
import styles from '../event-not-found/EventNotFound.module.css'

export default function EventNotFound() {
    return (
        <section className={styles.container}>
            <h1 className={styles.headingOne}>Event Not Found!</h1>
            <p className={styles.info}>Please go back to 
                <Link to={Path.AllEvents} className={styles.eventBtn}> all events. </Link></p>  
        </section>
        
    )
}