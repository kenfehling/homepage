import React from 'react'
import * as styles from './DesktopEmail.scss'
import {EMAIL} from '../../constants/links'
import Head from '../shared/Head'
const openIcon = require('img/icons/open.svg')
const copyIcon = require('img/icons/copy.svg')

const DesktopEmail = () => (
  <div className={styles.container}>
    <div>
      Ken Fehling &lt;<a href={`mailto:${EMAIL}`}>{EMAIL}</a>&gt;
    </div>
    <div className='icons'>
      <a target='_blank' href={`mailto:${EMAIL}`} className='icon'>
        <img alt={name} src={openIcon} />
        <div className='text'>Open in email client</div>
      </a>
      <a target='_blank' className='icon'
         onClick={() => navigator.clipboard.writeText(EMAIL)}>
        <img alt={name} src={copyIcon} />
        <div className='text'>Copy email address</div>
      </a>
    </div>
    <Head title='Ken Fehling - Email'
          description='Contact Ken Fehling'
          keywords="contact, email"
    />
  </div>
)

export default DesktopEmail