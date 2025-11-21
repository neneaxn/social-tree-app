import styles from '../loading/Loading.module.css';

export default function Loading() {
    return (
        <div className={styles.loading}>
            <p className={styles.HeadingOne}>Loading ...</p>
        </div>
    );     
}