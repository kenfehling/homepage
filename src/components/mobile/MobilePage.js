import React from 'react'
import PropTypes from 'prop-types'
import {BackLink} from 'react-router-nested-history'
import * as styles from './MobilePage.scss'
import '../../utils/string'
import Clock from '../shared/Clock'
import {unescapeName} from '../../utils/tools'

const TopBar = ({className=''}) => (
  <div className={`top-bar ${className}`}>
    <div className="network">
      <div>Network</div>
      <span className="icon wifi" />
    </div>
    <div className="time">
      <Clock format='%l:%M %p' />
    </div>
    <div className="battery-container">
      <span className="icon battery "/>
      <div>23%</div>
    </div>
  </div>
)

const NavBar = ({title, backLinkText, className=''}) => (
  <div className={`nav ${className}`}>
    <div className='back'>
      <BackLink>
        {({params}) => (
          <div className='link'>
            <span className="chevron-left" />
            <div className='text'>
              {(backLinkText ?
                (backLinkText instanceof Function ?
                  backLinkText({params}) :
                  backLinkText)
                 : params.app || 'Home').capitalize()}
            </div>
          </div>
        )}
      </BackLink>
    </div>
    <h1 className='title'>{title}</h1>
  </div>
)

const MobilePage = ({title='', children, backLinkText, isDesktop, useNavBar=true,
                     navClassName=''}) => (
  <div className={styles.container}>
    {isDesktop && <TopBar className={navClassName} />}
    {useNavBar && <NavBar title={unescapeName(title)}
                          backLinkText={backLinkText}
                          className={navClassName} />}
    <div className='content'>
      {children}
    </div>
  </div>
)

MobilePage.propTypes = {
  title: PropTypes.string,
  backLinkText: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  isDesktop: PropTypes.bool,
  useNavBar: PropTypes.bool,
  navClassName: PropTypes.string
}

export default MobilePage