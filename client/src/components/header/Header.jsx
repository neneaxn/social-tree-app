import styles from './Header.module.css'
import { Link } from 'react-router-dom';

export default function Navigation() {
    return(
        <header className={styles.header}>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/events">Events</Link>
            <Link to="/create">Add Event</Link>
            <Link to="/login">Login</Link>
            <Link to="/logout">Logout</Link>
            <Link to="/register">Register</Link>

            {/* { isAuthenticated 

            ? (<div id="user">
                    <Link to="/create">Create Game</Link>
                    <Link to="/logout">Logout</Link>
                    <span> | Welcome, {username}</span>
               </div>) 

            : (<div id="guest">
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
               </div>)} */}

        </nav>
    </header>
    );
}