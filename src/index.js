import { render }  from 'react-dom';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from './reducers';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
import App from './components/App';

const reducer = combineReducers({
    ...reducers
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

render((
    <div>
        <Provider store={store}>
            <App />
        </Provider>
        <DevTools store={store} />
    </div>
), document.getElementById('root'));