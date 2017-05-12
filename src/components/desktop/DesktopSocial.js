import React from 'react'
import * as styles from './DesktopSocial.scss'
import {sites} from '../../constants/social'
import Head from '../shared/Head'

const DesktopSocial = () => (
  <div className={styles.container}>
    {sites.map(({name, color, url, icon}) => (
      <a key={name} target='_blank' href={url} className='icon'>
        <img alt={name} src={require('img/icons/' + icon)} />
        <div className='text' style={{color}}>{name}</div>
      </a>
    ))}
    <Head title='Ken Fehling - Social'
          description="Links to my Twitter, GitHub, LinkedIn, etc."
          keywords="social, Twitter, GitHub, LinkedIn, Stack Overflow"
    />
  </div>
)

export default DesktopSocial