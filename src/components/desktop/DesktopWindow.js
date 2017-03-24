import React, {PropTypes, Children, cloneElement} from 'react'
import Draggable from 'react-draggable'
import {HistoryWindow} from 'react-router-nested-history'
import * as _ from 'lodash'
import styles from './DesktopWindow.scss'

const Bridge = ({children, onMouseDown, ...props}) =>
    cloneElement(Children.only(children), {
      onMouseDown: (e) => {

        console.log(children.props.children)


        children.props.onMouseDown(e)

      }
    })

const ToolbarButton = ({name, onClick}) => (
  <img src={require(`img/icons/desktop/${name}.svg`)} onClick={onClick} />
)

const DesktopWindow = ({name, container='desktop_' + name.toLowerCase(),
                        x=0, y=0, width, height, children,
                        fgColor='#000', bgColor='#FFF',
                        visible=false, className, topClassName}) => (
  <HistoryWindow forName={container} visible={visible}
                 className={className}
                 topClassName={topClassName}
                 style={{width: 0, height: 0}}
  >
    {({close}) => (
      <Draggable cancel=".inner-container"
                 defaultPosition={{x, y}}>

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
          <div className="inner-container"
               style={{
                 backgroundColor:bgColor,
                 color:fgColor,
               }}
          >
            <div className="body">
              {children instanceof Function ? children() : children}
            </div>
          </div>
        </div>
      </Draggable>
    )}
  </HistoryWindow>
)

DesktopWindow.propTypes = {
  name: PropTypes.string.isRequired,
  fgColor: PropTypes.string,
  bgColor: PropTypes.string
}

export default DesktopWindow