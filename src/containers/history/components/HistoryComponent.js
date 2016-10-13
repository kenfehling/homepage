import { Component, PropTypes, createElement } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Link, browserHistory, match } from 'react-router';
import { createStore } from 'redux';
import { connect } from 'react-redux';
import styles from './HistoryComponent.scss';
import { changePage, pageChanged, setRoutes } from '../actions/HistoryActions';
import LinkTypes from '../constants/LinkTypes';
import reducer from '../reducers';
import { getBackLink } from '../utils/history';
import * as reactRouter from 'react-router';
import _ from 'lodash';

const store = createStore(reducer);

const HistoryLinkX = connect(
    (state, ownProps) => ({}),
    dispatch => ({
        changePage: link => dispatch(changePage(link))
    })
)(props => (
    <Link to={props.to} className={props.className}
          onClick={() => props.changePage({href: props.to, name: props.name, type: LinkTypes.PUSH})}>
        {props.children}
    </Link>
));

export const HistoryLink = props => (
    <HistoryLinkX store={store} {...props} />
);

HistoryLink.propTypes = {
    to: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};

const BackLinkX = connect(
    (state, ownProps) => ({
        link: getBackLink(state.historyStacks, ownProps.containerId)
    }),
    dispatch => ({

    })
)(({children, link, className}) => (
    link ? <Link to={link.href} className={className} onClick={() => onClick(link, LinkTypes.POP)}>
        {children ||
        <div className="default-back">
            <i className="fa fa-chevron-left" />
            <span>Back</span>
        </div>}
    </Link> : <div></div>
));

export const BackLink = props => (
    <BackLinkX store={store} {...props} />
);

const ContentAreaX = connect(
    state => ({
        type: state.lastLinkType
    })
)(props => {
    console.log(props);
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

export const RouterX = connect(
    state=> ({}),
    (dispatch, ownProps) => ({
        setRoutes: () => dispatch(setRoutes(ownProps.routes || ownProps.children))
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
            routes: state.routes
        }),
        dispatch => ({})
    )(Connect);

    const raffie = props => (
        <X store={store} {...props} />
    );

    return raffie;
}