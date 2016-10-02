import { Component } from 'react';
import Animate from 'rc-animate';
import Window from './Window';
import styles from './Tools.scss';
import './SlideTransition.css';
import _ from 'lodash';

const ROWS = 2;
const starIcon = require('img/icons/star.svg');
const halfStarIcon = require('img/icons/half-star.svg');

const tools = [
    { name: 'JavaScript', stars: 5 },
    { name: 'React', stars: 4.5 },
    { name: 'Redux', stars: 4.5 },
    { name: 'HTML', stars: 4.5 },
    { name: 'Webpack', stars: 4 },
    { name: 'Node', stars: 4 },
    { name: 'Python', stars: 4 },
    { name: 'CSS', stars: 4 },
    { name: 'Android', stars: 4 },
    { name: 'MongoDB', stars: 3.5 },
    { name: 'Java', stars: 3.5 },
    { name: 'Ruby', stars: 3 },
    { name: 'iOS', stars: 3 },
    { name: 'Swift', stars: 2.5 },
    { name: 'Illustrator', stars: 2 }
];

export default class Tools extends Component {
    constructor(props) {
        super(props);
        this.state = {
            insideTool: false
        }
    }
    renderTool({name, stars}) {
        return <div className="tool" key={name} onClick={() => this.setState({insideTool: true})}>
            <img className="icon" src={require('img/icons/tools/' + name.replace(' ', '_') + '.svg')} />
            <div className="name">{name}</div>
            <div className="stars">
                {_.map(_.range(Math.floor(stars)), i => <img key={i} src={starIcon} />)}
                {stars % 1 === 0.5 ? <img src={halfStarIcon} /> : ''}
            </div>
        </div>;
    }
    renderTools() {
        return <div className="tools">
            {_.map(_.range(Math.ceil(_.size(tools) / ROWS)), col =>
                <div className="col" key={col}>
                    {_.map(_.range(ROWS), row =>
                        _.size(tools) >= col * ROWS + row + 1 ? this.renderTool(tools[col * ROWS + row]) : ''
                    )}
                </div>
            )}
        </div>;
    }
    renderDetails() {
        return <div className="details">
            <div>Details</div>
            <div onClick={() => this.setState({insideTool: false})}>Back</div>
        </div>;
    }
    render() {
        return <Window name="Tools" bgColor="#FFF" fgColor="#000" usePadding={false}>
            <div className={styles.container}>
                <div className="header">
                    <div className="title">Skills</div>
                    <div className="menu">
                        <div>All</div>
                        <div>Languages</div>
                        <div>Libraries</div>
                        <div>Platforms</div>
                        <div>Software</div>
                    </div>
                </div>
                <Animate
                    transitionLeave={false}
                    transitionName="fade"
                >
                    {this.state.insideTool ? this.renderDetails() : this.renderTools()}
                </Animate>
            </div>
        </Window>;
    }
}

