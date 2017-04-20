import React from 'react'
import * as styles from './PDF.scss'
import {RESUME_FILE} from '../../constants/links'
import Head from '../shared/Head'

const FILE = '/static/' + RESUME_FILE
const DOWNLOAD = '/api/' + RESUME_FILE

const PDF = () => (
  <div className={styles.container}>
    <img className='resume'
         src={require('img/Ken_Fehling-resume.png')}
    />
    <a className='download btn' href={DOWNLOAD} target='_top'>
      <i className="fa fa-download fa"
          title='Download'
          aria-hidden="true"
      />
    </a>
    <a className='new-window btn' href={FILE} target='_blank'>
      <i className="fa fa-window-maximize"
         title='Open in a new window'
         aria-hidden="true"
      />
    </a>
    <Head title='Ken Fehling - Resume'
          description='My resume'
          keywords="resume, CV"
    />
  </div>
)

export default PDF