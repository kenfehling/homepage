import React, {PropTypes} from 'react'
import {HistoryRoute, Container} from 'react-router-nested-history'
import MobilePage from './MobilePage'
import List from './List'
import BaseToolsDetail from '../shared/BaseToolsDetail'
import {categories} from '../../constants/tools'
import {filterTools, escapeName} from '../../utils/tools'
import Helmet from 'react-helmet'

const mappedCategories = categories.map(c => ({
  name: c,
  icon: `tools/categories/${c}.svg`,
  link: `/mobile/tools/${c}`
}))

const mapTool = ({name, iconType}, category) => ({
  name,
  icon: `tools/${escapeName(name)}.${iconType || 'svg'}`,
  link: `/mobile/tools/${category}/${escapeName(name)}`
})

const Categories = () => (
  <List items={mappedCategories} />
)

const Category = ({match:{params:{category}}, className}) => (
  <div>
    <List items={filterTools(category).map(tool => mapTool(tool, category))} />
    <Helmet title={category} titleTemplate='Ken Fehling - Tools: %s' />
  </div>
)

const Detail = props => (
  <BaseToolsDetail {...props} />
)

const MobileTools = () => (
  <MobilePage title='Tools'>
    <Container name='mobile_tools'
               initialUrl='/mobile/tools'
               patterns={[
                 '/mobile/tools',
                 '/mobile/tools/:category',
                 '/mobile/tools/:category/:tool'
               ]}
    >
      <HistoryRoute path='/mobile/tools' exact component={Categories} />
      <HistoryRoute path='/mobile/tools/:category' exact component={Category} />
      <HistoryRoute path='/mobile/tools/:category/:tool' exact component={Detail} />
    </Container>
  </MobilePage>
)

MobileTools.propTypes = {
  category: PropTypes.string,
  selectedTool: PropTypes.string
}

export default MobileTools
