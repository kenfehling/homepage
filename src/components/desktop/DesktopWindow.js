import React, {PropTypes, Children, cloneElement} from 'react'
import Draggable from 'react-draggable'
import {HistoryWindow} from 'react-router-nested-history'
import * as _ from 'lodash'
import styles from './DesktopWindow.scss'

const Bridge = ({className, children, onMouseDown, ...props}) =>
    cloneElement(Children.only(children), {
      defaultClassName: className,
      onMouseDown,
      children: cloneElement(Children.only(children.props.children), props)
    })

const DesktopWindow = ({name, container='desktop_' + name.toLowerCase(),
                        menuItems, children, fgColor='#000', bgColor='#FFF',
                        usePadding=true, className, topClassName}) => (
  <HistoryWindow forName={container}
                 className={`${styles.container} ${name} ${className}`}
                 topClassName={`${styles.container} ${name} ${topClassName}`}
  >
    <Bridge>
      <Draggable cancel=".inner-container">
        <div>
          <div className="inner-container"
              style={{
                backgroundColor:bgColor,
                color:fgColor,
                padding:usePadding ? '6px 5px' : null
              }}
          >
            {menuItems ?
              <div className="menu" style={{backgroundColor:fgColor, color:bgColor}}>
                <div>{name}</div>
                {_.map(menuItems, item => <div key={item.name}>{item.name}</div>)}
              </div> : ''}
            <div className="body" style={{padding: usePadding ? '15px 10px' : null}}>
              {children instanceof Function ? children() : children}
            </div>
          </div>
        </div>
      </Draggable>
    </Bridge>
  </HistoryWindow>
)

DesktopWindow.propTypes = {
  name: PropTypes.string.isRequired,
  menuItems: PropTypes.arrayOf(PropTypes.object),
  fgColor: PropTypes.string,
  bgColor: PropTypes.string,
  usePadding: PropTypes.bool
}

export default DesktopWindow