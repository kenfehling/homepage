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

const tools = [{
    name: 'JavaScript',
    stars: 5,
    categories: ['Languages', 'Web'],
    description: <div>
        My main programming language, I'm actually quite fond of JavaScript, especially now with some of the features
        in ES6/ES2015.
    </div>
}, {
    name: 'React',
    stars: 4.5,
    categories: ['Libraries', 'Web'],
    description: <div>
        By far my favorite web "framework", React has drastically changed the way I look at web app development.
        This site is written in React, along with Redux.
    </div>
}, {
    name: 'Redux',
    stars: 4.5,
    categories: ['Libraries', 'Web'],
    description: <div>
        Redux is the leader!
    </div>
}, {
    name: 'HTML',
    stars: 4.5,
    categories: ['Languages', 'Platforms', 'Web'],
    description: <div>
        Description
    </div>
}, {
    name: 'Webpack',
    stars: 4,
    categories: ['Libraries', 'Web'],
    description: <div>
        Description
    </div>
}, {
    name: 'Node',
    stars: 4,
    categories: ['Platforms', 'Web'],
    description: <div>
        Description
    </div>
}, { name: 'Python',
    stars: 4,
    categories: ['Languages'],
    description: <div>
        Description
    </div>
}, {
    name: 'CSS',
    stars: 4,
    categories: ['Languages', 'Web'],
    description: <div>
        Description
    </div>
}, {
    name: 'Android',
    stars: 4,
    categories: ['Platforms', 'Mobile'],
    description: <div>
        Description
    </div>
}, {
    name: 'MongoDB',
    stars: 3.5,
    categories: ['Databases'],
    description: <div>
        Description
    </div>
}, {
    name: 'Java',
    stars: 3.5,
    categories: ['Languages'],
    description: <div>
        Description
    </div>
}, {
    name: 'Ruby',
    stars: 3,
    categories: ['Languages'],
    description: <div>
        Description
    </div>
}, {
    name: 'iOS',
    stars: 3,
    categories: ['Platforms', 'Mobile'],
    description: <div>
        Description
    </div>
}, {
    name: 'Swift',
    stars: 2.5,
    categories: ['Languages', 'Mobile'],
    description: <div>
        Description
    </div>
}, {
    name: 'Illustrator',
    stars: 2,
    categories: ['Software'],
    description: <div>
        Description
    </div>
}];

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

    renderTool(tool) {
        const {name, stars} = tool;
        return <div className="tool" key={name} onClick={() => this.setState({selectedTool: tool})}>
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
        const {name, stars, description} = this.state.selectedTool;
        return <div className="details" key="details">
            <div className="top">
                <div className="icon">{getIcon(name)}</div>
                <div className="title">{name}</div>
            </div>
            <div className="body">
                {description}
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