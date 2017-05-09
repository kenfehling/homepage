import React from 'react'
import DesktopApp from './DesktopApp'
import MobileApp from './MobileApp'
import bowser from 'bowser'
import * as styles from './App.scss'
import 'babel-polyfill'
import Head from '../components/shared/Head'

export default () => (
  <div className={styles.container}>
    <Head title='Ken Fehling'
          description='Web and mobile app developer, music maker'
          keywords="Ken Fehling, web, mobile, dev, apps, websites, development, design, music"
    />
    {bowser.mobile /* || bowser.tablet */ ? <MobileApp /> : <DesktopApp />}
  </div>
)