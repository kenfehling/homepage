import React from 'react'
import {Route, Redirect} from 'react-router'

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