import React from 'react'
import PropTypes from 'prop-types'
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
            <img alt={app}
                 src={require('img/icons/mobile/home/' + app + '.svg')}
            />
            {app}
          </HeaderLink>
        ))}
        <Head title='Ken Fehling'
              description='Freelance web and mobile app developer from Long Island, New York'
              keywords="Ken Fehling, web development, web design, app development, web, mobile, dev, apps, websites, development, design, Long Island, New York, NYC"
        />
      </div>
    </MobilePage>
  )
}

HomeScreen.propTypes = {
  apps: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default HomeScreen