import styles from './Window.scss';
import Draggable from 'react-draggable';
import { PropTypes } from 'react';
import _ from 'lodash';
import {Window as LibraryWindow} from 'react-router-nested-history'

const Window = ({name, menuItems, children, fgColor='#000', bgColor='#FFF',
                usePadding=true, className=''}) => {
  //onStart={bringToFront}
  return <Draggable bounds="body" cancel=".inner-container">
    <LibraryWindow className={`${styles.container} ${name} ${className}`}
                   children={props => (
       <div className="inner-container"
            style={{
              backgroundColor:bgColor,
              color:fgColor,
              padding: usePadding ? '6px 5px' : null
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
     )} />
  </Draggable>
};

Window.propTypes = {
  name: PropTypes.string.isRequired,
  menuItems: PropTypes.arrayOf(PropTypes.object),
  fgColor: PropTypes.string,
  bgColor: PropTypes.string,
  usePadding: PropTypes.bool
};

export default Window