import styles from './Dock.scss';
import DockIcon from './DockIcon';

export default () => (
    <div className={styles.container}>
        <div className="inner-container">
            <div className="back-container"></div>
            <div className="front-container">
                <DockIcon name="Map" />
                <DockIcon name="Terminal" />
                <DockIcon name="Tools" />
                <DockIcon name="Editor" />
                <DockIcon name="RSS" />
                <DockIcon name="AudioPlayer" />
                <DockIcon name="PDF" />
                <DockIcon name="Mobile" />
            </div>
        </div>
    </div>
);