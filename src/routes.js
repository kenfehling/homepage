import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Tools from './components/Tools';
import Mobile from './containers/Mobile';

export default (
    <Route path="/" component={App}>
        <Route path="tools" component={Tools} />
        <Route path="tools/:category" component={Tools} />
        <Route path="tools/:category/:selectedTool" component={Tools} />
        <Route path="mobile/:category" component={Mobile} />
        <Route path="mobile/:category/*" component={Mobile} />
    </Route>
);