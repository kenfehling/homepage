import React, {PropTypes} from 'react'
import ListItem from './ListItem'

const List = ({items}) => {
  return (<div>
    {items.map(item => <ListItem key={item.name} {...item} />)}
  </div>)
}

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default List