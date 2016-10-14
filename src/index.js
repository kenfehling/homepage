import { render }  from 'react-dom';
import { browserHistory } from 'react-router';
import { Router } from './containers/history/src/components/HistoryComponent';
import { Route } from 'react-router';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from './reducers';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
import App from './containers/App';
import Tools from './components/Tools';
import Mobile from './containers/Mobile';

const reducer = combineReducers({
    ...reducers,
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

const transitions = [
    {from: /^\/tools$/, to: /^\/tools\/\w+\/\w+$/, type:'push'},
    {from: /^\/tools\/\w+$/, to: /^\/tools\/\w+\/\w+$/, type:'push'},
    {from: /^\/tools\/\w+\/\w+$/, to: /^\/tools\/\w+\/\w+$/, type:'push'},
    {from: /^\/$/, to: /^\/tools\/\w+\/\w+$/, type:'push'},
    {from: /^\/tools\/\w+\/\w+$/, to: /^\/$/, type:'pop'},
    {from: /^\/tools\/\w+\/\w+$/, to: /^\/tools$/, type:'pop'},
    {from: /^\/tools\/\w+\/\w+$/, to: /^\/tools\/\w+$/, type:'pop'}
];

render((
    <Provider store={store}>
        <div>
            <Router history={browserHistory} transitions={transitions}>
                <Route path="/" component={App}>
                    <Route path="tools" component={Tools} />
                    <Route path="tools/:category" component={Tools} />
                    <Route path="tools/:category/:selectedTool" component={Tools} />
                    <Route path="mobile/:category" component={Mobile} />
                    <Route path="mobile/:category/*" component={Mobile} />
                </Route>
            </Router>
            <DevTools store={store} />
        </div>
    </Provider>
), document.getElementById('root'));