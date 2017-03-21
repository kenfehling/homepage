import styles from './MobileNotes.scss'
import MobilePage from './MobilePage'

const MobileNotes = ({useTopBar, useNa}) => (
  <MobilePage title='Notes' useTopBar={useTopBar} navClassName={styles.nav}>
    <div className={styles.container}>

    </div>
  </MobilePage>
)

export default MobileNotes