import styles from './App.scss';

export default ({children}) => (
    <div className={styles.container}>
        {children}
    </div>
);