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

const Mobile = ({useTopBar}) => {
  const SimpleWindow = ({name, isDefault=false, topBar=useTopBar, navBar=true,
                         navClassName='', path=undefined, children}) => (
    <ContainerWindow name={name}
                     useTopBar={topBar}
                     useNavBar={navBar}
                     navClassName={navClassName}
                     isDefault={isDefault}
                     path={path}
    >
      {children}
    </ContainerWindow>
  )
  const LowLevelWindow = ({name, topBar=useTopBar, children}) => (
    <MobileWindow name={name} useTopBar={topBar}>
      {children}
    </MobileWindow>
  )
  return (
    <div className={styles.container}>
      <WindowGroup name='mobile' allowInterContainerHistory={true}>
        <SimpleWindow isDefault={true}
                      name='Home'
                      path='/mobile'
                      navBar={false}
                      navClassName={styles.homeScreenNav}
        >
          <HomeScreen apps={apps.map(app => app.name)}/>
        </SimpleWindow>
        <LowLevelWindow name='Tools'>
          <MobileTools useTopBar={useTopBar} />
        </LowLevelWindow>
        <SimpleWindow name="Music"><MobileAudio /></SimpleWindow>
        <SimpleWindow name="Notes"><MobileNotes /></SimpleWindow>
        <SimpleWindow name="Social"><MobileSocial /></SimpleWindow>
      </WindowGroup>
    </div>
  )
}

Mobile.propTypes = {
  children: PropTypes.object,
  useTopBar: PropTypes.bool
}

export default Mobile