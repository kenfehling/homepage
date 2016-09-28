import styles from './Window.scss';
import { connect } from 'react-redux';
import Draggable from 'react-draggable';
import { PropTypes } from 'react';
import _ from 'lodash';
import { bringToFront } from '../actions/UiActions';
import { getWindowZIndex } from '../utils/ui';

const Window = ({name, menuItems, children, fgColor='#000', bgColor='#FFF', usePadding=true, zIndex, bringToFront}) => {
    return <Draggable bounds="body" onStart={bringToFront} cancel=".inner-container">
        <div className={`${styles.container} ${name}`} style={{zIndex: zIndex}} onClick={bringToFront}>
            <div className="inner-container"
                 style={{backgroundColor:bgColor, color:fgColor, padding: usePadding ? '6px 5px' : null}}>
                {menuItems ?
                    <div className="menu" style={{backgroundColor:fgColor, color:bgColor}}>
                        <div>{name}</div>
                        {_.map(menuItems, item => <div key={item.name}>{item.name}</div>)}
                    </div> : ''}
                <div className="body" style={{padding: usePadding ? '15px 10px' : null}}>
                    {children}
                </div>
            </div>
        </div>
    </Draggable>;
};

Window.propTypes = {
    name: PropTypes.string.isRequired,
    menuItems: PropTypes.arrayOf(PropTypes.object),
    fgColor: PropTypes.string,
    bgColor: PropTypes.string,
    usePadding: PropTypes.bool
};

const mapStateToProps = (state, ownProps) => ({
    zIndex: getWindowZIndex(state.ui.windowZIndexes, ownProps.name)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    bringToFront: () => dispatch(bringToFront(ownProps.name))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Window);