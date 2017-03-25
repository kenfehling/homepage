import React from 'react'
import {Route, Redirect} from 'react-router'
import SimpleRedirect from '../components/shared/SimpleRedirect'

export const devicePath = (url, isDesktop) => isDesktop ? `/mobile${url}` : url

export const redirectMobileToDesktop = (path) => (
  <div>
    <Route path={path} render={({match}) => (
      <Redirect to={`/mobile${match.url}`} />
    )} />
    <Route path={`${path}/*`} render={({match}) => (
      <Redirect to={`/mobile${match.url}`} />
    )} />
  </div>
)

export const redirectDesktopToMobile = () => (
  <div>
    <SimpleRedirect from='/mobile' to='/' />
    <Route path='/mobile/*' render={({match}) => (
      <Redirect to={`${match.url.substring('/mobile'.length)}`}/>
    )} />
  </div>
)