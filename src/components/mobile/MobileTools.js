import React from 'react'
import PropTypes from 'prop-types'
import {HistoryRoute, Container} from 'react-router-nested-history'
import MobilePage from './MobilePage'
import MobileToolsDetail from './MobileToolsDetail'
import List from './List'
import {categories} from '../../constants/tools'
import {filterTools, escapeName} from '../../utils/tools'
import * as styles from './MobileTools.scss'
import {devicePath} from '../../utils/mobile'
import Head from '../shared/Head'

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
    page: devicePath(`tools/${c}`, isDesktop)
  }))

  const mapTool = ({name, iconType}, category) => ({
    name,
    icon: `tools/${escapeName(name)}.${iconType || 'svg'}`,
    page: devicePath(`tools/${category}/${escapeName(name)}`, isDesktop)
  })

  return (
    <Container name='mobile_tools'
               initialUrl={devicePath('tools', isDesktop)}
               patterns={[
                 devicePath(':app(tools)', isDesktop),
                 devicePath(':app(tools)/:category', isDesktop),
                 devicePath(':app(tools)/:category/:tool', isDesktop)
               ]}
    >
      <HistoryRoute path={devicePath(':app(tools)', isDesktop)} exact>
        <Page title='Tools' isDesktop={isDesktop}>
          <List items={mappedCategories} />
          <Head title='Ken Fehling - Tools'
                description="Tools I use"
                keywords="web, mobile, app, dev, design, development, music"
          />
        </Page>
      </HistoryRoute>

      <HistoryRoute path={devicePath(':app(tools)/:category', isDesktop)} exact>
        {({match:{params:{category}}}) => {
          const ts = filterTools(category)
          return (
            <Page title={category} isDesktop={isDesktop}>
              <List
                items={ts.map(tool => mapTool(tool, category))}/>
              <Head title={`${category} tools`}
                    description={`${category} tools that I use`}
                    keywords={[category, ...ts].join(',')}
              />
            </Page>
          )
        }}
      </HistoryRoute>

      <HistoryRoute path={devicePath(':app(tools)/:category/:tool', isDesktop)} exact>
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
