import { useContext } from 'react';
import styles from './Header.module.css'
import { Link } from 'react-router-dom';
import AuthContext from '../../contexts/authContext';
import Path from '../../lib/paths';

export default function Header() {
    const {
        isAuthenticated,
        email
    } = useContext(AuthContext);

    return(

        <header className={styles.header}>
            <nav className={styles.navigation}>
                
                <div className={styles.navLeft}>
                    <Link to={Path.Home} className={styles.headerNavTags}>Social Tree</Link>
                </div>

                <div className={styles.navCenter}>
                    <Link to={Path.About} className={styles.headerNavTags}>About</Link>
                    <Link to={Path.AllEvents} className={styles.headerNavTags}>All events</Link>                                      
                    {isAuthenticated && (
                        <Link to={Path.CreateEvent} className={styles.headerNavTags}>Add Event</Link>
                    )}
                    <Link to={Path.Search} className={styles.headerNavTags}>Search</Link>
                    <Link to={Path.Contacts} className={styles.headerNavTags}>Contacts</Link>                  
                </div>

                <div className={styles.navRight}>
                    {isAuthenticated ?
                        (
                            <>
                                <Link to={Path.Logout} className={styles.headerNavTags}>Logout</Link>
                                <span className={styles.welcomeUser}>{`| Welcome, ${email}!`}</span>
                            </>
                        )
                        :
                        ( 
                            <>
                                <Link to="/login" className={styles.headerNavTags}>Login</Link>
                                <Link to="/register" className={styles.headerNavTags}>Register</Link>
                            </> 
                        )
                    }
                </div>
            </nav>
        </header>
    );
}
