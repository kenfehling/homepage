import React, { PropTypes } from 'react'
import Mobile from '../components/shared/Mobile'
import Helmet from 'react-helmet'
import styles from './MobileApp.scss'

const MobileApp = () => (
  <div className={styles.container}>
    <Mobile useTopBar={false} />
    <Helmet meta={[
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, maximum-scale=1'
      }
    ]} />
  </div>
)

export default MobileApp