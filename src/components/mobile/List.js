import React, {PropTypes} from 'react'
import ListItem from './ListItem'
import styles from './List.scss'

const List = ({items}) => {
  return (<div className={styles.container}>
    {items.map(item => <ListItem key={item.name} {...item} />)}
  </div>)
}

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default List