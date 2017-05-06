import React from 'react'
import styles from './DesktopFrame.scss'

const DesktopFrame = () => (
  <div className={styles.container}>
    <div className='menu'>
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
    <div className='left' />
    <div className='right' />
    <div className='bottom' />
  </div>
)

export default DesktopFrame