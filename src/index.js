import { render }  from 'react-dom';
import { HistoryRouter } from 'react-router-nested-history'
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

//const history = syncHistoryWithStore(createMemoryHistory(), store);
//const history = createMemoryHistory();

render((
    <Provider store={store}>
        <div>
            <HistoryRouter>
                <Desktop />
            </HistoryRouter>
            <DevTools store={store} />
        </div>
    </Provider>
), document.getElementById('root'));