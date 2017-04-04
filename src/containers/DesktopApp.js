import React from 'react'
import DesktopWindow from '../components/desktop/DesktopWindow'
import IFrameWindow from '../components/desktop/IFrameWindow'
import Editor from '../components/desktop/Editor'
import Terminal from '../components/desktop/Terminal'
import Audio from '../components/desktop/Audio'
import DesktopTools from '../components/desktop/DesktopTools'
import DesktopSocial from '../components/desktop/DesktopSocial'
import Mobile from '../components/shared/Mobile'
import Dialer from '../components/desktop/Dialer'
import Dock from '../components/desktop/Dock'
import {WindowGroup} from 'react-router-nested-history'
import ContainerWindow from '../components/desktop/DesktopContainerWindow'
import SimpleRedirect from '../components/shared/SimpleRedirect'
import {redirectMobileToDesktop} from '../utils/mobile'
import styles from './DesktopApp.scss'

const windows = [
  {name: 'Map'},
  //{name: 'Terminal'},
  {name: 'Tools'},
  {name: 'Editor'},
  {name: 'Social'},
  {name: 'Audio'},
  {name: 'PDF'},
  //{name: 'Dialer'},
  {name: 'Mobile', container: 'mobile'}
]

const middle = -28

const DesktopApp = () => (
  <div className={styles.container}>
    {redirectMobileToDesktop('/contacts')}
    <SimpleRedirect from='/' to='/editor' />
    <SimpleRedirect from='/tools' to='/tools/All' />

    {/* <Splash /> */}

    <WindowGroup name='desktop'>
      <IFrameWindow name="PDF" right={5} top={5}
                    src='/static/Ken_Fehling-resume.pdf' />
      <ContainerWindow name="Editor" visible={true} center={0} middle={middle}>
        <Editor />
      </ContainerWindow>
      <IFrameWindow name="Map" left={10} middle={middle}
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d162592.24519068224!2d-73.99662330680499!3d40.70626928598335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1474841748950" />
      /*
      <ContainerWindow name="Terminal" right={150} middle={120}>
        <Terminal />
      </ContainerWindow>
      */
      <ContainerWindow name="Audio" right={200} middle={-120}>
        <Audio />
      </ContainerWindow>
      <DesktopWindow name="Mobile" center={-200} middle={50}
                     container='mobile'>
        <Mobile isDesktop={true} />
      </DesktopWindow>
      <DesktopWindow name="Tools" left={10} top={10}>
        <DesktopTools />
      </DesktopWindow>
      <ContainerWindow name="Social" right={10} bottom={10}>
        <DesktopSocial />
      </ContainerWindow>
      /*
      <ContainerWindow name="Dialer" right={100} bottom={100}>
        <Dialer />
      </ContainerWindow>
      */
      <Dock windows={windows} />
    </WindowGroup>
  </div>
)

export default DesktopApp