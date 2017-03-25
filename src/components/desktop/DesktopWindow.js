import React, {PropTypes, Children, cloneElement} from 'react'
import {HistoryWindow} from 'react-router-nested-history'
import styles from './DesktopWindow.scss'

const ToolbarButton = ({name, onClick}) => (
  <img src={require(`img/icons/desktop/${name}.svg`)} onClick={onClick} />
)

const DesktopWindow = ({name, container='desktop_' + name.toLowerCase(),
                        children, ...windowProps}) => (
  <HistoryWindow forName={container}
                 visible={false}
                 {...windowProps}
                 draggable={true}
                 draggableProps={{
                   cancel: ".inner-container"
                 }}
  >
    {({close}) => (
      <div className={`${styles.window} ${name}`}>
        <div className='toolbar'>
          <div className='buttons left'>
            <ToolbarButton name='close' onClick={close} />
            <ToolbarButton name='minimize' onClick={close} />
          </div>
          <div className='buttons right'>
            <ToolbarButton name='share' onClick={() => {}} />
          </div>
          <div className='title'>{name}</div>
        </div>
        <div className="inner-container">
          <div className="body">
            {children instanceof Function ? children() : children}
          </div>
        </div>
      </div>
    )}
  </HistoryWindow>
)

DesktopWindow.propTypes = {
  name: PropTypes.string.isRequired,
  container: PropTypes.string,
  x: PropTypes.number,
  y: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  visible: PropTypes.bool,
  className: PropTypes.string,
  topClassName: PropTypes.string
}

export default DesktopWindow