import { Component, Children, PropTypes, createElement } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Link, browserHistory, match } from 'react-router';
import { createStore, combineReducers } from 'redux';
import { connect } from 'react-redux';
import { routerReducer } from 'react-router-redux';
import styles from './HistoryComponent.scss';
import { changePage, pageChanged, setRoutes } from '../actions/HistoryActions';
import * as reducers from '../reducers';
import { getBackLinkAtIndex } from '../utils/history';
import { getTransitionType } from '../utils/transitions';
import * as reactRouter from 'react-router';
import _ from 'lodash';

const reducer = combineReducers({
    ...reducers,
    routing: routerReducer
});

const store = createStore(reducer);

class HistoryLinkY extends Component {
    render() {
        const {to, name, type, className, changePage, children} = this.props;
        return (<Link to={to} className={className} onClick={() => changePage({to: to, name, type}, this.context.id)}>
            {children}
        </Link>);
    }
}

const HistoryLinkX = connect(
    (state, ownProps) => ({
        type: ownProps.type || getTransitionType(state.history.transitions, window.location.pathname, ownProps.to)
    }),
    dispatch => ({
        changePage: (link, containerId) => dispatch(changePage(link, containerId))
    })
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
    render() {
        const {pageHistories, children} = this.props;
        const backLink = getBackLinkAtIndex(pageHistories, this.context.id);
        if (backLink) {
            return (<HistoryLink {...this.props} {...backLink}>
                {children ||
                <div className="default-back">
                    <i className="fa fa-chevron-left"/>
                    <span>Back</span>
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
    }),
    dispatch => ({
        getBackLinkAtIndex: (pageHistories, containerId, index) =>
            dispatch(getBackLinkAtIndex(pageHistories, containerId, index))
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
        const {className, children, lastTransitionTypes} = this.props;
        return <div className={styles['content-container'] + (className ? ' ' + className : '')}>
            <ReactCSSTransitionGroup
            component="div"
            className={`transition-group ${lastTransitionTypes[this.context.id]}`}
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
        lastTransitionTypes: state.history.lastTransitionTypes
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

export const RouterX = connect(
    state=> ({}),
    (dispatch, ownProps) => ({
        setRoutes: () => dispatch(setRoutes(ownProps.routes || ownProps.children, ownProps.transitions))
    })
)(class extends Component {
    componentDidMount() {
        this.props.setRoutes();
    }
    render() {
        const props = _.pick(this.props, ['history', 'children', 'routes', 'render', 'createElement', 'onError', 'onUpdate']);
        return createElement(reactRouter.Router, props);
    }
});

export const Router = props => (
    <RouterX store={store} {...props} />
);

Router.propTypes = {
    transitions: PropTypes.arrayOf(PropTypes.object)
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
                params: {}
            };
        }

        getChildContext() {
            return {
                id: this.props.id
            }
        }

        componentDidMount() {
            browserHistory.listen(location => {
                const {routes} = this.props;
                if (routes) {
                    match({routes, location}, (error, redirectLocation, renderProps) => {
                        if (renderProps.components.length > 1) {
                            if (renderProps.components[1]().props.id === id) {  // if active component
                                this.setState({params: renderProps.params});
                            }
                        }
                    });
                }
            });
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
            routes: state.history.routes
        }),
        dispatch => ({})
    )(Connect);

    return props => (
        <X store={store} id={id} {...props} />
    );
}