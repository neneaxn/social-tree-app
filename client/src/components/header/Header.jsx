import styles from './Header.module.css'

export default function Navigation() {
    return(
        <header className={styles.header}>
        <h1 className={styles.homeBtn}>Home</h1>
        <nav>
            <a href="/login">Login</a>
            <a href="/logout">Logout</a>
            <a href="/register">Register</a>

            {/* <Link to="/games">All games</Link>

            { isAuthenticated 

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