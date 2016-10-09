import { render }  from 'react-dom';
import { Router, Route, IndexRoute, createMemoryHistory } from 'react-router';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { Provider } from 'react-redux';
import * as reducers from './reducers';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
import App from './containers/App';
import Desktop from './containers/Desktop';

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

const history = syncHistoryWithStore(createMemoryHistory(), store);

render((
    <Provider store={store}>
        <div>
            <Router history={history}>
                <Route path="/" component={App}>
                    <IndexRoute component={Desktop} />
                    <Route path="skills/:tool" component={Desktop} />
                </Route>
            </Router>
            <DevTools store={store} />
        </div>
    </Provider>
), document.getElementById('root'));