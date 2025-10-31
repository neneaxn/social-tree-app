import { Link } from "react-router-dom";
import Login from "../login/Login";
import styles from './Register.module.css';

export default function Register() {
    return(
        <>
            <section className={styles.register}>
                <form id="add">
                    <div className={styles.container}>
            
                        <h1>Register</h1>
                
                        <label htmlFor="email">Email:</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            placeholder="john@outlook.com" 
                        />
                
                        <label htmlFor="register-password">Password:</label>
                        <input 
                            type="password" 
                            name="register-password" 
                            id="register-password" 
                        />

                        <label htmlFor="confirm-password">Confirm Password:</label>
                        <input 
                            type="password" 
                            name="confirm-password" 
                            id="confirm-password" 
                        />

                        <input className="btnSubmit" type="submit" value="Register"/>

                        {/* <div>
                            <p>If you already have an account click <Link to={<Login/>}>here</Link></p>
                        </div> */}
                    </div>
                </form>
            </section>
        </>
    );
}