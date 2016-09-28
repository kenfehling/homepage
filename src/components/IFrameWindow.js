import { connect } from 'react-redux';
import { PropTypes } from 'react';
import Window from './Window';
import { isWindowOnTop } from '../utils/ui';
import { bringToFront } from '../actions/UiActions';
import styles from './IFrameWindow.scss';

const IFrameWindow = ({name, src, isTopWindow, bringToFront}) => {
    return <Window name={name} usePadding={false}>
        <div className={styles.container}>
            <div className="click-shield" style={{zIndex: isTopWindow ? 1 : 2}} onClick={bringToFront}></div>
            <iframe src={src} style={{flexGrow: 1, zIndex: isTopWindow ? 2 : 1}}></iframe>
        </div>
    </Window>
};

IFrameWindow.propTypes = {
    name: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
};

const mapStateToProps = (state, ownProps) => ({
    isTopWindow: isWindowOnTop(state.ui.windowZIndexes, ownProps.name)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    bringToFront: () => dispatch(bringToFront(ownProps.name))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IFrameWindow);