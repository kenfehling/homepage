import React from 'react'
import DesktopApp from './DesktopApp'
import MobileApp from './MobileApp'
import bowser from 'bowser'
import * as styles from './App.scss'
import 'babel-polyfill'
import Head from '../components/shared/Head'

if (bowser.mac || bowser.ios) {
  require('./osx.scss')
}
else {
  require('./windows.scss')
}

export default () => (
  <div className={styles.container}>
    {bowser.mobile /* || bowser.tablet */ ? <MobileApp /> : <DesktopApp />}
    <Head title='Ken Fehling'
          description='Web and mobile app developer, music maker'
          keywords="Ken Fehling, web, mobile, dev, apps, websites, development, design, music"
    />
  </div>
)