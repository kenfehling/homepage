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
  <MobilePage title='Tools'>
    <List items={mappedCategories} />
  </MobilePage>
)

const Category = ({match:{params:{category}}, className}) => (
  <MobilePage title={category}>
    <List items={filterTools(category).map(tool => mapTool(tool, category))} />
    <Helmet title={category} titleTemplate='Ken Fehling - Tools: %s' />
  </MobilePage>
)

const Detail = (props) => (
  <MobilePage title={props.match.params.tool}
              backLinkText={props.match.params.category}>
    <BaseToolsDetail {...props} />
  </MobilePage>
)

const MobileTools = () => (
  <Container name='mobile_tools'
             initialUrl='/mobile/tools'
             patterns={[
               '/mobile/:app(tools)',
               '/mobile/:app(tools)/:category',
               '/mobile/:app(tools)/:category/:tool'
             ]}
  >
    <HistoryRoute path='/mobile/:app(tools)' exact component={Categories} />
    <HistoryRoute path='/mobile/:app(tools)/:category' exact component={Category} />
    <HistoryRoute path='/mobile/:app(tools)/:category/:tool' exact component={Detail} />
  </Container>
)

MobileTools.propTypes = {
  category: PropTypes.string,
  selectedTool: PropTypes.string
}

export default MobileTools
