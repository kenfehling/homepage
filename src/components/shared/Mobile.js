import React, {Component, PropTypes} from 'react'
import {WindowGroup} from 'react-router-nested-history'
import styles from './Mobile.scss'
import MobileWindow from '../mobile/MobileWindow'
import Dashboard from '../mobile/Dashboard'
import MobileAudio from '../mobile/MobileAudio'
import HomeScreen from '../mobile/HomeScreen'

const TopBar = () => (
  <div className="top-bar">
    <div className="network">
      <div>Network</div>
      <i className="fa fa-wifi" />
    </div>
    <div className="time">
      {new Date().toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'})}
    </div>
    <div className="battery">
      <i className="fa fa-battery-full "/>
      <div>96%</div>
    </div>
  </div>
)

export default class Mobile extends Component {
  static propTypes = {
    children: PropTypes.object,
    useTopBar: PropTypes.bool
  }

  constructor(props) {
    super(props)
    this.state = {
      currentWindow: null
    }
  }

  render() {
    const {useTopBar} = this.props
    return (
      <div className={styles.container}>
        {useTopBar ? <TopBar /> : ''}
        <WindowGroup name='mobile' currentContainerName={this.state.currentWindow}>
          <MobileWindow name='Home' path='/mobile' isDefault={true}>
            {() => (
              <HomeScreen onIconClick={name => this.setState({currentWindow: name})} />
            )}
          </MobileWindow>
          <MobileWindow name='Audio' component={MobileAudio} />
        </WindowGroup>
      </div>
    )
  }

}