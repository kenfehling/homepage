import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import styles from './Tools.scss';
import _ from 'lodash';

const ROWS = 2;
const starIcon = require('img/icons/star.svg');
const halfStarIcon = require('img/icons/half-star.svg');

const getIcon = ({name, iconType}) =>
    <img className="icon" src={require('img/icons/tools/' +
        name.replace(' ', '_').replace('#', 'sharp') +'.' + (iconType || 'svg'))} />;

const LANGUAGES = 'Languages';
const LIBRARIES = 'Libraries';
const PLATFORMS = 'Platforms';
const WEB = 'Web';
const MOBILE = 'Mobile';
const DATABASES = 'Databases';
const SOFTWARE = 'Software';

export default class Tools extends Component {
    switchToTool(name) {
        this.setState({selectedTool: _.find(this.tools, t => t.name === name)});
    }
    linkToTool(name) {
        return <a onClick={() => this.switchToTool(name)}>{name}</a>;
    }
    constructor(props) {
        super(props);
        this.state = {
            selectedTool: null,
            lastScrollLeft: 0,
            category: 'All'
        };
        this.categories = [
            'All',
            LANGUAGES,
            LIBRARIES,
            PLATFORMS,
            WEB,
            MOBILE,
            DATABASES,
            SOFTWARE
        ];

        this.tools = [{
            name: 'JavaScript',
            stars: 5,
            categories: [LANGUAGES, WEB],
            description: <div>
                My main programming language, I'm actually quite fond of JavaScript,
                especially now with some of the features in ES6/ES2015.
            </div>
        }, {
            name: 'React',
            stars: 4.5,
            categories: [LIBRARIES, WEB],
            description: <div>
                By far my favorite web framework/library, React has drastically changed the way I approach web app
                development. This site itself is written in React, along with {this.linkToTool('Redux')}.
                <br /><br />I've also released a couple of libraries for React into open source:<br />
                <ul>
                    <li><a href="http://github.com/kenfehling/react-designable-audio-player">react-designable-audio-player</a></li>
                </ul>
            </div>
        }, {
            name: 'Redux',
            stars: 4.5,
            categories: [LIBRARIES, WEB],
            description: <div>
                Redux is the leader!
            </div>
        }, {
            name: 'HTML',
            stars: 4.5,
            categories: [LANGUAGES, PLATFORMS, WEB],
            description: <div>
                Description
            </div>
        }, {
            name: 'Webpack',
            stars: 4,
            categories: [LIBRARIES, WEB],
            description: <div>
                Description
            </div>
        }, {
            name: 'Node',
            stars: 4,
            categories: [PLATFORMS, WEB],
            description: <div>
                Description
            </div>
        }, { name: 'Python',
            stars: 4,
            categories: [LANGUAGES],
            description: <div>
                Description
            </div>
        }, {
            name: 'CSS',
            stars: 4,
            categories: [LANGUAGES, WEB],
            description: <div>
                Description
            </div>
        }, {
            name: 'Android',
            stars: 4,
            categories: [PLATFORMS, MOBILE],
            description: <div>
                Description
            </div>
        }, {
            name: 'Git',
            stars: 4,
            categories: [SOFTWARE],
            description: <div>
                Description
            </div>
        }, {
            name: 'MongoDB',
            stars: 3.5,
            categories: [DATABASES],
            description: <div>
                Description
            </div>
        }, {
            name: 'Java',
            stars: 3.5,
            categories: [LANGUAGES, MOBILE],
            description: <div>
                Description
            </div>
        }, {
            name: 'ActionScript',
            iconType: 'png',
            stars: 3.5,
            categories: [LANGUAGES, WEB, MOBILE],
            description: <div>
                Description
            </div>
        }, {
            name: 'Flash',
            stars: 3.5,
            categories: [PLATFORMS, WEB, SOFTWARE],
            description: <div>
                Description
            </div>
        }, {
            name: 'Flex',
            stars: 3.5,
            categories: [SOFTWARE],
            description: <div>
                Description
            </div>
        }, {
            name: 'Ruby',
            stars: 3,
            categories: [LANGUAGES],
            description: <div>
                Description
            </div>
        }, {
            name: 'C#',
            stars: 3,
            categories: [LANGUAGES],
            description: <div>
                Description
            </div>
        }, {
            name: 'iOS',
            stars: 3,
            categories: [PLATFORMS, MOBILE],
            description: <div>
                Description
            </div>
        }, {
        /*
            name: 'Xcode',
            iconType: 'png',
            stars: 3,
            categories: [MOBILE, SOFTWARE],
            description: <div>
                Description
            </div>
        }, {
        */
            name: 'Postgresql',
            stars: 3,
            categories: [DATABASES],
            description: <div>
                Description
            </div>
        }, {
            name: 'MySQL',
            stars: 3,
            categories: [DATABASES],
            description: <div>
                Description
            </div>
        }, {
            name: 'Firebase',
            stars: 3,
            categories: [DATABASES],
            description: <div>
                Description
            </div>
        }, {
            name: 'Logic',
            iconType: 'png',
            stars: 3,
            categories: [SOFTWARE],
            description: <div>
                Description
            </div>
        }, {
            name: 'Ableton',
            stars: 3,
            categories: [SOFTWARE],
            description: <div>
                Description
            </div>
        }, {
            name: 'Clojure',
            stars: 2.5,
            categories: [LANGUAGES],
            description: <div>
                Description
            </div>
        }, {
            name: 'Swift',
            stars: 2.5,
            categories: [LANGUAGES, MOBILE],
            description: <div>
                Description
            </div>
        }, {
            name: 'Unity',
            stars: 2.5,
            categories: [PLATFORMS, SOFTWARE, MOBILE],
            description: <div>
                Description
            </div>
        }, {
            name: 'Illustrator',
            stars: 2.5,
            categories: [SOFTWARE],
            description: <div>
                Description
            </div>
        }, {
            name: 'Photoshop',
            stars: 1.5,
            categories: [SOFTWARE],
            description: <div>
                Description
            </div>
        }];
    }

    componentDidUpdate() {
        if (this.scrollArea) {
            this.scrollArea.scrollLeft = this.state.lastScrollLeft;
        }
    }

    renderTool(tool) {
        const {name, stars} = tool;
        return <div className="tool" key={name} onClick={() => this.setState({selectedTool: tool})}>
            {getIcon(tool)}
            <div className="name">{name}</div>
            <div className="stars">
                {_.map(_.range(Math.floor(stars)), i => <img key={i} src={starIcon} />)}
                {stars % 1 === 0.5 ? <img src={halfStarIcon} /> : ''}
            </div>
        </div>;
    }

    renderTools() {
        const {category} = this.state;
        const filteredTools = category === 'All' ? this.tools : _.filter(this.tools, t => _.includes(t.categories, category));
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
                <div className="icon">{getIcon(this.state.selectedTool)}</div>
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
                    {_.map(this.categories, c =>
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