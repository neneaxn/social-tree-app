import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import styles from '../footer/Footer.module.css';
import Path from '../../lib/paths';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return(
        <footer className={styles.footer}>
            <div className={styles.footerContent}>

                <div className={styles.footerSection}>
                    <p className={styles.footerLogo}>Social Tree</p>
                    <p className={styles.copyright}>
                        &copy; {currentYear} Social Tree. All rights reserved.
                    </p>
                </div>

                <div className={styles.footerSection}>
                    <h4 className={styles.footerHeading}>Quick Links</h4>
                    <Link to={Path.AllEvents} className={styles.footerLink}>All Events</Link>
                    <Link to="/about" className={styles.footerLink}>About Us</Link>
                    <Link to="/contact" className={styles.footerLink}>Contact</Link>
                </div>

                <div className={styles.footerSection}>
                    <h4 className={styles.footerHeading}>Connect</h4>
                    <div className={styles.socialIcons}>
                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className={styles.socialIcon}>
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className={styles.socialIcon}>
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="https://x.com/" target="_blank" rel="noreferrer" className={styles.socialIcon}>
                            <FontAwesomeIcon icon={faXTwitter} />
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
}