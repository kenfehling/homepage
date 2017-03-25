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

const Mobile = ({isDesktop}) => (
  <div className={styles.container}>
    <WindowGroup name='mobile' allowInterContainerHistory={true}>
      <div className='phone'>
        <ContainerWindow isDefault={true}
                         name='Home'
                         path={devicePath('', isDesktop)}
                         patterns={[devicePath('', isDesktop)]}
        >
          <HomeScreen apps={apps.map(app => app.name)} isDesktop={isDesktop} />
        </ContainerWindow>
        <MobileWindow name='Tools' isDesktop={isDesktop}>
          <MobileTools isDesktop={isDesktop} />
        </MobileWindow>
        <ContainerWindow name="Music" >
          <MobileAudio isDesktop={isDesktop} />
        </ContainerWindow>
        <ContainerWindow name="Notes">
          <MobileNotes isDesktop={isDesktop} />
        </ContainerWindow>
        <ContainerWindow name="Social">
          <MobileSocial isDesktop={isDesktop} />
        </ContainerWindow>
        <MobileWindow name='Contacts' isDesktop={isDesktop}>
          <Contacts isDesktop={isDesktop} />
        </MobileWindow>
      </div>
    </WindowGroup>
  </div>
)

Mobile.propTypes = {
  isDesktop: PropTypes.bool
}

export default Mobile