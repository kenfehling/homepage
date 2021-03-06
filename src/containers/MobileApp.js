import React from 'react'
import Mobile from '../components/shared/Mobile'
import {redirectDesktopToMobile} from '../utils/mobile'
import './App.scss'
import * as styles from './MobileApp.scss'
import SimpleRedirect from '../components/shared/SimpleRedirect'
import AppHead from '../components/shared/AppHead'

const MobileApp = () => (
  <div className={styles.container}>
    <AppHead />
    {redirectDesktopToMobile()}
    <SimpleRedirect from='/email' to='/contacts' />
    <Mobile isDesktop={false} />
  </div>
)

export default MobileApp