import styles from './Dock.scss';
import DockIcon from './DockIcon';

export default () => (
    <div className={styles.container}>
        <div className="inner-container">
            <div className="back-container"></div>
            <div className="front-container">
                <DockIcon name="Map" />
                <DockIcon name="AudioPlayer" />
                <DockIcon name="Terminal" />
                <DockIcon name="Editor" />
                <DockIcon name="PDF" />
            </div>
        </div>
    </div>
);