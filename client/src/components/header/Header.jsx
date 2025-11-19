import { useContext } from 'react';
import styles from './Header.module.css'
import { Link } from 'react-router-dom';
import AuthContext from '../../contexts/authContext';

export default function Navigation() {
    const {
        isAuthenticated,
        email
    } = useContext(AuthContext);

    return(
        <>

        <header className={styles.header}>
            <nav className={styles.navigation}>
                <Link to="/" className={styles.headerNavTags}>Social tree</Link>
                <Link to="/events" className={styles.headerNavTags}>All events</Link>
                {isAuthenticated ?
                (
                    <div id='user'>
                        <Link to="/create" className={styles.headerNavTags}>Add Event</Link>
                        <Link to="/logout" className={styles.headerNavTags}>Logout</Link>
                        <span className={styles.welcomeUser}>{`| Welcome, ${email}!`}</span>
                    </div> 
                )
                :
                (   
                    <div id='guest'>
                        <Link to="/login" className={styles.headerNavTags}>Login</Link>
                        <Link to="/register" className={styles.headerNavTags}>Register</Link>
                    </div>                  
                )}

            </nav>
        </header>
        </>
    );
}