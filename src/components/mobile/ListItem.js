import React, {PropTypes} from 'react'
import styles from './ListItem.scss'

const ListItem = ({icon, name}) => (
  <div className={styles.container}>
    <img className="icon" src={require('img/icons/' + icon)} />
    <div className="name">{name}</div>
  </div>
)

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}

export default ListItem