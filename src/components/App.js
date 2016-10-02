import Window from '../containers/Window';
import IFrameWindow from '../containers/IFrameWindow';
import Editor from './Editor';
import Terminal from './Terminal';
import AudioPlayer from './AudioPlayer';
import Tools from './Tools';
import Dock from './Dock';
import styles from './App.scss';

const menuItems = [
    { name: 'File' }
];

export default () => (
    <div className={styles.container}>
        <IFrameWindow name="PDF" src="/public/Ken_Fehling_resume.pdf" />
        <Window name="Editor" menuItems={menuItems} bgColor="#FFF" fgColor="#000"><Editor /></Window>
        <IFrameWindow name="Map" src="http://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d162592.24519068224!2d-73.99662330680499!3d40.70626928598335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1474841748950" />
        <Window name="Terminal" menuItems={menuItems} bgColor="#000" fgColor="#3F3"><Terminal /></Window>
        <Window name="AudioPlayer" bgColor="#003" fgColor="#36F" usePadding={false}><AudioPlayer /></Window>
        <Window name="Tools" bgColor="#FFF" fgColor="#000" usePadding={false}><Tools /></Window>
        <Dock />
    </div>
);