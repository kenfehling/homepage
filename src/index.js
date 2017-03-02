import {render}  from 'react-dom';
import {HistoryRouter} from 'react-router-nested-history'
import App from './containers/App'

render((
  <div>
    <HistoryRouter>
      <App />
    </HistoryRouter>
  </div>
), document.getElementById('root'));