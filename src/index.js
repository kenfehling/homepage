import { render }  from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { Provider } from 'react-redux';
import * as reducers from './reducers';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
import App from './containers/App';
import Desktop from './containers/Desktop';
import Tools from './components/Tools';
import Mobile from './containers/Mobile';
import { setRoutes } from './containers/history/HistoryComponent';

const reducer = combineReducers({
    ...reducers,
    routing: routerReducer
});

const DevTools = createDevTools(
    <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q" defaultIsVisible={false}>
        <LogMonitor theme="tomorrow" preserveScrollTop={false} />
    </DockMonitor>
);

const store = createStore(
    reducer, compose(
        //applyMiddleware(thunk),
        DevTools.instrument()
    )
);

//const history = syncHistoryWithStore(createMemoryHistory(), store);
//const history = createMemoryHistory();

setRoutes(
    <Route path="/" component={App}>
        <Route path="tools" component={Tools} />
        <Route path="tools/:category" component={Tools} />
        <Route path="tools/:category/:selectedTool" component={Tools} />
        <Route path="mobile/:category" component={Mobile} />
        <Route path="mobile/:category/*" component={Mobile} />
    </Route>
);

render((
    <Provider store={store}>
        <div>
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={Desktop} />
                    <Route path="tools" component={Desktop} />
                    <Route path="tools/:category" component={Desktop} />
                    <Route path="tools/:category/:selectedTool" component={Desktop} />
                    <Route path="mobile/:category" component={Desktop} />
                    <Route path="mobile/:category/*" component={Desktop} />
                </Route>
            </Router>
            <DevTools store={store} />
        </div>
    </Provider>
), document.getElementById('root'));