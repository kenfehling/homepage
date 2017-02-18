import {Component} from 'react'
import Window from '../components/desktop/Window'
import IFrameWindow from '../components/desktop/IFrameWindow'
import Editor from '../components/desktop/Editor'
import Terminal from '../components/desktop/Terminal'
import Audio from '../components/desktop/Audio'
import DesktopTools from '../components/desktop/DesktopTools'
import Mobile from '../components/shared/Mobile'
import Dock from '../components/desktop/Dock'
import {WindowGroup} from 'react-router-nested-history'
import ContainerWindow from '../components/desktop/ContainerWindow'
import Splash from '../components/desktop/Splash'
import styles from './DesktopApp.scss'

const menuItems = [
  { name: 'File' }
]

export default class DesktopApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentWindowName: null,
    }
  }

  onDockIconClick(name) {
    this.setState({
      currentWindowName: name.toLowerCase()
    })
  }

  render() {
    return (
      <div className={styles.container}>
        {/*
         <Match pattern='/' exactly
         render={() => <Redirect to="/tools" />} />
         <Match pattern='/tools' exactly
         render={() => <Redirect to="/tools/All" />} />
        */}
        <Splash />
        <WindowGroup name='desktop' currentContainerName={this.state.currentWindowName}>
          <IFrameWindow name="PDF" src="/public/Ken_Fehling_resume.pdf" />
          <ContainerWindow name="Editor" menuItems={menuItems} bgColor="#FFF" fgColor="#000">
            <Editor />
          </ContainerWindow>
          <IFrameWindow name="Map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d162592.24519068224!2d-73.99662330680499!3d40.70626928598335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1474841748950" />
          <ContainerWindow name="Terminal" menuItems={menuItems} bgColor="#000" fgColor="#3F3">
            <Terminal />
          </ContainerWindow>
          <ContainerWindow name="Audio" bgColor="#003" fgColor="#36F" usePadding={false}>
            <Audio />
          </ContainerWindow>
          <ContainerWindow name="Mobile" usePadding={false}>
            <Mobile useTopBar={true} />
          </ContainerWindow>
          <Window name="Tools" bgColor="#FFF" fgColor="#000" usePadding={false}>
            <DesktopTools />
          </Window>
        </WindowGroup>
        <Dock onIconClick={this.onDockIconClick.bind(this)} />
      </div>
    )
  }
}