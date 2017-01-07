import React, { Component, PropTypes, createElement } from 'react'
import { Match, Redirect } from 'react-router'
import { Container, ContainerGroup, HistoryMatch} from 'react-router-nested-history'
import DesktopToolsHeader from "./DesktopToolsHeader"
import DesktopToolsMaster from "./DesktopToolsMaster"
import DesktopToolsDetail from "./DesktopToolsDetail"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import styles from './DesktopTools.scss'

class Page extends Component {
  componentWillEnter(cb) {
    // animate stuff, then call cb();
    const element = findDOMNode(this);
    cb();
  }

  componentWillLeave(cb) {
    // animate stuff, then call cb();
    const element = findDOMNode(this);
    cb();
  }

  render() {
    return this.props.children
  }
}

class AnimatedMatch extends Component {
  render() {
    const {component} = this.props
    const {lastAction} = this.context

    return (<HistoryMatch
        {...this.props}
        children={({ matched, ...props }) => {
          return (<ReactCSSTransitionGroup
              component="div"
              className={`transition-group${lastAction === 'back' ? ' back' : ''}`}
              transitionName="tool"
              transitionEnter={true}
              transitionLeave={true}
              transitionEnterTimeout={0}
              transitionLeaveTimeout={0}>
            {matched && <Page key={props.pathname}>
              {createElement(component, props)}
            </Page>}
          </ReactCSSTransitionGroup>);
        }}
    />);
  }
}

AnimatedMatch.contextTypes = {
  lastAction: PropTypes.string.isRequired
}

class Tools extends Component {
  render() {
    return (<div>
      <DesktopToolsHeader />
      <div className="transition-wrapper">

          <AnimatedMatch pattern='/tools/:category'
                        exactly component={DesktopToolsMaster} />
          <AnimatedMatch pattern='/tools/:category/:tool'
                        component={DesktopToolsDetail} />
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