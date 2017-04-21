import React, {PropTypes} from 'react'
import * as styles from './HomeScreen.scss'
import {HeaderLink} from 'react-router-nested-history'
import MobilePage from './MobilePage'
import Head from '../shared/Head'

const HomeScreen = ({apps, isDesktop}) => {
  return (
    <MobilePage isDesktop={isDesktop} useNavBar={false} navClassName={styles.nav}>
      <div className={styles.container}>
        {apps.map(app => (
          <HeaderLink className='icon'
                      key={app}
                      toContainer={'mobile_' + app.toLowerCase()}>
            <img src={require('img/icons/mobile/home/' + app + '.svg')} />
            {app}
          </HeaderLink>
        ))}
        <Head title='Ken Fehling'
              description='Web and mobile app developer, music maker'
              keywords="Ken Fehling, web, mobile, dev, apps, websites, development, design, music"
        />
      </div>
    </MobilePage>
  )
}

HomeScreen.propTypes = {
  apps: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default HomeScreen