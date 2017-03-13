import React, {Component, PropTypes} from 'react'
import {WindowGroup} from 'react-router-nested-history'
import styles from './Mobile.scss'
import MobileWindow from '../mobile/MobileWindow'
import ContainerWindow from '../mobile/MobileContainerWindow'
import HomeScreen from '../mobile/HomeScreen'
import MobileTools from '../mobile/MobileTools'
import MobileAudio from '../mobile/MobileAudio'
import MobileSocial from '../mobile/MobileSocial'
import MobileNotes from '../mobile/MobileNotes'

const apps = [
  {name: 'Tools'},
  {name: 'Music'},
  {name: 'Notes'},
  {name: 'Social'},
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
      <ContainerWindow isDefault={true} name='Home' path='/mobile'>
        <HomeScreen apps={apps.map(app => app.name)} />
      </ContainerWindow>
      <MobileWindow name='Tools'><MobileTools /></MobileWindow>
      <ContainerWindow name="Music"><MobileAudio /></ContainerWindow>
      <ContainerWindow name="Notes"><MobileNotes /></ContainerWindow>
      <ContainerWindow name="Social"><MobileSocial /></ContainerWindow>
    </WindowGroup>
  </div>
)

Mobile.propTypes = {
  children: PropTypes.object,
  useTopBar: PropTypes.bool
}

export default Mobile