import React, { PropTypes } from 'react'
import Mobile from '../components/shared/Mobile'
import Helmet from 'react-helmet'
import styles from './MobileApp.scss'

const MobileApp = () => (
  <div className={styles.container}>
    <Match pattern='/' exactly render={() => <Redirect to="/tools" />} />
    <Mobile isDesktop={false} />
    <Helmet 
      meta={[
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'
        }
    ]} 
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