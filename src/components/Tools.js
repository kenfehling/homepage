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
const DEVOPS = 'DevOps';
const PLATFORMS = 'Platforms';
const WEB = 'Web';
const MOBILE = 'Mobile';
const DATABASES = 'Databases';
const SOFTWARE = 'Software';

export default class Tools extends Component {
    switchToTool(name) {
        this.setState({selectedTool: _.find(this.tools, t => t.name === name)});
    }
    linkToTool(name, text=name) {
        return <a onClick={() => this.switchToTool(name)}>{text}</a>;
    }
    externalLink(name, href='http://' + name) {
        return (<a target="_blank" href={href}>
            {name} <i className="fa fa-external-link" />
        </a>);
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
            DEVOPS,
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
                My main programming language.
                Despite the near universal hatred of JavaScript by my peers, I'm actually quite fond of it.
                It's gotten especially good now with some of the features in ES6/ES2015.
                I use {this.linkToTool('Babel')} to transpile into ES5 for cross-browser support.
            </div>
        }, {
            name: 'HTML',
            stars: 5,
            categories: [LANGUAGES, PLATFORMS, WEB],
            description: <div>
                Description
            </div>
        }, {
            name: 'CSS',
            stars: 4.5,
            categories: [LANGUAGES, WEB],
            description: <div>
                Description
            </div>
        }, {
            name: 'React',
            stars: 4.5,
            categories: [LIBRARIES, WEB],
            description: <div>
                By far my favorite {this.linkToTool('JavaScript')} framework/library,
                React has drastically changed the way I approach web app
                development. This site itself is written in React as well as {this.linkToTool('Redux')}.
                <br /><br />I've also released a couple of libraries for React into open source:<br />
                <ul>
                    <li>{this.externalLink("react-designable-audio-player",
                        "http://github.com/kenfehling/react-designable-audio-player")}</li>
                </ul>
            </div>
        }, {
            name: 'Redux',
            stars: 4.5,
            categories: [LIBRARIES, WEB],
            description: <div>
                Redux is a great add-on to {this.linkToTool('React')}, and it's renewed my interest
                in functional programming. It makes managing client-side state simple and sensible,
                and I appreciate how it's decoupled from the web and can be used in React Native
                and even non-React projects.
                <br /><br />
                This site itself uses Redux to manage things like how the individual windows are layered.
            </div>
        }, {
            name: 'SASS',
            stars: 4.5,
            categories: [LIBRARIES, WEB],
            description: <div>
                Description
            </div>
        }, {
        /*
            name: 'Lodash',
            stars: 4.5,
            categories: [LIBRARIES, WEB],
            description: <div>
                Description
            </div>
        }, {
        */
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
                Python is my main go-to language for anything not web or mobile related.
                Since most of my work is on the frontend web I'm usually
                using {this.linkToTool('JavaScript')}, however I've recently been using Python
                for the backend for a hackathon registration page, and some data analysis using Pandas.
            </div>
        }, {
            name: 'Java',
            stars: 4,
            categories: [LANGUAGES, MOBILE],
            description: <div>
                At my university, the Computer Science curriculum uses Java as its main programming language.
                I've also used Java on my own projects with
                JSP/Servlets, {this.linkToTool('GWT', 'Google Web Toolkit')},
                and {this.linkToTool('Android')}.
            </div>
        }, {
            name: 'Webpack',
            stars: 4,
            categories: [DEVOPS, WEB],
            description: <div>
                Currently my main {this.linkToTool('JavaScript')} build tool.
            </div>
        }, {
            name: 'Gulp',
            stars: 4,
            categories: [DEVOPS, WEB],
            description: <div>
                Gulp was my main {this.linkToTool('JavaScript')} build tool before switching to
                {this.linkToTool('Webpack')}. I often used Gulp with {this.linkToTool('Browserify')}.
            </div>
        }, {
            name: 'Grunt',
            stars: 4,
            categories: [DEVOPS, WEB],
            description: <div>
                I used Grunt for a short time before switching to {this.linkToTool('Gulp')},
                and currently {this.linkToTool('Webpack')}.
                Grunt and Gulp are pretty similar build tools for {this.linkToTool('JavaScript')} and
                I used both of them frequently with {this.linkToTool('Browserify')}.
            </div>
        }, {
            name: 'Flask',
            stars: 4,
            categories: [LIBRARIES, WEB],
            description: <div>
                I usually use Flask when I write web projects in {this.linkToTool('Python')}.
                I've dabbled with Django a little,
                but my Python web projects tend to be pretty small so Flask is better suited.
                For larger web apps I typically use {this.linkToTool('Node')} for the backend.
            </div>
        }, {
            name: 'JQuery',
            stars: 4,
            categories: [LIBRARIES, WEB],
            description: <div>
                Description
            </div>
        }, {
            name: 'Android',
            stars: 4,
            categories: [PLATFORMS, MOBILE],
            description: <div>
                I was passionate about making Android apps for a couple of years,
                before going back to focusing primarily on web development.
                <br /><br />
                I released 3 major apps:
                <ul>
                    <li>Video Toolbox</li>
                    <li>Color Sounds</li>
                    <li>TaskBomb</li>
                </ul>
            </div>
        }, {
            name: 'Git',
            stars: 4,
            categories: [SOFTWARE],
            description: <div>
                Description
            </div>
        }, {
            name: 'NPM',
            stars: 4,
            categories: [DEVOPS, WEB],
            description: <div>
                Description
            </div>
        }, {
            name: 'Babel',
            stars: 4,
            categories: [DEVOPS, WEB],
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
            name: 'Rails',
            stars: 3.5,
            categories: [LIBRARIES, WEB],
            description: <div>
                Description
            </div>
        }, {
            name: 'Bootstrap',
            stars: 3.5,
            categories: [LIBRARIES, WEB],
            description: <div>
                Description
            </div>
        }, {
            name: 'Keystone',
            stars: 3.5,
            categories: [LIBRARIES, WEB],
            description: <div>
                Description
            </div>
        }, {
            name: 'Jest',
            stars: 3.5,
            categories: [DEVOPS, WEB],
            description: <div>
                Description
            </div>
        }, {
            name: 'ESLint',
            stars: 3.5,
            categories: [DEVOPS, WEB],
            description: <div>
                Description
            </div>
        }, {
            name: 'FFmpeg',
            stars: 3.5,
            categories: [SOFTWARE],
            description: <div>
                Description
            </div>
        }, {
            name: 'Guice',
            fullName: 'Google Guice',
            stars: 3.5,
            categories: [LIBRARIES],
            description: <div>
                Google Guice is a dependency injection library for {this.linkToTool('Java')}.
                I started using Guice while doing {this.linkToTool('GWT')} development,
                but I continued to use it on almost all of my {this.linkToTool('Java')} projects,
                including for {this.linkToTool('Android')} (along with {this.linkToTool('RoboGuice')}).
            </div>
        }, {
            name: 'RoboGuice',
            iconType: 'png',
            stars: 3.5,
            categories: [LIBRARIES, MOBILE],
            description: <div>
                Back when I was doing {this.linkToTool('Android')} development,
                I used {this.linkToTool('Guice')} and RoboGuice for dependency injection.
                Android isn't inherently that well suited for DI but RoboGuice smoothed this over a bit,
                helping me strive to write more modular and testable code.
                In 2016 the library was discontinued, however there are now many alternative DI libraries for Android.
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
            name: 'TravisCI',
            stars: 3,
            categories: [DEVOPS, WEB],
            description: <div>
                Description
            </div>
        }, {
            name: 'Browserify',
            stars: 3,
            categories: [DEVOPS, WEB],
            description: <div>
                Description
            </div>
        }, {
            name: 'Bourbon',
            stars: 3,
            categories: [LIBRARIES, WEB],
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
            name: 'SQLite',
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
                I had previously learned Scheme over a summer vacation using the
                old <a target="_blank" href="http://youtube.com/watch?v=2Op3QLzMgSY">SICP lectures</a> from MIT.
                I was smitten by the power yet simplicity of it all.
                I later learned some Clojure and ClojureScript,
                which also being Lisp variants are similar to Scheme.
                <br /><br />
                Although I don't use any of these languages in my daily work,
                I'm glad I learned them because they completely changed the way I approach writing programs,
                even in more imperative languages
                like {this.linkToTool('JavaScript')} and {this.linkToTool('Python')}.
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
            name: 'GWT',
            iconType: 'png',
            fullName: 'Google Web Toolkit',
            stars: 2.5,
            categories: [WEB],
            description: <div>
                In the past {this.linkToTool('Java')} was my primary language, so GWT seemed like an
                alluring tool at the time for creating web apps. However I didn't quite care for it overall,
                and my {this.linkToTool('HTML')}, {this.linkToTool('JavaScript')},
                and {this.linkToTool('CSS')} skills continued to progress.
                <br /><br />
                Although I abandoned GWT, I did take away some nice experience with dependency injection,
                particularly with {this.linkToTool('Guice', 'Google Guice')}, and the observer pattern.
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
        const {selectedTool} = this.state;
        const {name, fullName, stars, description} = selectedTool;
        return (<div className="details" key="details">
            <div className="title">{fullName || name}</div>
            <div className="body">{description}</div>

            <br />
            <br />

            <div onClick={() => this.setState({selectedTool: null})}>Back</div>
        </div>);
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