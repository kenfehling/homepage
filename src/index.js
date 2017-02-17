import { render }  from 'react-dom';
import { Match, Redirect } from 'react-router'
import { HistoryRouter } from 'react-router-nested-history'
import Desktop from './containers/Desktop';

render((
  <div>
    <HistoryRouter>
      <div>
        {/*
        <Match pattern='/' exactly
               render={() => <Redirect to="/tools" />} />
        <Match pattern='/tools' exactly
               render={() => <Redirect to="/tools/All" />} />
        */}
        <Desktop />
      </div>
    </HistoryRouter>
  </div>
), document.getElementById('root'));