import React, {PropTypes} from 'react'
import {ScrollArea} from 'react-router-nested-history'
import ListItem from './ListItem'
import bowser from 'bowser'
import * as styles from './List.scss'

const isIosSafari = bowser.mobile && bowser.safari
const getClassName = () => styles.container + (isIosSafari ? ' ios-safari' : '')

const List = ({items}) => {
  return (<ScrollArea className={getClassName()} vertical={true}>
    {items.map(item => <ListItem key={item.name} {...item} />)}
  </ScrollArea>)
}

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default List