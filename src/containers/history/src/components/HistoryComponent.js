import { Component, PropTypes, createElement } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Link, browserHistory, match } from 'react-router';
import { createStore, combineReducers } from 'redux';
import { connect } from 'react-redux';
import { routerReducer } from 'react-router-redux';
import styles from './HistoryComponent.scss';
import { changePage, pageChanged, setRoutes } from '../actions/HistoryActions';
import LinkTypes from '../constants/LinkTypes';
import * as reducers from '../reducers';
import { getBackLink } from '../utils/history';
import { getTransitionType } from '../utils/transitions';
import * as reactRouter from 'react-router';
import _ from 'lodash';

const reducer = combineReducers({
    ...reducers,
    routing: routerReducer
});

const store = createStore(reducer);

console.log(store);

const HistoryLinkX = connect(
    (state, ownProps) => {
        return {
            type: ownProps.type || getTransitionType(state.history.transitions, window.location.pathname, ownProps.to)
        }
    },
    dispatch => ({
        changePage: link => dispatch(changePage(link))
    })
)(({to, name, type, className, changePage, children}) => (
    <Link to={to} className={className} onClick={() => changePage({href: to, name, type})}>
        {children}
    </Link>
));

export const HistoryLink = props => (
    <HistoryLinkX store={store} {...props} />
);

HistoryLink.propTypes = {
    to: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string
};

const BackLinkX = connect(
    (state, ownProps) => ({
        link: getBackLink(state.history.historyStacks, ownProps.containerId)
    }),
    dispatch => ({
        changePage: link => dispatch(changePage(link))
    })
)(props => {
    return props.link ? <HistoryLink {...{...props, type: LinkTypes.POP}}>
        {children ||
        <div className="default-back">
            <i className="fa fa-chevron-left"/>
            <span>Back</span>
        </div>}
    </HistoryLink> : <div></div>
});

export const BackLink = props => (
    <BackLinkX store={store} {...props} />
);

const ContentAreaX = connect(
    state => ({
        type: state.history.lastLinkType
    })
)(props => {
    return <div className={styles['content-container'] + (props.className ? ' ' + props.className : '')}>
        <ReactCSSTransitionGroup
        component="div"
        className={`transition-group${props.type ? ' ' + props.type : ''}`}
        transitionName="tool"
        transitionEnter={true}
        transitionLeave={true}
        transitionEnterTimeout={0}
        transitionLeaveTimeout={0}>
            {props.children}
        </ReactCSSTransitionGroup>
    </div>;
});

export const ContentArea = props => (
    <ContentAreaX store={store} {...props} />
);

ContentArea.propTypes = {
    //id: PropTypes.string.isRequired
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
                const {routes} = this.props;
                if (routes) {
                    match({routes, location}, (error, redirectLocation, renderProps) => {
                        if (renderProps.components.length > 1) {
                            if (raffie === renderProps.components[1]) {  // if active component
                                this.setState({params: renderProps.params});
                            }
                        }
                    });
                }
            });
        }

        render() {
            const props = {
                ...this.state.params
            };
            return createElement(WrappedComponent, props);
        }
    }

    const X = connect(
        state => ({
            routes: state.history.routes
        }),
        dispatch => ({})
    )(Connect);

    const raffie = props => (
        <X store={store} {...props} />
    );

    return raffie;
}