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

const apps = [
  {name: 'Tools'},
  {name: 'Music'},
  {name: 'Notes'},
  {name: 'Social'},
  {name: 'Contacts'}
]

const SimpleWindow = ({name, isDefault=false, topBar, navBar=true,
  navClassName='', path, children}) => (
  <ContainerWindow name={name}
                   useTopBar={topBar}
                   useNavBar={navBar}
                   navClassName={navClassName}
                   isDefault={isDefault}
                   path={path}
                   children={children}
  />
)
const LowLevelWindow = ({name, topBar, children}) => (
  <MobileWindow name={name} useTopBar={topBar} children={children} />
)

const Mobile = ({useTopBar=true}) => {

  return (
    <div className={styles.container}>
      <WindowGroup name='mobile' allowInterContainerHistory={true}>
        <div className='phone'>
          <SimpleWindow isDefault={true}
                        name='Home'
                        path='/mobile'
                        navBar={false}
                        navClassName={styles.homeScreenNav}
                        topBar={useTopBar}
          >
            <HomeScreen apps={apps.map(app => app.name)}/>
          </SimpleWindow>
          <LowLevelWindow name='Tools' topBar={useTopBar}>
            <MobileTools useTopBar={useTopBar} />
          </LowLevelWindow>
          <SimpleWindow name="Music" topBar={useTopBar}><MobileAudio /></SimpleWindow>
          <SimpleWindow name="Notes" topBar={useTopBar}><MobileNotes /></SimpleWindow>
          <SimpleWindow name="Social" topBar={useTopBar}><MobileSocial /></SimpleWindow>
          <LowLevelWindow name='Contacts' topBar={useTopBar}>
            <Contacts useTopBar={useTopBar} />
          </LowLevelWindow>
        </div>
      </WindowGroup>
    </div>
  )
}

Mobile.propTypes = {
  useTopBar: PropTypes.bool
}

export default Mobile