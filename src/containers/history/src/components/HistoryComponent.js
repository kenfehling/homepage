import { Component, Children, PropTypes, createElement } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Link, useRouterHistory, match } from 'react-router';
import createNoHistory from './createNoHistory';
import { createStore, combineReducers } from 'redux';
import { connect } from 'react-redux';
import styles from './HistoryComponent.scss';
import { pageChanged, setRouter } from '../actions/HistoryActions';
import { LOAD, PUSH, POP, TOP } from '../constants/LinkTypes';
import * as reducers from '../reducers';
import { getCurrentBackLink, getCurrentPage } from '../utils/history';
import { getTransitionType } from '../utils/transitions';
import * as reactRouter from 'react-router';
import _ from 'lodash';
import {addLeadingSlash} from "../utils/url";
import {getLastTransitionType} from "../utils/history";

const reducer = combineReducers({
    ...reducers
});

const store = createStore(reducer);

export class Route extends Component {
    constructor(props) {
        super(props);
        if (!props.name && !props.nameFn) {
            console.warn('Route should be passed name or nameFn');
        }
        else if (props.name && props.nameFn) {
            console.warn('Passing both name and nameFn to Route, nameFn will be ignored');
        }
    }
    render() {
        const props = _.pick(this.props, ['path', 'component', 'name', 'nameFn']);
        return createElement(reactRouter.Route, props);
    }
}

Route.propTypes = {
    name: PropTypes.string,
    nameFn: PropTypes.func
};

export const RouterX = connect(
    state=> ({}),
    { setRouter }
)(class extends Component {
    constructor(props) {
        super(props);
        this.history = props.history || useRouterHistory(createNoHistory)();
        this.routes = props.routes || props.children;
        props.setRouter({routes: this.routes, transitions: props.transitions, history: this.history});
    }
    render() {

        console.log("REND");
        console.log(this.routes, this.history);

        const props = _.pick(this.props, ['history', 'children', 'routes', 'render', 'createElement', 'onError', 'onUpdate']);
        return createElement(reactRouter.Router, {...props, routes: this.routes, history: this.history});
    }
});

export const Router = props => (
    <RouterX store={store} {...props} />
);

Router.propTypes = {
    transitions: PropTypes.arrayOf(PropTypes.object)
};

class HistoryLinkY extends Component {
    render() {
        const {to, className, children} = this.props;
        return (<Link to={to} className={className}>
            {children}
        </Link>);
    }
}

const HistoryLinkX = connect(
    (state, ownProps) => ({
        type: ownProps.type || getTransitionType(state.history.transitions, window.location.pathname, ownProps.to)
    }),
    {}
)(HistoryLinkY);

HistoryLinkY.contextTypes = {
    id: PropTypes.string.isRequired
};

HistoryLinkY.childContextTypes = {
    id: PropTypes.string.isRequired
};

export const HistoryLink = props => (
    <HistoryLinkX store={store} {...props} />
);

HistoryLink.propTypes = {
    to: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string
};

class BackLinkY extends Component {
    getChildContext() {
        return {
            id: this.context.id
        }
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        const {pageHistories, children} = this.props;
        const {id} = this.context;
        const backLink = getCurrentBackLink(pageHistories, id);
        if (backLink) {
            return (<HistoryLink className="default-back" {...this.props} {...backLink}>
                {children ||
                <div>
                    <i className="fa fa-chevron-left"/>
                    <span>{backLink.name}</span>
                </div>}
            </HistoryLink>);
        }
        else {
            return <div></div>;
        }
    }
}

BackLinkY.contextTypes = {
    id: PropTypes.string.isRequired
};

BackLinkY.childContextTypes = {
    id: PropTypes.string.isRequired
};

const BackLinkX = connect(
    (state, ownProps) => ({
        pageHistories: state.history.pageHistories,
    })
)(BackLinkY);

BackLinkX.contextTypes = {
    id: PropTypes.string.isRequired
};

BackLinkX.childContextTypes = {
    id: PropTypes.string.isRequired
};

export class BackLink extends Component {
    render() {
        return <BackLinkX store={store} {...this.props} />;
    }
}

BackLink.contextTypes = {
    id: PropTypes.string.isRequired
};

BackLink.childContextTypes = {
    id: PropTypes.string.isRequired
};

class ContentAreaY extends Component {
    getChildContext() {
        return {
            id: this.context.id
        }
    }

    render() {
        const {className, children, pageHistories} = this.props;
        return <div className={styles['content-container'] + (className ? ' ' + className : '')}>
            <ReactCSSTransitionGroup
            component="div"
            className={`transition-group ${getLastTransitionType(pageHistories, this.context.id)}`}
            transitionName="tool"
            transitionEnter={true}
            transitionLeave={true}
            transitionEnterTimeout={0}
            transitionLeaveTimeout={0}>
                {children}
            </ReactCSSTransitionGroup>
        </div>;
    }
}

ContentAreaY.contextTypes = {
    id: PropTypes.string.isRequired
};

ContentAreaY.childContextTypes = {
    id: PropTypes.string.isRequired
};

const ContentAreaX = connect(
    state => ({
        pageHistories: state.history.pageHistories
    }),
    dispatch => ({})
)(ContentAreaY);

export class ContentArea extends Component {
    getChildContext() {
        return {
            id: this.context.id
        }
    }

    render() {
        return <ContentAreaX store={store} {...this.props} />;
    }
}

ContentArea.contextTypes = {
    id: PropTypes.string.isRequired
};

ContentArea.childContextTypes = {
    id: PropTypes.string.isRequired
};

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

export function connectComponent(WrappedComponent, id) {
    class Connect extends Component {
        constructor(props={}) {
            super(props);
            this.state = {
                params: {},
                link: null
            };
        }

        getChildContext() {
            return {
                id: this.props.id
            }
        }

        loadRootPage() {
            const {routes, pageChanged, id} = this.props;
            const root = _.filter(routes.props.children, r => r.props.name && r.props.component().props.id === id)[0];
            pageChanged({name: root.props.name, to: addLeadingSlash(root.props.path), type: LOAD}, id);
        }

        onHistoryChange(location) {
            const {routes, id, transitions, pageChanged} = this.props;
            match({routes, location}, (error, redirectLocation, renderProps) => {
                const component = _.last(renderProps.components)();
                if (component.props.id === id) {  // if this component
                    const params = renderProps.params;
                    const route = _.last(renderProps.routes);
                    const to = location.pathname;
                    const from = window.location.pathname;
                    const name = route.name ? route.name : (route.nameFn ? route.nameFn(params) : null);
                    const type = getTransitionType(transitions, from, to);
                    this.setState({params, to, name});
                    pageChanged({to, name, type}, id);
                }
            });
        }

        componentDidMount() {
            const {history} = this.props;
            this.loadRootPage();
            history.listen(this.onHistoryChange.bind(this));
        }

        render() {
            const props = {
                ...this.state.params,
                id
            };
            return createElement(WrappedComponent, props);
        }
    }

    Connect.childContextTypes = {
        id: PropTypes.string.isRequired
    };

    const X = connect(
        state => ({
            ...state.history.router,
            pageHistories: state.history.pageHistories
        }),
        { pageChanged }
    )(Connect);

    return props => (
        <X store={store} id={id} {...props} />
    );
}