import styles from '../contacts/Contacts.module.css'

export default function Contacts() {
    return (
        <section className={styles.contactPage}>
            <div className={styles.contactContainer}>
                
                <h1 className={styles.headingOne}>Reach Out & Connect</h1>
                
                <p className={styles.introText}>
                    We're here to help you grow your social tree. Whether you have questions about hosting an event or need support finding the perfect gathering, we're ready to assist.
                </p>
                
                <div className={styles.contactDetails}>
                    
                    <div className={styles.detailCard}>
                        <h2 className={styles.headingTwo}>General Inquiries</h2>
                        <p className={styles.contactItem}>Email: <a href="mailto:info@socialtree.com" className={styles.contactLink}>info@socialtree.com</a></p>
                        <p className={styles.contactItem}>Phone: +359 12 34 567</p>
                    </div>

                    <div className={styles.detailCard}>
                        <h2 className={styles.headingTwo}>Partnerships & Media</h2>
                        <p className={styles.contactItem}>Email: <a href="mailto:media@socialtree.com" className={styles.contactLink}>media@socialtree.com</a></p>
                        <p className={styles.contactItem}>Follow Us: @SocialTreeEvents</p>
                    </div>

                    <div className={styles.detailCard}>
                        <h2 className={styles.headingTwo}>Our Address</h2>
                        <p className={styles.contactItem}>Office: 1 Vitosha bld.</p>
                        <p className={styles.contactItem}>Sofia, 1000</p>
                    </div>
                    
                </div>
            </div>
        </section>
    );
}