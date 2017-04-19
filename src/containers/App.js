import React from 'react'
import DesktopApp from './DesktopApp'
import MobileApp from './MobileApp'
import bowser from 'bowser'
import * as styles from './App.scss'
import 'babel-polyfill'

if (bowser.mac || bowser.ios) {
  require('./osx.scss')
}
else {
  require('./windows.scss')
}

export default () => (
  <div className={styles.container}>
    {bowser.mobile /* || bowser.tablet */ ? <MobileApp /> : <DesktopApp />}
  </div>
)