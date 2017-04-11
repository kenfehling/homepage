import React, {PropTypes} from 'react'
import {ScrollArea} from 'react-router-nested-history'
import ListItem from './ListItem'
import * as styles from './List.scss'

const List = ({items}) => {
  return (<ScrollArea className={styles.container} vertical={true}>
    {items.map(item => <ListItem key={item.name} {...item} />)}
  </ScrollArea>)
}

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default List