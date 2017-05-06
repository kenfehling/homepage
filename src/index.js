import React from 'react'
import {render}  from 'react-dom';
import {HistoryRouter} from 'react-router-nested-history'
import App from './containers/App'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from './reducers'
import '../fonts/fonts.css'

// Exposes React performance profiling tools for use in console
if (process.env.NODE_ENV !== 'production') {
  require('expose-loader?Perf!react-addons-perf')
}

const store = createStore(reducer)

render((
  <Provider store={store}>
    <HistoryRouter>
      <App />
    </HistoryRouter>
  </Provider>
), document.getElementById('root'));