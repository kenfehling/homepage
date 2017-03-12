import React, {createElement} from 'react'
import {HistoryWindow, Container, HistoryRoute} from 'react-router-nested-history'
import styles from './MobileWindow.scss'

const toId = name => 'mobile_' + name.toLowerCase()

const MobileWindow = ({name, children, container=toId(name)}) => (
  <HistoryWindow forName={container} className={styles.container}>
    {children}
  </HistoryWindow>
)

export default MobileWindow