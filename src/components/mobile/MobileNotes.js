import React from 'react'
import * as styles from './MobileNotes.scss'
import MobilePage from './MobilePage'
import {GITHUB_REPO} from '../../constants/links'

const MobileNotes = ({isDesktop, useNa}) => (
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
      <div className='title'>react-router-nested-history</div>
      <div>Handles the windows, tabs, browser history, and transition animations</div>
      <br />
      <div className='title'>react-designable-audio-player</div>
      <div>Used for the desktop and mobile music players</div>
      <br />
      <div>
        Source code: <a target="_blank" href={GITHUB_REPO}>GitHub</a>
      </div>
    </div>
  </MobilePage>
)

export default MobileNotes