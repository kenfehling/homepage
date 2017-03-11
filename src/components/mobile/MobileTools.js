import React, {PropTypes} from 'react'
import {HistoryRoute} from 'react-router-nested-history'
import MobilePage from './MobilePage'
import List from './List'
import ListItem from './ListItem'
import BaseToolsMaster from '../shared/BaseToolsMaster'
import {categories} from '../../constants/tools'

const categoriesWithIcons =
    categories.map(c => ({name: c, icon: `tools/categories/${c}.svg`}))

const Categories = () => (
  <List items={categoriesWithIcons} />
)

const Category = () => (
  <BaseToolsMaster arrangeTools={ListItem} />
)

const Detail = ({category, tool}) => (
  <BaseToolsDetail category={category} tool={tool} />
)

const Tools = () => (
  <MobilePage title='Tools'>
    <HistoryRoute path='/mobile/tools' exact component={Categories} />
    <HistoryRoute path='/mobile/tools/:category' exact component={Category} />
    <HistoryRoute path='/mobile/tools/:category/:tool' exact component={Detail} />
  </MobilePage>
)

Tools.propTypes = {
  category: PropTypes.string,
  selectedTool: PropTypes.string
}

export default Tools
