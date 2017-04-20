import React from 'react'
import Helmet from 'react-helmet'
import * as styles from './DesktopSocial.scss'
import {sites} from '../../constants/social'

const DesktopSocial = () => (
  <div className={styles.container}>
    {sites.map(({name, color, url, icon}) => (
      <a key={name} target='_blank' href={url} className='icon'>
        <img src={require('img/icons/' + icon)} />
        <div className='text' style={{color}}>{name}</div>
      </a>
    ))}
    <Helmet>
      <title>Ken Fehling - Social</title>
      <meta name='description'
            content="Links to my Twitter, GitHub, LinkedIn, etc."
      />
      <meta name="keywords"
            content="social, Twitter, GitHub, LinkedIn, Stack Overflow"
      />
    </Helmet>
  </div>
)

export default DesktopSocial