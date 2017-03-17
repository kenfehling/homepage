import React, {PropTypes} from 'react'
import {HistoryRoute, Container} from 'react-router-nested-history'
import MobilePage from './MobilePage'
import List from './List'
import {categories} from '../../constants/tools'
import {filterTools, escapeName} from '../../utils/tools'
import Helmet from 'react-helmet'
import styles from './MobileTools.scss'

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

const MobileTools = ({useTopBar}) => {
  const Page = ({title, backLinkText, children}) => (
    <MobilePage title={title}
                backLinkText={backLinkText}
                navClassName={styles.nav}
                useTopBar={useTopBar}
    >
      {children}
    </MobilePage>
  )
  
  return (
    <Container name='mobile_tools'
               initialUrl='/mobile/tools'
               patterns={[
                 '/mobile/:app(tools)',
                 '/mobile/:app(tools)/:category',
                 '/mobile/:app(tools)/:category/:tool'
               ]}
    >
      <HistoryRoute path='/mobile/:app(tools)' exact>
        <Page title='Tools'>
          <List items={mappedCategories} />
        </Page>
      </HistoryRoute>

      <HistoryRoute path='/mobile/:app(tools)/:category' exact>
        {({match:{params:{category}}}) => (
          <Page title={category}>
            <List items={filterTools(category).map(tool => mapTool(tool, category))} />
            <Helmet title={category} titleTemplate='Ken Fehling - Tools: %s' />
          </Page>
        )}
      </HistoryRoute>

      <HistoryRoute path='/mobile/:app(tools)/:category/:tool' exact>
        {(props) => (
          <Page title={props.match.params.tool}
                backLinkText={props.match.params.category}>
            {/* <BaseToolsDetail {...props} /> */}
          </Page>
        )}
      </HistoryRoute>
    </Container>
  )
}

MobileTools.propTypes = {
  useTopBar: PropTypes.bool
}

export default MobileTools
