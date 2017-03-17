import React, {PropTypes} from 'react'
import {BackLink} from 'react-router-nested-history'
import styles from './MobilePage.scss'
import '../../utils/string'

const timeFormat = {hour: '2-digit', minute:'2-digit'}
const TopBar = ({className=''}) => (
  <div className={`top-bar ${className}`}>
    <div className="network">
      <div>Network</div>
      <i className="fa fa-wifi" />
    </div>
    <div className="time">
      {new Date().toLocaleTimeString(navigator.language, timeFormat)}
    </div>
    <div className="battery">
      <i className="fa fa-battery-full "/>
      <div>96%</div>
    </div>
  </div>
)

const NavBar = ({title, backLinkText, className=''}) => (
  <div className={`nav ${className}`}>
    <div className='back'>
      <BackLink>
        {({params:{app='Home'}}) => (
          <div className='link'>
            <i className="fa fa-chevron-left" />
            <div className='text'>{(backLinkText || app).capitalize()}</div>
          </div>
        )}
      </BackLink>
    </div>
    <h1 className='title'>{title}</h1>
  </div>
)

const MobilePage = ({title='', children, backLinkText, useTopBar, useNavBar=true,
                     navClassName=''}) => (
  <div className={styles.container}>
    {useTopBar && <TopBar className={navClassName} />}
    {useNavBar && <NavBar title={title}
                          backLinkText={backLinkText}
                          className={navClassName} />}
    <div className='content'>
      {children}
    </div>
  </div>
)

MobilePage.propTypes = {
  title: PropTypes.string,
  backLinkText: PropTypes.string,
  useTopBar: PropTypes.bool,
  useNavBar: PropTypes.bool,
  navClassName: PropTypes.string
}

export default MobilePage