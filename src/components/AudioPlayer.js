import styles from './AudioPlayer.scss';
import Window from './Window';

export default () => (
    <Window name="AudioPlayer" bgColor="#003" fgColor="#36F" usePadding={false}>
        <div className={styles.container}>
            <i className="fa fa-step-backward" />
            <i className="fa fa-play" />
            <i className="fa fa-pause" />
            <i className="fa fa-step-forward" />
        </div>
    </Window>
);