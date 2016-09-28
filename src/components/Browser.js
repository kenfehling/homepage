import Window from './Window';
import styles from './Browser.scss';

export default () => (
    <Window name="Browser" usePadding={false}>
        <div className={styles.container}>
            <div>
                <input value="http://androidideas.org" />
            </div>
            <div className="frame-container">
                <iframe src="http://androidideas.org" style={{border: 0, flexGrow: 1}}></iframe>
            </div>
        </div>
    </Window>
);