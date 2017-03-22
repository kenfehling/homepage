import React from 'react'
import styles from './DesktopSocial.scss'
import {sites} from '../../constants/social'

const DesktopSocial = () => (
  <div className={styles.container}>
    {sites.map(({name, color, url, icon}) => (
      <a key={name} target='_blank' href={url} className='icon'>
        <img src={require('img/icons/' + icon)} />
        <div className='text' style={{color}}>{name}</div>
      </a>
    ))}
  </div>
)

export default DesktopSocial