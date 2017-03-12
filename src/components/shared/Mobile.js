import React, {Component, PropTypes} from 'react'
import {WindowGroup} from 'react-router-nested-history'
import styles from './Mobile.scss'
import MobileWindow from '../mobile/MobileWindow'
import MobileAudio from '../mobile/MobileAudio'
import HomeScreen from '../mobile/HomeScreen'
import MobileTools from '../mobile/MobileTools'

const apps = [
  {
    name: 'Audio',
    component: MobileAudio
  },
  {
    name: 'Tools',
    component: MobileTools,
    patterns: [
      '/mobile/tools',
      '/mobile/tools/:category',
      '/mobile/tools/:category/:tool'
    ]
  }
]

const timeFormat = {hour: '2-digit', minute:'2-digit'}
const TopBar = () => (
  <div className="top-bar">
    <div className="network">
      <div>Network</div>
      <i className="fa fa-wifi" />
    </div>
    <div className="time">
      {new Date().toLocaleTimeString(navigator.language, timeFormat)}
    </div>
    <div className="battery">
      <i className="fa fa-battery-full "/>
      <div>96%</div>
    </div>
  </div>
)

const Mobile = ({useTopBar}) => (
  <div className={styles.container}>
    {useTopBar ? <TopBar /> : ''}
    <WindowGroup name='mobile' allowInterContainerHistory={true}>
      <MobileWindow isDefault={true} name='Home' path='/mobile'>
        <HomeScreen apps={apps.map(app => app.name)} />
      </MobileWindow>
      {apps.map(({name, component}) =>
        <MobileWindow key={name} name={'mobile_' + name} component={component} />
      )}
    </WindowGroup>
  </div>
)

Mobile.propTypes = {
  children: PropTypes.object,
  useTopBar: PropTypes.bool
}

export default Mobile