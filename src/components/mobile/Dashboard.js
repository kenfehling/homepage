import React from 'react'
import {HistoryLink} from 'react-router-nested-history'
import MobilePage from './MobilePage'
import styles from './Dashboard.scss'

const DashboardItem = ({icon, name, link}) => (
  <HistoryLink to={link}>
    <div className="item">
      <img className="icon" src={require('img/icons/' + icon)} />
      <div className="name">{name}</div>
    </div>
  </HistoryLink>
)

export default () => (
  <MobilePage title='Ken Fehling'>
    <div className={styles.container}>
      <div className="section">
        <div className="title">Programming</div>
        <div className="items">
          <DashboardItem icon='dock/Tools.svg' name="Tools" link='/mobile/tools'/>
          <DashboardItem icon='dock/Projects.svg' name="Projects" link='/mobile/projects'/>
        </div>
      </div>
      <div className="section">
        <div className="title">Music</div>
        <div className="items">
          <DashboardItem icon='dock/Audio.svg' name="Listen" link='/mobile/audio'/>
        </div>
      </div>
      <div className="section">
        <div className="title">Resume</div>
        <div className="items">
          <DashboardItem icon='dock/Editor.svg' name="HTML" link='/mobile/editor'/>
          <DashboardItem icon='dock/PDF.svg' name="PDF" link='/mobile/pdf'/>
        </div>
      </div>
      <div className="section">
        <div className="title">Social</div>
        <div className="items">
          <DashboardItem icon='social/GitHub.svg' name="GitHub" link='http://github.com'/>
          <DashboardItem icon='social/Twitter.svg' name="Twitter" link='http://twitter.com'/>
          <DashboardItem icon='social/LinkedIn.svg' name="LinkedIn" link='http://linkedin.com'/>
        </div>
      </div>
    </div>
  </MobilePage>
)