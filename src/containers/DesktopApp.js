import React from 'react'
import {Component} from 'react'
import DesktopWindow from '../components/desktop/DesktopWindow'
import IFrameWindow from '../components/desktop/IFrameWindow'
import Editor from '../components/desktop/Editor'
import Terminal from '../components/desktop/Terminal'
import Audio from '../components/desktop/Audio'
import DesktopTools from '../components/desktop/DesktopTools'
import DesktopSocial from '../components/desktop/DesktopSocial'
import Mobile from '../components/shared/Mobile'
import Dock from '../components/desktop/Dock'
import {WindowGroup} from 'react-router-nested-history'
import ContainerWindow from '../components/desktop/DesktopContainerWindow'
import styles from './DesktopApp.scss'
import {redirectMobileToDesktop} from '../utils/mobile'

const windows = [
  {name: 'Map'},
  {name: 'Terminal'},
  {name: 'Tools'},
  {name: 'Editor'},
  {name: 'Social'},
  {name: 'Audio'},
  {name: 'PDF'},
  {name: 'Mobile', container: 'mobile'}
]


const DesktopApp = () => (
  <div className={styles.container}>
    {redirectMobileToDesktop('/contacts')}
    {/*
     <Match pattern='/' exactly
     render={() => <Redirect to="/tools" />} />
     <Match pattern='/tools' exactly
     render={() => <Redirect to="/tools/All" />} />
     */}

    {/* <Splash /> */}

    <WindowGroup name='desktop'>
      <IFrameWindow name="PDF" x={200} y={25}
                    src='/static/Ken_Fehling-resume.pdf' />
      <ContainerWindow name="Editor" x={50} y={100}
                       bgColor="#2B2B2B" fgColor="#BABABA">
        <Editor />
      </ContainerWindow>
      <IFrameWindow name="Map" x={0} y={200}
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d162592.24519068224!2d-73.99662330680499!3d40.70626928598335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1474841748950" />
      <ContainerWindow name="Terminal" x={300} y={100}
                       bgColor="#000" fgColor="#3F3">
        <Terminal />
      </ContainerWindow>
      <ContainerWindow name="Audio" x={260} y={30}
                       bgColor="#003" fgColor="#36F">
        <Audio />
      </ContainerWindow>
      <DesktopWindow visible={true} name="Mobile" x={250} y={10}
                     container='mobile'>
        <Mobile isDesktop={true} />
      </DesktopWindow>
      <DesktopWindow name="Tools" x={300} y={10}
                     bgColor="#FFF" fgColor="#000">
        <DesktopTools />
      </DesktopWindow>
      <ContainerWindow name="Social" x={150} y={100}
                       bgColor="#FFF" fgColor="#000">
        <DesktopSocial />
      </ContainerWindow>
      <Dock windows={windows} />
    </WindowGroup>
  </div>
)

export default DesktopApp