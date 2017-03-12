import {PropTypes} from 'react'
import Draggable from 'react-draggable'
import {HistoryWindow} from 'react-router-nested-history'
import * as _ from 'lodash'
import styles from './DesktopWindow.scss'

const DesktopWindow = ({name, menuItems, children, fgColor='#000', bgColor='#FFF',
                usePadding=true, className=''}) => (
  <Draggable cancel=".inner-container">
    <HistoryWindow forName={'desktop_' + name.toLowerCase()}
                   className={`${styles.container} ${name} ${className}`}>
     {props => (
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
         {children instanceof Function ? children(props) : children}
         </div>
       </div>
      )}
    </HistoryWindow>
  </Draggable>
)

DesktopWindow.propTypes = {
  name: PropTypes.string.isRequired,
  menuItems: PropTypes.arrayOf(PropTypes.object),
  fgColor: PropTypes.string,
  bgColor: PropTypes.string,
  usePadding: PropTypes.bool
}

export default DesktopWindow