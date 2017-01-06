import React, { Component, PropTypes } from 'react'
import { Match, Redirect } from 'react-router'
import { Container, ContainerGroup, HistoryMatch} from 'react-router-nested-history'
import DesktopToolsHeader from "./DesktopToolsHeader"
import DesktopToolsMaster from "./DesktopToolsMaster"
import DesktopToolsDetail from "./DesktopToolsDetail"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import styles from './DesktopTools.scss'

class Tools extends Component {
  static contextTypes = {
    lastAction: PropTypes.string.isRequired
  }

  render() {
    const {lastAction} = this.context
    return (<div>
      <DesktopToolsHeader />
      <div className="transition-wrapper">
          <ReactCSSTransitionGroup
            component="div"
            className={`transition-group${lastAction === 'back' ? ' back' : ''}`}
            transitionName="tool"
            transitionEnter={true}
            transitionLeave={true}
            transitionEnterTimeout={0}
            transitionLeaveTimeout={0}>
          <HistoryMatch pattern='/tools/:category' exactly component={DesktopToolsMaster} />
          <HistoryMatch pattern='/tools/:category/:tool' component={DesktopToolsDetail} />
          </ReactCSSTransitionGroup>
      </div>
    </div>)
  }
}

export default (props) => (
  <div className={styles.container}>
    <ContainerGroup>
      <Container initialUrl='/tools'
                 patterns={['/tools', '/tools/:category', '/tools/:category/:tool']}>
        <Match pattern='/tools' exactly render={() => <Redirect to="/tools/All" />} />
        <Tools />
      </Container>
    </ContainerGroup>
  </div>
)