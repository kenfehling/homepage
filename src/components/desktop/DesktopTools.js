import React, { Component, PropTypes, createElement } from 'react'
import { Match, Redirect } from 'react-router'
import { Container, ContainerGroup, HistoryMatch} from 'react-router-nested-history'
import DesktopToolsHeader from "./DesktopToolsHeader"
import DesktopToolsMaster from "./DesktopToolsMaster"
import DesktopToolsDetail from "./DesktopToolsDetail"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { categories } from '../../constants/tools'
import styles from './DesktopTools.scss'
import * as _ from 'lodash'

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
  getActionClass() {
    const {lastAction} = this.context

    console.log(lastAction)

    switch (lastAction) {
      case 'back':
      case 'top': return lastAction
      case 'switch-to-container': return 'switch'
      default: return 'forward'
    }
  }

  render() {
    const {component, type} = this.props
    const {activePage} = this.context
    const actionClass = this.getActionClass()
    return (<HistoryMatch {...this.props} children={({ matched, ...props }) => {

      // TODO: Add this to the library?
      const isOnPage = () => matched && activePage.url === props.pathname

      return (<ReactCSSTransitionGroup
          component="div"
          className={`transition-group ${type} ${actionClass}`}
          transitionName="tool"
          transitionEnter={true}
          transitionLeave={true}
          transitionEnterTimeout={0}
          transitionLeaveTimeout={0}>
        {isOnPage() && <Page key={props.pathname}>
          {createElement(component, props)}
        </Page>}
      </ReactCSSTransitionGroup>);
    }} />);
  }
}

AnimatedMatch.contextTypes = {
  lastAction: PropTypes.string.isRequired,
  activePage: PropTypes.object
}

const regex = c => `:category(${c})`

export default (props) => (
  <div className={styles.container}>
    <Match pattern='/tools' exactly render={() => <Redirect to="/tools/All" />} />
    <ContainerGroup>
      <DesktopToolsHeader />
      {categories.map(c => (
          <Container initialUrl={`/tools/${c}`} key={c} keepHistory={false}
                      patterns={[`/tools/${regex(c)}`,
                                 `/tools/${regex(c)}/:tool`]}>
            <div className="transition-wrapper">
              <AnimatedMatch pattern={`/tools/${regex(c)}`} type="tools"
                             exactly component={DesktopToolsMaster} />
              <AnimatedMatch pattern={`/tools/${regex(c)}/:tool`}
                             type="detail" component={DesktopToolsDetail} />
            </div>
          </Container>
      ))}
    </ContainerGroup>
  </div>
)