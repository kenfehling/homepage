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

const regex = c => `:category(${c})`
const scrollLefts = {}
const onMasterScroll = (category, event) => {
  console.log(category, event.target.scrollLeft)
  scrollLefts[category] = event.target.scrollLeft
}
const resetMasterScrolls = () => _.each(categories, c => scrollLefts[c] = 0)
resetMasterScrolls()

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
    switch (lastAction) {
      case 'back':
      case 'top': return lastAction
      case 'switch-to-container': return this.prevAction
      default: return 'forward'
    }
  }

  render() {
    const {component, children} = this.props
    const {activePage, lastAction} = this.context
    const actionClass = this.getActionClass()
    this.prevAction = lastAction
    if (lastAction === 'switch-to-container') {
      resetMasterScrolls()
    }
    const timeout = lastAction === 'switch-to-container' ? 1 : 1000
    return (<HistoryMatch {...this.props} children={({ matched, ...props }) => {

      // TODO: Add this to the library?
      const isOnPage = matched && activePage.url === props.pathname

      return (<ReactCSSTransitionGroup
          component="div"
          className={`transition-group ${actionClass}`}
          transitionName="tool"
          transitionEnter={true}
          transitionLeave={true}
          transitionEnterTimeout={timeout}
          transitionLeaveTimeout={timeout}>
        {isOnPage && <Page key={props.pathname}>
          {createElement(component || children, props)}
        </Page>}
      </ReactCSSTransitionGroup>);
    }} />);
  }
}

AnimatedMatch.contextTypes = {
  lastAction: PropTypes.string.isRequired,
  activePage: PropTypes.object
}

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
              <AnimatedMatch pattern={`/tools/${regex(c)}`}
                             exactly children={({ matched, ...rest}) => (
                  <DesktopToolsMaster {...rest}
                      scrollLeft={scrollLefts[c]}
                      onScroll={e => onMasterScroll(c, e)} />
              )} />
              <AnimatedMatch pattern={`/tools/${regex(c)}/:tool`}
                             component={DesktopToolsDetail} />
            </div>
          </Container>
      ))}
    </ContainerGroup>
  </div>
)