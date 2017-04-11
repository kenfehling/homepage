import React, {PropTypes} from 'react'
import * as styles from './HomeScreen.scss'
import {HeaderLink} from 'react-router-nested-history'
import MobilePage from './MobilePage'

const HomeScreen = ({apps, isDesktop}) => {
  return (
    <MobilePage isDesktop={isDesktop} useNavBar={false} navClassName={styles.nav}>
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
    </MobilePage>
  )
}

HomeScreen.propTypes = {
  apps: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default HomeScreen