import styles from './Login.module.css'

export default function Login() {
    return(
        <section id="login-page" className="auth">
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