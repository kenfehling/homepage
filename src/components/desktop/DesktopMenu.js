import React from 'react'
import styles from './DesktopMenu.scss'

const DesktopMenu = () => (
  <div className={styles.container}>
    <div className='logo'>
      <img src={require('img/icons/desktop/KF.svg')} />
    </div>
    <div className='left'>
      <div>Applications</div>
      <div>Settings</div>
    </div>
    <div className='right'>
      <div className='time'>
        Fri May 5&nbsp;
        12:32 PM
      </div>
    </div>
  </div>
)

export default DesktopMenu