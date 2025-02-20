import styles from './NotFoundPage.module.scss';

function NotFoundPage(){
    return (
        <div className={styles.container}>
            <div className={styles.title}>404</div>
            <div className={styles.description}>Page not found</div>
        </div>
    );
};

export default NotFoundPage; 