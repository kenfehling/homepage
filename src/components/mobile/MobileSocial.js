import React from 'react'
import Helmet from 'react-helmet'
import List from './List'
import {sites} from '../../constants/social'
import MobilePage from './MobilePage'
import * as styles from './MobileSocial.scss'

const MobileSocial = ({isDesktop}) => (
  <MobilePage title='Social' isDesktop={isDesktop} navClassName={styles.nav}>
    <List items={sites} />
    <Helmet>
      <title>Ken Fehling - Social</title>
      <meta name='description'
            content="Links to my Twitter, GitHub, LinkedIn, etc."
      />
      <meta name="keywords"
            content="social, Twitter, GitHub, LinkedIn, Stack Overflow"
      />
    </Helmet>
  </MobilePage>
)

export default MobileSocial