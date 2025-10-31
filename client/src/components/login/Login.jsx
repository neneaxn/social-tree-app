import Register from '../register/Register';
import styles from './Login.module.css'

export default function Login() {
    return(
        <section id="login-page" className="auth">
            <section className={styles.login}>
                <form id="add">
                    <div className={styles.container}>
                    
                        <h1>Login</h1>
                        
                        <label htmlFor="email">Email:</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                        />
                        
                        <label htmlFor="register-password">Password:</label>
                            <input 
                                type="password" 
                                name="register-password" 
                                id="register-password" 
                        />
        
        
                        <input className={styles.btnSubmit} type="submit" value="Login"/>
        
                        {/* <div>
                            <p>If you don't have an account click <Link to={<Register/>}>here</Link></p>
                        </div> */}
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