import Desktop from './Desktop';
import styles from './App.scss';

export default props => (
    <div className={styles.container}>
        <Desktop {...props} />
    </div>
);