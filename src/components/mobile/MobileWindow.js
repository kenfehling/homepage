import React, {createElement} from 'react'
import {HistoryWindow, Container, HistoryRoute} from 'react-router-nested-history'
import styles from './MobileWindow.scss'

const toId = name => 'mobile_' + name.toLowerCase()
const toPath = name => `/mobile/${name.toLowerCase()}`

const MobileWindow = ({name, path=toPath(name), patterns=[path],
                      component, children, isDefault=false}) => (
  <HistoryWindow forName={toId(name)} className={styles.container}>
    <Container name={toId(name)}
               initialUrl={path}
               patterns={patterns}
               isDefault={isDefault}
    >
      <HistoryRoute path={path} exact
                    children={children ? children :
                        props => createElement(component, props)} />
    </Container>
  </HistoryWindow>
)

export default MobileWindow