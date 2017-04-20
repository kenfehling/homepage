import React, {PropTypes} from 'react'
import Helmet from 'react-helmet'
import * as styles from './HomeScreen.scss'
import {HeaderLink} from 'react-router-nested-history'
import MobilePage from './MobilePage'

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
        <Helmet>
          <title>Ken Fehling</title>
          <meta name='description'
                content='Web and mobile app developer, music maker'
          />
          <meta name="keywords"
                content="Ken Fehling, web, mobile, dev, apps, websites, development, design"
          />
        </Helmet>
      </div>
    </MobilePage>
  )
}

HomeScreen.propTypes = {
  apps: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default HomeScreen