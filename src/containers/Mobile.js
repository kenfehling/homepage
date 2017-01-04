import { PropTypes } from 'react';
import styles from './Mobile.scss';
import _ from 'lodash';

const req = require.context("img/icons", true, /^\.\/.*$/);

const TopBar = () => (
    <div className="top-bar">
        <div className="network">
            <div>Network</div>
            <i className="fa fa-wifi" />
        </div>
        <div className="time">
            {new Date().toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'})}
        </div>
        <div className="battery">
            <i className="fa fa-battery-full "/>
            <div>79%</div>
        </div>
    </div>
);

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
                <DashboardItem icon='./dock/Tools.svg' name="Tools" />
                <DashboardItem icon='./dock/Projects.svg' name="Projects" />
            </div>
        </div>
        <div className="section">
            <div className="title">Music</div>
            <div className="items">
                <DashboardItem icon='./dock/Audio.svg' name="Listen" />
            </div>
        </div>
        <div className="section">
            <div className="title">Resume</div>
            <div className="items">
                <DashboardItem icon='./dock/Editor.svg' name="HTML" />
                <DashboardItem icon='./dock/PDF.svg' name="PDF" />
            </div>
        </div>
        <div className="section">
            <div className="title">Social</div>
            <div className="items">
                <DashboardItem icon='./social/GitHub.svg' name="GitHub" />
                <DashboardItem icon='./social/Twitter.svg' name="Twitter" />
                <DashboardItem icon='./social/LinkedIn.svg' name="LinkedIn" />
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
        {icon: './tools/React.svg', name: 'React'},
        {icon: './tools/JavaScript.svg', name: 'JavaScript'}
    ]} />
);

const Mobile = ({useTopBar}) => (
    <div className={styles.container}>
        {useTopBar ? <TopBar /> : ''}
        <div className="nav">
            <h1>Ken Fehling</h1>
        </div>
        <div className="content">
            <Dashboard />
        </div>
    </div>
);

Mobile.propTypes = {
    useTopBar: PropTypes.bool
};

export default Mobile;