import {connectAudioPlayer, TitleMarquee, TimeSlider} from './audio/ReactAudioPlayer';
import styles from './AudioPlayer.scss';
import Window from './Window';

const AudioPlayer = ({play, stop, next, prev, seek, currentTrack:{number, artist, title, durationSeconds}, isPlaying,
    secondsElapsed, timeElapsed}) => (
    <Window name="AudioPlayer" bgColor="#003" fgColor="#36F" usePadding={false}>
        <div className={styles.container}>
            <div className="controls">
                <i className="fa fa-step-backward" onClick={prev} />
                <i className={`fa fa-${isPlaying ? 'pause' : 'play'}`} onClick={play} />
                <i className="fa fa-stop" onClick={stop} />
                <i className="fa fa-step-forward" onClick={next} />
            </div>
            <div className="current-track">
                <TitleMarquee text={`${number}. ${artist} - ${title}`} />
            </div>
            <div className="time-slider">
                <TimeSlider />
            </div>
            <div className="time">{timeElapsed}</div>
        </div>
    </Window>
);

const tracks = [
    { artist: 'Doobie Brothers', title: 'What a Fool Believes', file: '/public/song1.mp3' },
    { artist: 'Doobie Brothers', title: 'Taking it to the Streets', file: '/public/song2.mp3' },
];

export default connectAudioPlayer(AudioPlayer, tracks);