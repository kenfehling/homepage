import React, {Component, PropTypes, createElement} from 'react'
import {Container, ContainerGroup, HistoryRoute} from 'react-router-nested-history'
import DesktopToolsHeader from './DesktopToolsHeader'
import DesktopToolsMaster from './DesktopToolsMaster'
import DesktopToolsDetail from './DesktopToolsDetail'
import {categories} from '../../constants/tools'
import styles from './DesktopTools.scss'

const regex = c => `:category(${c})`

export default (props) => (
  <div className={styles.container}>
    <ContainerGroup name='tools' gotoTopOnSelectActive={true}>
      <DesktopToolsHeader />
      {categories.map(c => (
          <Container key={c}
                     name={c}
                     resetOnLeave={true}
                     initialUrl={`/tools/${c}`}
                     patterns={[`/tools/${regex(c)}`,
                               `/tools/${regex(c)}/:tool`]}>
              <HistoryRoute path={`/tools/${regex(c)}`} exact>
                {({ matched, ...rest}) => (
                  <DesktopToolsMaster {...rest} />
                )}
              </HistoryRoute>
              <HistoryRoute path={`/tools/${regex(c)}/:tool`} exact
                            component={DesktopToolsDetail} />
          </Container>
      ))}
    </ContainerGroup>
  </div>
)