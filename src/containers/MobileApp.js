import React from 'react'
import Mobile from '../components/shared/Mobile'
import {redirectDesktopToMobile} from '../utils/mobile'
import * as styles from './MobileApp.scss'
import SimpleRedirect from '../components/shared/SimpleRedirect'

const MobileApp = () => (
  <div className={styles.container}>
    {redirectDesktopToMobile()}
    <SimpleRedirect from='/email' to='/contacts' />
    <Mobile isDesktop={false} />
  </div>
)

export default MobileApp