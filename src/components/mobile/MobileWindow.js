import React from 'react'
import {HistoryWindow} from 'react-router-nested-history'
import * as styles from './MobileWindow.scss'

const toId = name => 'mobile_' + name.toLowerCase()

const MobileWindow = ({name, title=name, children, container=toId(name)}) => (
  <HistoryWindow forName={container} className={styles.container}>
    <div className='inner-container'>
      {children}
    </div>
  </HistoryWindow>
)

export default MobileWindow