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
import Contacts from '../mobile/Contacts'
import {devicePath} from '../../utils/mobile'

const apps = [
  {name: 'Tools'},
  {name: 'Music'},
  {name: 'Notes'},
  {name: 'Social'},
  {name: 'Contacts'}
]

const SimpleWindow = ({name, isDefault=false, isDesktop, navBar=true,
  navClassName='', path, children}) => (
  <ContainerWindow name={name}
                   isDefault={isDefault}
                   path={path}
                   children={children}
  />
)
const LowLevelWindow = ({name, isDesktop, children}) => (
  <MobileWindow name={name} isDesktop={isDesktop} children={children} />
)

const Mobile = ({isDesktop}) => (
  <div className={styles.container}>
    <WindowGroup name='mobile' allowInterContainerHistory={true}>
      <div className='phone'>
        <SimpleWindow isDefault={true} name='Home' path={devicePath('/', isDesktop)}>
          <HomeScreen apps={apps.map(app => app.name)} isDesktop={isDesktop} />
        </SimpleWindow>
        <LowLevelWindow name='Tools' isDesktop={isDesktop}>
          <MobileTools isDesktop={isDesktop} />
        </LowLevelWindow>
        <SimpleWindow name="Music" >
          <MobileAudio isDesktop={isDesktop} />
        </SimpleWindow>
        <SimpleWindow name="Notes">
          <MobileNotes isDesktop={isDesktop} />
        </SimpleWindow>
        <SimpleWindow name="Social">
          <MobileSocial isDesktop={isDesktop} />
        </SimpleWindow>
        <LowLevelWindow name='Contacts' isDesktop={isDesktop}>
          <Contacts isDesktop={isDesktop} />
        </LowLevelWindow>
      </div>
    </WindowGroup>
  </div>
)

Mobile.propTypes = {
  isDesktop: PropTypes.bool
}

export default Mobile