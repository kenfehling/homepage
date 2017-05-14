import React from 'react'
import reactDom from 'react-dom';
import {HistoryRouter} from 'react-router-nested-history'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from '../reducers/index'

// Exposes React performance profiling tools for use in console
if (process.env.NODE_ENV !== 'production') {
  require('expose-loader?Perf!react-addons-perf')
}

const store = createStore(reducer)

export const render = (App) => {
  reactDom.render((
    <Provider store={store}>
      <HistoryRouter>
        <App />
      </HistoryRouter>
    </Provider>
  ), document.getElementById('root'));
}