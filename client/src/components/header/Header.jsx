import { useContext } from 'react';
import styles from './Header.module.css'
import { Link } from 'react-router-dom';
import AuthContext from '../../contexts/authContext';

export default function Navigation() {
    const {
        isAuthenticated,
        email
    } = useContext(AuthContext)
    return(
        <header className={styles.header}>
            <nav>
                <Link to="/">Social tree</Link>
                <Link to="/events">Explore the events</Link>
                {isAuthenticated ?
                (
                    <div id="user">
                        <Link to="/create">Add Event</Link>
                        <Link to="/logout">Logout</Link>
                        <span>{`| Welcome, ${email}!`}</span>
                    </div> 
                )
                :
                (   
                    <div id='guest'>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </div>                  
                )}
                
                

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