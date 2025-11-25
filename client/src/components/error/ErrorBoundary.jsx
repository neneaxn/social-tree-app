import { Component } from "react";
import { Link} from "react-router-dom";
import styles from '../error/ErrorBoundary.module.css'
import Path from "../../lib/paths";

export default class ErrorBoundary extends Component {
    constructor() {
        super()

        this.state = {
            hasError: false,
        }
    }
    
    static getDerivedStateFromError(err) {
        
        return {
            hasError: true,
        }
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, ' ', errorInfo);      
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className={styles.errorContainer}>
                    <h1 className={styles.errorHeadingOne}>Error!</h1>
                    <Link to={Path.Home} className={styles.link}>Please click here and refresh your browser!</Link>
                </div>       
        )

        }
        return this.props.children;
    }
}