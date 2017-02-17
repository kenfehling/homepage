import { PropTypes } from 'react'
import styles from './IFrameWindow.scss'
import ContainerWindow from './ContainerWindow'

const IFrameWindow = ({name, src}) => {
  return (
    <ContainerWindow name={name} usePadding={false} children={({isOnTop}) => (
      <div className={styles.container}>
        <div className="click-shield" style={{zIndex: isOnTop ? 1 : 2}} />
        <iframe src={src} style={{flexGrow: 1, zIndex: isOnTop ? 2 : 1}} />
      </div>
    )} />
  )
}

IFrameWindow.propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
}

export default IFrameWindow