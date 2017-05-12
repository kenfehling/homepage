import React from 'react'
import * as styles from './PDF.scss'
import {RESUME_FILE} from '../../constants/links'
import Head from '../shared/Head'

const FILE = '/static/' + RESUME_FILE
const DOWNLOAD = '/api/' + RESUME_FILE

const PDF = () => (
  <div className={styles.container}>
    <img className='resume'
         alt='Resume'
         src={require('img/Ken_Fehling-resume.png')}
    />
    <a className='download btn' href={DOWNLOAD} target='_top'>
      <span className="download-icon" title='Download' />
    </a>
    <a className='new-window btn' href={FILE} target='_blank'>
      <span className="new-window-icon" title='Open in a new window' />
    </a>
    <Head title='Ken Fehling - Resume'
          description='My resume'
          keywords="resume, CV"
    />
  </div>
)

export default PDF