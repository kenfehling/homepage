import React from 'react'
import List from './List'
import {sites} from '../../constants/social'
import MobilePage from './MobilePage'
import styles from './MobileSocial.scss'

const MobileSocial = ({isDesktop}) => (
  <MobilePage title='Social' isDesktop={isDesktop} navClassName={styles.nav}>
    <List items={sites} />
  </MobilePage>
)

export default MobileSocial