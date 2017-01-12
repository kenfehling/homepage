import React, { Component, PropTypes, createElement } from 'react'
import { Match, Redirect } from 'react-router'
import { Container, ContainerGroup, HistoryMatch} from 'react-router-nested-history'
import DesktopToolsHeader from "./DesktopToolsHeader"
import DesktopToolsMaster from "./DesktopToolsMaster"
import DesktopToolsDetail from "./DesktopToolsDetail"
import TransitionGroup from 'react-addons-transition-group'
import { categories } from '../../constants/tools'
import styles from './DesktopTools.scss'
import GSAP from 'react-gsap-enhancer'
import { TweenMax } from 'gsap'

const createSlideAnimation = (utils, x1, x2) =>
    TweenMax.fromTo(utils.target, 1,
        {xPercent: x1},
        {xPercent: x2, onComplete: utils.options.callback}
    )

const createFadeAnimation = (utils, opacity1, opacity2) =>
    TweenMax.fromTo(utils.target, 1/3,
        {opacity: opacity1},
        {opacity: opacity2, onComplete: utils.options.callback}
    )

const enterStageRight = (utils) => createSlideAnimation(utils, 100, 0)
const enterStageLeft = (utils) => createSlideAnimation(utils, -100, 0)
const exitStateRight = (utils) => createSlideAnimation(utils, 0, 100)
const exitStateLeft = (utils) => createSlideAnimation(utils, 0, -100)
const fadeIn = (utils) => createFadeAnimation(utils, 0, 1)
const fadeOut = (utils) => createFadeAnimation(utils, 1, 0)

const Page = GSAP()(class extends Component {
  static contextTypes = {
    lastAction: PropTypes.string.isRequired
  }

  getEnterAnimation() {
    const {lastAction} = this.context
    switch (lastAction) {
      case 'back':
      case 'top': return enterStageLeft
      case 'switch-to-container': return fadeIn
      default: return enterStageRight
    }
  }

  getLeaveAnimation() {
    const {lastAction} = this.context
    switch (lastAction) {
      case 'back':
      case 'top': return exitStateRight
      case 'switch-to-container': return fadeOut
      default: return exitStateLeft
    }
  }

  triggerAnimation(animation, callback) {
    if (animation) {
      this.addAnimation(animation, {callback})
    }
    else {
      callback()
    }
  }

  componentWillEnter(callback) {
    this.triggerAnimation(this.getEnterAnimation(), callback)
  }

  componentWillLeave(callback) {
    this.triggerAnimation(this.getLeaveAnimation(), callback)
  }

  render() {
    return <div style={{position: 'absolute', width: '100%', height: '100%'}}>
      {this.props.children}
    </div>
  }
})

class AnimatedMatch extends Component {
  render() {
    const {component} = this.props
    const {activePage} = this.context
    return (<HistoryMatch {...this.props} children={({ matched, ...props }) => {

      // TODO: Add this to the library?
      const isOnPage = () => matched && activePage.url === props.pathname

      return (<TransitionGroup component='div'
      style={{position: 'absolute', width: '100%', height: '100%'}}>
        {isOnPage() && <Page key={props.pathname}>
          {createElement(component, props)}
        </Page>}
      </TransitionGroup>)
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
      <div style={{height: '100%'}}>
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
      </div>
    </ContainerGroup>
  </div>
)