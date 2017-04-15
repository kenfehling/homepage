import React from 'react'
import Mobile from '../components/shared/Mobile'
import {redirectDesktopToMobile} from '../utils/mobile'
import * as styles from './MobileApp.scss'

const MobileApp = () => (
  <div className={styles.container}>
    {redirectDesktopToMobile()}
    <Mobile isDesktop={false} />
  </div>
)

export default MobileApp