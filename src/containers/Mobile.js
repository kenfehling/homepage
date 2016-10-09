import styles from './Mobile.scss';
import _ from 'lodash';

const req = require.context("img", true, /^\.\/.*$/);

const DashboardItem = ({icon, name}) => (
    <div className="item">
        <img className="icon" src={req(icon)} />
        <div className="name">{name}</div>
    </div>
);

const Dashboard = () => (
    <div className="dashboard">
        <div className="section">
            <div className="title">Programming</div>
            <div className="items">
                <DashboardItem icon='./icons/dock/Tools.svg' name="Tools" />
                <DashboardItem icon='./icons/dock/Map.svg' name="Projects" />
            </div>
        </div>
        <div className="section">
            <div className="title">Music</div>
            <div className="items">
                <DashboardItem icon='./icons/dock/AudioPlayer.svg' name="Listen" />
            </div>
        </div>
        <div className="section">
            <div className="title">Resume</div>
            <div className="items">
                <DashboardItem icon='./icons/dock/Editor.svg' name="HTML" />
                <DashboardItem icon='./icons/dock/PDF.svg' name="PDF" />
            </div>
        </div>
    </div>
);

const ListItem = ({icon, name}) => (
   <div className="item">
       <img className="icon" src={req(icon)} />
       <div className="name">{name}</div>
   </div>
);

const List = ({items}) => (
    <div className="list">
        {_.map(items, item => <ListItem key={item.name} {...item} />)}
    </div>
);

const Tools = () => (
    <List items={[
        {icon: './icons/tools/React.svg', name: 'React'},
        {icon: './icons/tools/JavaScript.svg', name: 'JavaScript'}
    ]} />
);

export default () => (
    <div className={styles.container}>
        <div className="nav">
            <h1>Ken Fehling</h1>
        </div>
        <div className="content">
            <Dashboard />
        </div>
    </div>
);