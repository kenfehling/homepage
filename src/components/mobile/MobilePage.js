import React, {PropTypes} from 'react'
import {BackLink} from 'react-router-nested-history'
import styles from './MobilePage.scss'
import '../../utils/string'

const MobilePage = ({title, children, backLinkText}) => (
  <div className={styles.container}>
    <div className='nav'>
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
    <div className='content'>
      {children}
    </div>
  </div>
)

MobilePage.propTypes = {
  title: PropTypes.string.isRequired,
  backLinkText: PropTypes.string
}

export default MobilePage