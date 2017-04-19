import React from 'react'
import {Route} from 'react-router'
import {HistoryRedirect} from 'react-router-nested-history'

export default ({from, to}) => (
  <Route path={from} exact render={() => <HistoryRedirect to={to} />} />
)