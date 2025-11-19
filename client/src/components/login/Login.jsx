import { Link } from "react-router-dom";
import useForm from "../../hooks/useForm";
import styles from './Login.module.css'
import { useContext } from "react";
import AuthContext from "../../contexts/authContext";

const LoginFormKeys = {
    Email: 'email',
    Password: 'password',
}

export default function Login() {
    
    const { loginSubmitHandler } = useContext(AuthContext);
    const {values, onChange, onSubmit} = useForm(loginSubmitHandler, {
        [LoginFormKeys.Email]: '',
        [LoginFormKeys.Password]: '',
    });

    return(
        <section id="login-page" className={styles.login}>
            <form id="add" onSubmit={onSubmit}>
                <div className={styles.container}>
                    
                    <h1 className={styles.loginHeadingOne}>Login</h1>
                        
                    <label className={styles.label} htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        className={styles.inputEmail}
                        name={LoginFormKeys.Email} 
                        onChange={onChange}
                        value={values[LoginFormKeys.Email]}
                    />
                        
                    <label className={styles.label} htmlFor="password">Password:</label>
                    <input 
                        type="password" 
                        className={styles.inputPassword}
                        name={LoginFormKeys.Password} 
                        id="password"                                                              
                        value={values[LoginFormKeys.Password]}
                        onChange={onChange}
                    />      
        
                    <input className={styles.btnSubmit} type="submit" value="Login"/>
        
                    <div>
                        <p className={styles.clickHereP}>If you don't have an account click
                            <Link to='/register' className={styles.clickHereA}> here</Link>
                        </p>
                    </div>
                </div>
            </form>
        </section>
    );
}