import React from 'react'
import {Route} from 'react-router'
import {HistoryRedirect} from 'react-router-nested-history'
import SimpleRedirect from '../components/shared/SimpleRedirect'

export const devicePath = (url, isDesktop) => isDesktop ? `/mobile${url}` : url

export const redirectMobileToDesktop = (path) => (
  <div>
    <Route path={path} render={({match}) => (
      <HistoryRedirect to={`/mobile${match.url}`} />
    )} />
    <Route path={`${path}/*`} render={({match}) => (
      <HistoryRedirect to={`/mobile${match.url}`} />
    )} />
  </div>
)

export const redirectDesktopToMobile = () => (
  <div>
    <SimpleRedirect from='/mobile' to='/' />
    <Route path='/mobile/*' render={({match}) => (
      <HistoryRedirect to={`${match.url.substring('/mobile'.length)}`}/>
    )} />
  </div>
)