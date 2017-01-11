import React, { Component, PropTypes, createElement, cloneElement, Children } from 'react'
import { Match, Redirect } from 'react-router'
import { Container, ContainerGroup, HistoryMatch} from 'react-router-nested-history'
import DesktopToolsHeader from "./DesktopToolsHeader"
import DesktopToolsMaster from "./DesktopToolsMaster"
import DesktopToolsDetail from "./DesktopToolsDetail"
import { categories } from '../../constants/tools'
import styles from './DesktopTools.scss'

require('velocity-animate')
require('velocity-animate/velocity.ui')
import { VelocityTransitionGroup, velocityHelpers } from 'velocity-react'

const Animations = {
  // Register these with UI Pack so that we can use stagger later.
  In: velocityHelpers.registerEffect({
    calls: [
      [{
        right: ['0%', '100%']
      }, 1, {
        easing: 'ease-in',
        display: 'block',
      }]
    ],
  }),

  Out: velocityHelpers.registerEffect({
    calls: [
      [{
        right: ['100%', '0%']
      }, 1, {
        easing: 'ease-out',
        display: 'block',
      }]
    ],
  }),
};

const enterAnimation = {
  animation: Animations.In,
  stagger: 0,
  duration: 1000,
  display: 'block'
};

const leaveAnimation = {
  animation: Animations.Out,
  stagger: 0,
  duration: 1000,
  display: 'block'
};

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
    //return cloneElement(Children.only(this.props.children),
    //    {style:{position: 'absolute', width: '100%', height: '100%'}})
  }
}

class AnimatedMatch extends Component {
  render() {
    const {component, type} = this.props
    const {activePage, lastAction} = this.context
    return (<HistoryMatch {...this.props} children={({matched, ...props}) => {

      // TODO: Add this to the library?
      const isOnPage = matched && activePage.url === props.pathname

      /*
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
       */

      if (lastAction === 'switch-to-container') {
        return isOnPage ? (<Page key={props.pathname}>
              {createElement(component, props)}
            </Page>) : <div></div>
      }
      else {

        return (<VelocityTransitionGroup
            component="div"
            enter={enterAnimation} leave={leaveAnimation}
        >

            {isOnPage ? <div style={{position: 'absolute', width: '100%', height: '100%'}}>
                  {createElement(component, props)}
                </div> : ''}

        </VelocityTransitionGroup>)
      }

    }}/>)
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