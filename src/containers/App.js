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
          description='Freelance web and mobile app developer from Long Island, New York'
          keywords="Ken Fehling, web development, web design, app development, web, mobile, dev, apps, websites, development, design, Long Island, New York, NYC"
    />
    {bowser.mobile /* || bowser.tablet */ ? <MobileApp /> : <DesktopApp />}
  </div>
)