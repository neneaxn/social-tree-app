import { Link } from "react-router-dom";
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
            
                        <h1 className={styles.registerHeadingOne}>Register</h1>
                
                        <label className={styles.label} htmlFor="email">Email:</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email"
                            className={styles.inputEmail}
                            onChange={onChange}
                            value={values[RegisterKeys.Email]}
                        />
                
                        <label className={styles.label} htmlFor="password">Password:</label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            className={styles.inputPassword}
                            onChange={onChange}
                            value={values[RegisterKeys.Password]}
                        />

                        <label className={styles.label} htmlFor="confirm-password">Confirm Password:</label>
                        <input 
                            type="password" 
                            name="confirm-password" 
                            id="confirm-password"
                            className={styles.inputPassword}
                            onChange={onChange}
                            value={values[RegisterKeys.ConfirmPassword]}
                        />

                        <input className={styles.btnSubmit} type="submit" value="Register"/>

                        <div>
                            <p className={styles.clickHereP}>If you already have an account click 
                                <Link to='/login' className={styles.clickHereA}> here</Link> 
                            </p>
                        </div>
                    </div>
                </form>
            </section>
        </>
    );
}