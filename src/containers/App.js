import React from 'react'
import DesktopApp from './DesktopApp'
import MobileApp from './MobileApp'
import Helmet from 'react-helmet'
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
    <Helmet>
      <title>Ken Fehling</title>
      <meta name='description'
            content='Web and mobile app developer, music maker'
      />
      <meta name="keywords"
            content="Ken Fehling, web, mobile, dev, apps, websites, development, design"
      />
    </Helmet>
  </div>
)