import styles from './DockIcon.scss';
import { connect } from 'react-redux';
import { bringToFront } from '../actions/UiActions';

const DockIcon = ({name, bringToFront}) => (
    <div className={styles.container}>
        <img src={require('img/icons/dock/' + name + '.svg')} onClick={bringToFront} />
    </div>
);

export default connect(
    state => ({}),
    (dispatch, ownProps) => ({
        bringToFront: () => dispatch(bringToFront(ownProps.name))
    })
)(DockIcon);