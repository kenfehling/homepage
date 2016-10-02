import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import styles from './Tools.scss';
import _ from 'lodash';

const ROWS = 2;
const starIcon = require('img/icons/star.svg');
const halfStarIcon = require('img/icons/half-star.svg');

const categories = [
    'All',
    'Languages',
    'Libraries',
    'Platforms',
    'Web',
    'Mobile',
    'Databases',
    'Software'
];

const tools = [
    { name: 'JavaScript', stars: 5, categories: ['Languages', 'Web'] },
    { name: 'React', stars: 4.5, categories: ['Libraries', 'Web'] },
    { name: 'Redux', stars: 4.5, categories: ['Libraries', 'Web'] },
    { name: 'HTML', stars: 4.5, categories: ['Languages', 'Platforms', 'Web'] },
    { name: 'Webpack', stars: 4, categories: ['Libraries', 'Web'] },
    { name: 'Node', stars: 4, categories: ['Platforms', 'Web'] },
    { name: 'Python', stars: 4, categories: ['Languages'] },
    { name: 'CSS', stars: 4, categories: ['Languages', 'Web'] },
    { name: 'Android', stars: 4, categories: ['Platforms', 'Mobile'] },
    { name: 'MongoDB', stars: 3.5, categories: ['Databases'] },
    { name: 'Java', stars: 3.5, categories: ['Languages'] },
    { name: 'Ruby', stars: 3, categories: ['Languages'] },
    { name: 'iOS', stars: 3, categories: ['Platforms', 'Mobile'] },
    { name: 'Swift', stars: 2.5, categories: ['Languages', 'Mobile'] },
    { name: 'Illustrator', stars: 2, categories: ['Software'] }
];

const getIcon = name => <img className="icon" src={require('img/icons/tools/' + name.replace(' ', '_') + '.svg')} />;

export default class Tools extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTool: null,
            lastScrollLeft: 0,
            category: 'All'
        }
    }

    componentDidUpdate() {
        if (this.scrollArea) {
            this.scrollArea.scrollLeft = this.state.lastScrollLeft;
        }
    }

    renderTool({name, stars}) {
        return <div className="tool" key={name} onClick={() => this.setState({selectedTool: name})}>
            {getIcon(name)}
            <div className="name">{name}</div>
            <div className="stars">
                {_.map(_.range(Math.floor(stars)), i => <img key={i} src={starIcon} />)}
                {stars % 1 === 0.5 ? <img src={halfStarIcon} /> : ''}
            </div>
        </div>;
    }

    renderTools() {
        const {category} = this.state;
        const filteredTools = category === 'All' ? tools : _.filter(tools, t => _.includes(t.categories, category));
        const n = _.size(filteredTools);
        return <div className="tools" key="tools">
            <div className="scroll-area" ref={(ref) => this.scrollArea = ref}
                 onScroll={e => this.setState({lastScrollLeft: e.target.scrollLeft})}>
                {_.map(_.range(Math.ceil(n / ROWS)), col =>
                    <div className="col" key={col}>
                        {_.map(_.range(ROWS), row =>
                            n >= col * ROWS + row + 1 ? this.renderTool(filteredTools[col * ROWS + row]) : '')}
                    </div>
                )}
            </div>
        </div>;
    }

    renderDetails() {
        const {selectedTool} = this.state;
        return <div className="details" key="details">
            <div className="top">
                <div className="icon">{getIcon(selectedTool)}</div>
                <div className="title">{selectedTool}</div>
            </div>
            <div className="body">
                I made a pretty rational choice to use this tool.
            </div>
            <div onClick={() => this.setState({selectedTool: null})}>Back</div>
        </div>;
    }

    filter(category) {
        this.setState({category, selectedTool: null, lastScrollLeft: 0});
    }

    render() {
        return <div className={styles.container}>
            <div className="header">
                <div className="title">Skills</div>
                <div className="categories">
                    {_.map(categories, c =>
                        <div className={c === this.state.category ? 'current' : ''}
                             key={c} onClick={() => this.filter(c)}>{c}</div>)}
                </div>
            </div>
            <div className="transition-wrapper">
                <ReactCSSTransitionGroup
                    component="div"
                    className="transition-group"
                    transitionName="tool"
                    transitionEnter={true}
                    transitionLeave={true}
                    transitionEnterTimeout={0}
                    transitionLeaveTimeout={0}
                >
                    {this.state.selectedTool ? this.renderDetails() : this.renderTools()}
                </ReactCSSTransitionGroup>
            </div>
        </div>;
    }
}