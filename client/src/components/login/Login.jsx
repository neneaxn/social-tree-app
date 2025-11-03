import { Link } from "react-router-dom";
import useForm from "../../hooks/useForm";
import styles from './Login.module.css'

const LoginFormKeys = {
    Email: 'email',
    Password: 'password',
}

export default function Login({
    loginSubmitHandler
}) {
    const {values, onChange, onSubmit} = useForm(loginSubmitHandler, {
        [LoginFormKeys.Email]: '',
        [LoginFormKeys.Password]: '',
    });

    return(
        <section id="login-page" className="auth">
            <section className={styles.login}>
                <form id="add" onSubmit={onSubmit}>
                    <div className={styles.container}>
                    
                        <h1>Login</h1>
                        
                        <label htmlFor="email">Email:</label>
                        <input 
                            type="email" 
                            id="email" 
                            name={LoginFormKeys.Email} 
                            onChange={onChange}
                            value={values[LoginFormKeys.Email]}
                        />
                        
                        <label htmlFor="password">Password:</label>
                        <input 
                            type="password" 
                            name={LoginFormKeys.Password} 
                            id="password"                                                              
                            value={values[LoginFormKeys.Password]}
                            onChange={onChange}
                        />      
        
                        <input className={styles.btnSubmit} type="submit" value="Login"/>
        
                        <div className={styles.clickHere}>
                            <p>If you don't have an account click <Link to='/register'>here</Link></p>
                        </div>
                    </div>
                </form>
            </section>
        {/* <form id="login" onSubmit={onSubmit}>

            <div className="container">
                <div className="brand-logo"></div>
                <h1>Login</h1>
                <label htmlFor="email">Email:</label>
                <input 
                    type="email"
                    id="email" 
                    name={loginFormKeys.EMAIL} 
                    placeholder="Sokka@gmail.com" 
                    onChange={onChange}
                    value={values[loginFormKeys.EMAIL]}
                />

                <label htmlFor="login-pass">Password:</label>
                <input 
                    type="password"
                    id="login-password"
                    name={loginFormKeys.PASSWORD} 
                    onChange={onChange}
                    value={values[loginFormKeys.PASSWORD]}
                />
                <input type="submit" className="btn submit" value="Login"/>
                <p className="field">
                    <span>If you don't have profile click <a href="#">here</a></span>
                </p>
            </div>
        </form> */}
    </section>
    );
}