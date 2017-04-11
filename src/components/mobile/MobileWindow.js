import React from 'react'
import {HistoryWindow} from 'react-router-nested-history'
import Helmet from 'react-helmet'
import * as styles from './MobileWindow.scss'

const toId = name => 'mobile_' + name.toLowerCase()

const MobileWindow = ({name, title=name, children, container=toId(name)}) => (
  <HistoryWindow forName={container} className={styles.container}>
    <div className='inner-container'>
      <Helmet title={title}
              defaultTitle='Ken Fehling'
              titleTemplate='Ken Fehling - %s' />
      {children}
    </div>
  </HistoryWindow>
)

export default MobileWindow