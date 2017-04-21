import React from 'react'
import * as styles from './MobileNotes.scss'
import MobilePage from './MobilePage'
import {gitHubLink as _gitHubLink} from '../../utils/links'
import {GITHUB_REPO} from '../../constants/links'
import Head from '../shared/Head'

const gitHubLink = (name) => _gitHubLink(name, 'title')

const MobileNotes = ({isDesktop}) => (
  <MobilePage title='Notes' isDesktop={isDesktop} navClassName={styles.nav}>
    <div className={styles.container}>
      <div>Ken Fehling</div>
      <div>Personal home page</div>
      <br />
      <div>
        This mobile and desktop versions of this site was built using React and
        some other libraries, two of which I authored:
      </div>
      <br />
      {gitHubLink('react-router-nested-history')}
      <div>Handles the windows, tabs, browser history, and transition animations</div>
      <br />
      {gitHubLink('react-designable-audio-player')}
      <div>Used for the desktop and mobile music players</div>
      <br />
      <div>
        Source code: <a target="_blank" href={GITHUB_REPO}>GitHub</a>
      </div>
    </div>
    <Head title='Ken Fehling - Notes'
          description='This site was built using React and some other libraries, two of which I authored:'
          keywords="Ken Fehling, React, libraries"
    />
  </MobilePage>
)

export default MobileNotes