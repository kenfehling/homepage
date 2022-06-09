import React from 'react'
import DesktopFrame from '../components/desktop/DesktopFrame'
import DesktopWindow from '../components/desktop/DesktopWindow'
import Editor from '../components/desktop/Editor'
import Splash from '../components/desktop/Splash'
import Audio from '../components/desktop/Audio'
import Tools from '../components/desktop/DesktopTools'
import Social from '../components/desktop/DesktopSocial'
import Projects from '../components/desktop/DesktopProjects'
import Mobile from '../components/shared/Mobile'
// import PDF from '../components/desktop/PDF'
import Email from '../components/desktop/DesktopEmail'
import Dock from '../components/desktop/Dock'
import {WindowGroup} from 'react-router-nested-history'
import ContainerWindow from '../components/desktop/DesktopContainerWindow'
import SimpleRedirect from '../components/shared/SimpleRedirect'
import {redirectMobileToDesktop} from '../utils/mobile'
import {SPLASH_DURATION} from '../constants/settings'
import './App.scss'
import * as styles from './DesktopApp.scss'
import {apps} from '../constants/desktop'
import {connect} from 'react-redux'
import AppHead from '../components/shared/AppHead'
//import IFrameWindow from '../components/desktop/IFrameWindow'
//import Terminal from '../components/desktop/Terminal'
//import Dialer from '../components/desktop/Dialer'

const top = 26
const middle = -28
const bottom = 5
const left = 5
const right = 5

const DesktopApp = ({background}) => (
  <div className={styles.container} style={{height: '100%'}}>
    <AppHead />
    {redirectMobileToDesktop('/contacts')}
    <SimpleRedirect from='/tools' to='/tools/All' />
    {SPLASH_DURATION > 0 && <Splash />}
    <div className={'inner-container ' + background}>
      <WindowGroup name='desktop'>
        {/* <ContainerWindow name="PDF" right={right + 5} top={top + 5}>
          <PDF />
        </ContainerWindow> */}
        <ContainerWindow name="Editor" center={0} middle={middle}>
          <Editor />
        </ContainerWindow>
        {/*
         <IFrameWindow name="Map" left={left + 10} middle={middle}
         src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d162592.24519068224!2d-73.99662330680499!3d40.70626928598335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1474841748950" />
         <ContainerWindow name="Terminal" right={right + 150} middle={120}>
         <Terminal />
         </ContainerWindow>
         */}
        <ContainerWindow name="Music" right={right + 200} middle={-120}>
          <Audio />
        </ContainerWindow>
        <DesktopWindow name="Mobile" center={-200} middle={50}
                       container='mobile'>
          <Mobile isDesktop={true} />
        </DesktopWindow>
        <DesktopWindow name="Tools" left={left + 10} top={top + 10}>
          <Tools />
        </DesktopWindow>
        <ContainerWindow name="Email" right={right + 100} middle={middle}>
          <Email />
        </ContainerWindow>
        <ContainerWindow name="Social" right={right + 10} bottom={bottom + 10}>
          <Social />
        </ContainerWindow>
        {/*
         <ContainerWindow name="Dialer" right={right + 100} bottom={bottom + 100}>
         <Dialer />
         </ContainerWindow>
         */}
        <DesktopWindow name="File Manager"
                       className='Projects'
                       container='desktop_projects' 
                       right={right + 10} top={top + 10}>
          <Projects />
        </DesktopWindow>
        <DesktopFrame />
        <Dock windows={apps} />
      </WindowGroup>
    </div>
  </div>
)

const mapStateToProps = (state) => ({
  background: state.background
})

export default connect(
  mapStateToProps
)(DesktopApp)