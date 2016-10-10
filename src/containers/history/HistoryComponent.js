import { Component, PropTypes, createElement } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Link, browserHistory, match } from 'react-router';
import styles from './HistoryComponent.scss';

let historyStack = [];
let routes = {};
let listeners = {};
let lastListenerId = 0;

function addListener(callback) {
    listeners[String(++lastListenerId)] = callback;
    return lastListenerId;
}

function removeListener(id) {
    delete listeners[String(id)];
}

function updateListeners(data) {
    _.each(_.values(listeners), listener => listener(data));
}

function onClick(to, back) {
    if (back) {
        historyStack.pop();
    }
    else {
        historyStack.push(to);
    }
    updateListeners({back});
    browserHistory.replace(to);
}

export function setRoutes(newRoutes) {
    routes = newRoutes;
}

export const HistoryLink = props => (
    <Link key={props.to} {...props} onClick={() => onClick(props.to, props.back)}>{props.children}</Link>
);

const BackLink = ({children}) => {
    const to = historyStack[historyStack.length - 2];
    return <Link key={to} onClick={() => onClick(to, true)}>{children}</Link>;
};

export class ContentArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            back: false
        };
    }

    componentDidMount() {
        this.listenerId = addListener(update => this.setState(update));
    }

    componentWillUnmount() {
        removeListener(this.listenerId);
    }
    render() {
        const {children, className} = this.props;
        return (<div className={styles['content-container'] + (className ? ' ' + className : '')}>
            <ReactCSSTransitionGroup
            component="div"
            className={`transition-group${this.state.back ? ' back' : ''}`}
            transitionName="tool"
            transitionEnter={true}
            transitionLeave={true}
            transitionEnterTimeout={0}
            transitionLeaveTimeout={0}>
                {children}
            </ReactCSSTransitionGroup>
        </div>);
    }
}

export function connectNavigator(WrappedComponent) {
    class Connect extends Component {
        constructor(props) {
            super(props);
            this.state = {
                title: ''
            };
        }

        render() {
            const props = {
                title: this.state.title
            };
            return createElement(WrappedComponent, props);
        }
    }
    return Connect;
}

export function connectComponent(WrappedComponent) {
    class Connect extends Component {
        constructor(props={}) {
            super(props);
            this.state = {
                params: {}
            };
        }

        componentDidMount() {
            browserHistory.listen(location => {
                match({routes, location}, (error, redirectLocation, renderProps) => {
                    if (renderProps.components.length > 1) {
                        if (this instanceof renderProps.components[1]) {  // if active component
                            this.setState({params: renderProps.params});
                        }
                    }
                });
            });
        }

        render() {
            const props = {
                ...this.state.params
            };
            return createElement(WrappedComponent, props);
        }
    }
    return Connect;
}