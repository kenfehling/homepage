import React from 'react'
import DesktopWindow from '../components/desktop/DesktopWindow'
import Editor from '../components/desktop/Editor'
import Splash from '../components/desktop/Splash'
import Audio from '../components/desktop/Audio'
import Tools from '../components/desktop/DesktopTools'
import Social from '../components/desktop/DesktopSocial'
import Mobile from '../components/shared/Mobile'
import PDF from '../components/desktop/PDF'
import Email from '../components/desktop/DesktopEmail'
import Dock from '../components/desktop/Dock'
import {WindowGroup} from 'react-router-nested-history'
import ContainerWindow from '../components/desktop/DesktopContainerWindow'
import SimpleRedirect from '../components/shared/SimpleRedirect'
import {redirectMobileToDesktop} from '../utils/mobile'
import {SPLASH_DURATION} from '../constants/settings'
import * as styles from './DesktopApp.scss'
//import IFrameWindow from '../components/desktop/IFrameWindow'
//import Terminal from '../components/desktop/Terminal'
//import Dialer from '../components/desktop/Dialer'

const windows = [
  //{name: 'Map'},
  //{name: 'Terminal'},
  {name: 'Editor', bounce: true},
  {name: 'Tools'},
  {name: 'Music'},
  {name: 'PDF'},
  //{name: 'Dialer'},
  {name: 'Email'},
  {name: 'Social'},
  {name: 'Mobile', container: 'mobile'}
]

const middle = -28

const DesktopApp = () => (
  <div className={styles.container} style={{height: '100%'}}>
    {redirectMobileToDesktop('/contacts')}
    <SimpleRedirect from='/tools' to='/tools/All' />
    {SPLASH_DURATION > 0 && <Splash />}
    <WindowGroup name='desktop'>
      <ContainerWindow name="PDF" right={5} top={5}>
        <PDF />
      </ContainerWindow>
      <ContainerWindow name="Editor" center={0} middle={middle}>
        <Editor />
      </ContainerWindow>
      {/*
      <IFrameWindow name="Map" left={10} middle={middle}
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d162592.24519068224!2d-73.99662330680499!3d40.70626928598335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1474841748950" />
      <ContainerWindow name="Terminal" right={150} middle={120}>
        <Terminal />
      </ContainerWindow>
      */}
      <ContainerWindow name="Music" right={200} middle={-120}>
        <Audio />
      </ContainerWindow>
      <DesktopWindow name="Mobile" center={-200} middle={50}
                     container='mobile'>
        <Mobile isDesktop={true} />
      </DesktopWindow>
      <DesktopWindow name="Tools" left={10} top={10}>
        <Tools />
      </DesktopWindow>
      <ContainerWindow name="Email" right={100} middle={middle}>
        <Email />
      </ContainerWindow>
      <ContainerWindow name="Social" right={10} bottom={10}>
        <Social />
      </ContainerWindow>
      {/*
      <ContainerWindow name="Dialer" right={100} bottom={100}>
        <Dialer />
      </ContainerWindow>
      */}
      <Dock windows={windows} />
    </WindowGroup>
  </div>
)

export default DesktopApp