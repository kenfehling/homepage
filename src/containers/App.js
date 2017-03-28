import React from 'react'
import DesktopApp from './DesktopApp'
import MobileApp from './MobileApp'
import bowser from 'bowser'
import styles from './App.scss';

export default () => (
  <div className={styles.container}>
    {bowser.mobile /* || bowser.tablet */ ? <MobileApp /> : <DesktopApp />}
  </div>
);