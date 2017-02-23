import { PropTypes } from 'react'
import styles from './IFrameWindow.scss'
import ContainerWindow from './ContainerWindow'

const IFrameWindow = ({name, src}) => {
  return (
    <ContainerWindow name={name} usePadding={false}>
      <div className={styles.container}>
        <div className="click-shield" />
        <iframe src={src} className='frame' />
      </div>
    </ContainerWindow>
  )
}

IFrameWindow.propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
}

export default IFrameWindow