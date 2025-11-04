import { Link } from "react-router-dom";
import Login from "../login/Login";
import styles from './Register.module.css';
import { useContext } from "react";
import AuthContext from "../../contexts/authContext";
import useForm from "../../hooks/useForm";

const RegisterKeys = {
    Email: 'email',
    Password: 'password',
    ConfirmPassword: 'confirm-password',
}

export default function Register() {
    const { registerSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
        [RegisterKeys.Email] : '',
        [RegisterKeys.Password] : '',
        [RegisterKeys.ConfirmPassword] : '',
    });
    return(
        <>
            <section className={styles.register}>
                <form id="add" onSubmit={onSubmit}>
                    <div className={styles.container}>
            
                        <h1>Register</h1>
                
                        <label htmlFor="email">Email:</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email"
                            onChange={onChange}
                            value={values[RegisterKeys.Email]}
                        />
                
                        <label htmlFor="password">Password:</label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            onChange={onChange}
                            value={values[RegisterKeys.Password]}
                        />

                        <label style={styles.label} htmlFor="confirm-password">Confirm Password:</label>
                        <input 
                            type="password" 
                            name="confirm-password" 
                            id="confirm-password" 
                            onChange={onChange}
                            value={values[RegisterKeys.ConfirmPassword]}
                        />

                        <input className={styles.btnSubmit} type="submit" value="Register"/>

                        <div className={styles.clickHere}>
                            <p>If you already have an account click <Link to='/login'>here</Link></p>
                        </div>
                    </div>
                </form>
            </section>
        </>
    );
}