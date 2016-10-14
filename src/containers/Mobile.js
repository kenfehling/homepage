import { PropTypes } from 'react';
import styles from './Mobile.scss';
import _ from 'lodash';
import { connectNavigator, HistoryLink, ContentArea } from './history/src/components/HistoryComponent';
import {connectComponent} from "./history/src/components/HistoryComponent";

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
            <div>100%</div>
        </div>
    </div>
);

const Navigator = connectNavigator(({back, title}) => (
    <div className="nav">
        <h1>{title}</h1>
    </div>
));

const DashboardItem = ({icon, name, link}) => (
    <HistoryLink to={link} name={name} className="item">
        <img className="icon" src={req(icon)} />
        <div className="name">{name}</div>
    </HistoryLink>
);

const Dashboard = () => (
    <div key="dashboard" className="dashboard">
        <div className="section">
            <div className="title">Programming</div>
            <div className="items">
                <DashboardItem icon='./dock/Tools.svg' name="Tools" link='/mobile/tools' />
                <DashboardItem icon='./dock/Projects.svg' name="Projects" link='/mobile/projects' />
            </div>
        </div>
        <div className="section">
            <div className="title">Music</div>
            <div className="items">
                <DashboardItem icon='./dock/AudioPlayer.svg' name="Listen" link='/mobile/music' />
            </div>
        </div>
        <div className="section">
            <div className="title">Resume</div>
            <div className="items">
                <DashboardItem icon='./dock/Editor.svg' name="HTML" link='/mobile/editor' />
                <DashboardItem icon='./dock/PDF.svg' name="PDF" link='/mobile/pdf' />
            </div>
        </div>
        <div className="section">
            <div className="title">Social</div>
            <div className="items">
                <DashboardItem icon='./social/GitHub.svg' name="GitHub" link='http://github.com' />
                <DashboardItem icon='./social/Twitter.svg' name="Twitter" link='http://twitter.com' />
                <DashboardItem icon='./social/LinkedIn.svg' name="LinkedIn" link='http://linkedin.com' />
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
    <List key="mobile-tools" items={[
        {icon: './tools/React.svg', name: 'React'},
        {icon: './tools/JavaScript.svg', name: 'JavaScript'}
    ]} />
);

const Mobile = ({useTopBar, category}) => (
    <div className={styles.container}>
        {useTopBar ? <TopBar /> : ''}
        <Navigator />
        <ContentArea className="content">
            {category ? <Tools /> : <Dashboard />}
        </ContentArea>
    </div>
);

Mobile.propTypes = {
    useTopBar: PropTypes.bool,
    category: PropTypes.string
};

export default connectComponent(Mobile);