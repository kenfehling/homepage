import Editor from './Editor';
import Terminal from './Terminal';
import Map from './Map';
import AudioPlayer from './AudioPlayer';
import PDF from './PDF';
import Tools from './Tools';
import Dock from './Dock';
import styles from './App.scss';

export default () => (
    <div className={styles.container}>
        <PDF />
        <Editor />
        <Map />
        <Terminal />
        <AudioPlayer />
        <Tools />
        <Dock />
    </div>
);