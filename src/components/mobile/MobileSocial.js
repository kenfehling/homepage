import React from 'react'
import List from './List'
import {sites} from '../../constants/social'
import MobilePage from './MobilePage'
import * as styles from './MobileSocial.scss'
import Head from '../shared/Head'

const MobileSocial = ({isDesktop}) => (
  <MobilePage title='Social' isDesktop={isDesktop} navClassName={styles.nav}>
    <List items={sites} />
    <Head title='Ken Fehling - Social'
          description="Links to my Twitter, GitHub, LinkedIn, etc."
          keywords="social, Twitter, GitHub, LinkedIn, Medium, Stack Overflow, Ken Fehling"
    />
  </MobilePage>
)

export default MobileSocial