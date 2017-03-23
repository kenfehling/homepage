import React from 'react'
import {render}  from 'react-dom';
import {HistoryRouter} from 'react-router-nested-history'
import App from './containers/App'

render((
  <HistoryRouter>
    <App />
  </HistoryRouter>
), document.getElementById('root'));