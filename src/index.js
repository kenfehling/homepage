import {render}  from 'react-dom';
import {HistoryRouter} from 'react-router-nested-history'
import DesktopApp from './containers/DesktopApp'
import MobileApp from './containers/MobileApp'
import bowser from 'bowser'

render((
  <div>
    <HistoryRouter>
      {bowser.mobile || bowser.tablet ? <MobileApp /> : <DesktopApp />}
    </HistoryRouter>
  </div>
), document.getElementById('root'));