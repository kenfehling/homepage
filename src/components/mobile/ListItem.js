import React, {PropTypes} from 'react'
import {HistoryLink} from 'react-router-nested-history'
import styles from './ListItem.scss'

const ListItem = ({icon, name, page}) => (
  <HistoryLink to={page} className={styles.container}>
    <img className="icon" src={require('img/icons/' + icon)} />
    <div className="name">{name}</div>
  </HistoryLink>
)

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired
}

export default ListItem