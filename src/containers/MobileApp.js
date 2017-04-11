import React from 'react'
import Mobile from '../components/shared/Mobile'
import Helmet from 'react-helmet'
import {redirectDesktopToMobile} from '../utils/mobile'
import * as styles from './MobileApp.scss'

const MobileApp = () => (
  <div className={styles.container}>
    {redirectDesktopToMobile()}
    <Mobile isDesktop={false} />
    <Helmet
      link={[
        {
          rel: 'manifest',
          href: '/static/manifest.json'
        }
      ]}
    />
  </div>
)

export default MobileApp