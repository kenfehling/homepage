import React, {PropTypes} from 'react'
import styles from './HomeScreen.scss'
import {HeaderLink} from 'react-router-nested-history'

const HomeScreen = ({apps}) => {
  return (
    <div className={styles.container}>
      <div className="inner-container">
        <div className="back-container"></div>
        <div className="front-container">
          {apps.map(app => (
            <HeaderLink className='icon'
                        key={app}
                        toContainer={'mobile_' + app.toLowerCase()}>
              <img src={require('img/icons/mobile/home/' + app + '.svg')} />
              {app}
            </HeaderLink>
          ))}
        </div>
      </div>
    </div>
  )
}

HomeScreen.propTypes = {
  apps: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default HomeScreen