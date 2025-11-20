import styles from '../about/AboutUs.module.css'

export default function About() {
    return (
        <section className={styles.aboutPage}>
            <div className={styles.aboutContainer}>
                
                <div className={styles.aboutContent}>
                    <h1 className={styles.headingOne}>Our Mission: Nurturing Connections</h1>
                    
                    <p className={styles.missionText}>
                        We believe that truly meaningful connections—whether professional or personal—are built through shared experiences. Social Tree was founded on the principle that finding and hosting local events should be as elegant and effortless as the connections you make there.
                    </p>
                    
                    <h2 className={styles.headingTwo}>The Social Tree Philosophy</h2>
                    
                    <ul className={styles.philosophyList}>
                        <li><strong>Growth:</strong> Empowering you to expand your network, knowledge, and social circles.</li>
                        <li><strong>Curiosity: </strong>Fostering a community dedicated to exploring new passions and local activities.</li>
                        <li><strong>Elegance: </strong>Providing a platform that is intuitive, beautiful, and a pleasure to use.</li>
                    </ul>
                    
                    <p className={styles.closingText}>
                        Join us and start planting the roots of your next great connection today.
                    </p>
                </div>
                
            </div>
        </section>
    );
};