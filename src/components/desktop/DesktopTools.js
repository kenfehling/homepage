import React from 'react'
import { Match, Redirect } from 'react-router'
import { Container, ContainerGroup, HistoryMatch} from 'react-router-nested-history'
import DesktopToolsHeader from "./DesktopToolsHeader"
import DesktopToolsMaster from "./DesktopToolsMaster"
import DesktopToolsDetail from "./DesktopToolsDetail"
import styles from './DesktopTools.scss'

export default (props) => (
  <div className={styles.container}>
    <ContainerGroup>
      <Container initialUrl='/tools'
                 patterns={['/tools', '/tools/:category', '/tools/:category/:tool']}>
        <Match pattern='/tools' exactly render={() => <Redirect to="/tools/All" />} />
        <DesktopToolsHeader />
        <HistoryMatch pattern='/tools/:category' exactly component={DesktopToolsMaster} />
        <HistoryMatch pattern='/tools/:category/:tool' component={DesktopToolsDetail} />
      </Container>
    </ContainerGroup>
  </div>
)