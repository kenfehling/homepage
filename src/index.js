import { render }  from 'react-dom';
import { Router, Route } from './containers/history/src/components/HistoryComponent';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from './reducers';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
import App from './containers/App';
import Tools from './components/desktop/Tools';
import Mobile from './containers/Mobile';
import { LOAD, PUSH, POP, TOP } from './containers/history/src/constants/LinkTypes';

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
    {from: /^\/$/, to: /^\/tools\/\w+\/\w+$/, type: PUSH},
    {from: /^\/tools$/, to: /^\/tools\/\w+\/\w+$/, type: PUSH},
    {from: /^\/tools\/\w+$/, to: /^\/tools\/\w+\/\w+$/, type: PUSH},
    {from: /^\/tools\/\w+\/\w+$/, to: /^\/tools\/\w+\/\w+$/, type: PUSH},

    {from: /^\/tools\/\w+\/\w+$/, to: /^\/$/, type: TOP},
    {from: /^\/tools\/\w+\/\w+$/, to: /^\/tools$/, type: TOP},
    {from: /^\/tools\/\w+\/\w+$/, to: /^\/tools\/\w+$/, type: TOP},

    {from: /^\/tools\/\w+$/, to: /^\/tools\/\w+$/, type: LOAD},
    {from: /^\/tools$/, to: /^\/tools\/\w+$/, type: LOAD},
    {from: /^\/tools\/\w+$/, to: /^\/tools$/, type: LOAD},

    {from: /^\/$/, to: /^\/mobile\/\w+$/, type: PUSH},
    {from: /^\/mobile$/, to: /^\/mobile\/\w+$/, type: PUSH},
];

render((
    <Provider store={store}>
        <div>
            <Router transitions={transitions}>
                <Route path="/" component={App}>
                    <Route path="tools" name="Tools" component={Tools} />
                    <Route path="tools/:category" component={Tools} nameFn={params => params.category}/>
                    <Route path="tools/:category/:selectedTool" component={Tools} nameFn={params => params.selectedTool} />
                    <Route path="mobile" name="Mobile" component={Mobile} />
                    <Route path="mobile/:category" component={Mobile} />
                    <Route path="mobile/:category/*" component={Mobile} />
                </Route>
            </Router>
            <DevTools store={store} />
        </div>
    </Provider>
), document.getElementById('root'));