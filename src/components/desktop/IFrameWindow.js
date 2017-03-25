import React, { PropTypes } from 'react'
import styles from './IFrameWindow.scss'
import ContainerWindow from './DesktopContainerWindow'

const IFrameWindow = ({name, src, ...windowProps}) => {
  return (
    <ContainerWindow name={name} {...windowProps}>
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