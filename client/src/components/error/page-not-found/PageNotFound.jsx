import { Link } from 'react-router-dom';
import styles from '../page-not-found/PageNotFound.module.css';
import Path from '../../../lib/paths';


export default function PageNotFound() {
    return (
        <section className={styles.container}>
            <h1 className={styles.PageNotFound}>Page Not Found!</h1>
            <p className={styles.info}>Please go back to 
                <Link to={Path.Home} className={styles.homeBtn}> home </Link> 
            page!</p>       
        </section>
        
    )
}