import React, {PropTypes} from 'react'
import {WindowGroup} from 'react-router-nested-history'
import * as styles from './Mobile.scss'
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
    <WindowGroup name='mobile'
                 allowInterContainerHistory={true}
                 hideInactiveContainers={true}
    >
      <div className='phone'>
        <ContainerWindow isDefault={true}
                         isDesktop={isDesktop}
                         name='Home'
                         title=''
                         path={devicePath('', isDesktop)}
                         patterns={[devicePath('', isDesktop)]}
        >
          <HomeScreen apps={apps.map(app => app.name)} isDesktop={isDesktop} />
        </ContainerWindow>
        <MobileWindow name='Tools' isDesktop={isDesktop}>
          <MobileTools isDesktop={isDesktop} />
        </MobileWindow>
        <ContainerWindow name="Music" isDesktop={isDesktop}>
          <MobileAudio isDesktop={isDesktop} />
        </ContainerWindow>
        <ContainerWindow name="Notes" isDesktop={isDesktop}>
          <MobileNotes isDesktop={isDesktop} />
        </ContainerWindow>
        <ContainerWindow name="Social" isDesktop={isDesktop}>
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