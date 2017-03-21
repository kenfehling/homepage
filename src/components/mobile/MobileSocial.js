import List from './List'
import {sites} from '../../constants/social'
import MobilePage from './MobilePage'
import styles from './MobileSocial.scss'

const MobileSocial = ({useTopBar}) => (
  <MobilePage title='Social' useTopBar={useTopBar} navClassName={styles.nav}>
    <List items={sites} />
  </MobilePage>
)

export default MobileSocial