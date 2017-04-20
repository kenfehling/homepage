import React, {PropTypes} from 'react'
import Helmet from 'react-helmet'
import {HistoryRoute, Container} from 'react-router-nested-history'
import MobilePage from './MobilePage'
import MobileToolsDetail from './MobileToolsDetail'
import List from './List'
import {categories} from '../../constants/tools'
import {filterTools, escapeName} from '../../utils/tools'
import * as styles from './MobileTools.scss'
import {devicePath} from '../../utils/mobile'

const Page = ({title, backLinkText, children, isDesktop}) => (
  <MobilePage title={title}
              backLinkText={backLinkText}
              navClassName={styles.nav}
              isDesktop={isDesktop}
  >
    {children}
  </MobilePage>
)

const MobileTools = ({isDesktop}) => {
  const mappedCategories = categories.map(c => ({
    name: c,
    icon: `tools/categories/${c}.svg`,
    page: devicePath(`/tools/${c}`, isDesktop)
  }))

  const mapTool = ({name, iconType}, category) => ({
    name,
    icon: `tools/${escapeName(name)}.${iconType || 'svg'}`,
    page: devicePath(`/tools/${category}/${escapeName(name)}`, isDesktop)
  })

  return (
    <Container name='mobile_tools'
               initialUrl={devicePath('/tools', isDesktop)}
               patterns={[
                 devicePath('/:app(tools)', isDesktop),
                 devicePath('/:app(tools)/:category', isDesktop),
                 devicePath('/:app(tools)/:category/:tool', isDesktop)
               ]}
    >
      <HistoryRoute path={devicePath('/:app(tools)', isDesktop)} exact>
        <Page title='Tools' isDesktop={isDesktop}>
          <List items={mappedCategories} />
          <Helmet>
            <title>Ken Fehling - Tools</title>
            <meta name='description'
                  content="Tools I use"
            />
            <meta name="keywords"
                  content="web, mobile, app, dev, design, development, music"
            />
          </Helmet>
        </Page>
      </HistoryRoute>

      <HistoryRoute path={devicePath('/:app(tools)/:category', isDesktop)} exact>
        {({match:{params:{category}}}) => {
          const ts = filterTools(category)
          return (
            <Page title={category} isDesktop={isDesktop}>
              <List
                items={ts.map(tool => mapTool(tool, category))}/>
              <Helmet title={category} titleTemplate='Ken Fehling - Tools: %s'>
                <meta name='description'
                      content={`${category} tools that I use`}
                />
                <meta name="keywords"
                      content={[category, ...ts].join(',')}
                />
              </Helmet>
            </Page>
          )
        }}
      </HistoryRoute>

      <HistoryRoute path={devicePath('/:app(tools)/:category/:tool', isDesktop)} exact>
        {(props) => (
          <Page title={props.match.params.tool}
                backLinkText={({params:{tool, category}}) => tool || category}
                isDesktop={isDesktop}
          >
            <MobileToolsDetail {...props} isDesktop={isDesktop} />
          </Page>
        )}
      </HistoryRoute>
    </Container>
  )
}

MobileTools.propTypes = {
  isDesktop: PropTypes.bool
}

export default MobileTools
