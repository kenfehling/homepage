import React from 'react'
import Helmet from 'react-helmet'
import {
  Container, ContainerGroup, HistoryRoute
} from 'react-router-nested-history'
import DesktopToolsHeader from './DesktopToolsHeader'
import DesktopToolsMaster from './DesktopToolsMaster'
import DesktopToolsDetail from './DesktopToolsDetail'
import {categories} from '../../constants/tools'
import * as styles from './DesktopTools.scss'

const DesktopTools = (props) => (
  <div className={styles.container}>
    <ContainerGroup name='desktop_tools'
                    className='container-group'
                    gotoTopOnSelectActive={true}
                    hideInactiveContainers={true}
    >
      <DesktopToolsHeader />
      {categories.map(c => (
          <Container key={c}
                     name={c + '_tools'}
                     isDefault={c === 'All'}
                     resetOnLeave={true}
                     initialUrl={`/tools/${c}`}
                     patterns={[`/tools/:category(${c})`,
                                `/tools/:category(${c})/:tool`]}>
              <HistoryRoute path={`/tools/:category(${c})`} exact
                            component={DesktopToolsMaster} />
              <HistoryRoute path={`/tools/:category(${c})/:tool`} exact
                            component={DesktopToolsDetail} />
          </Container>
      ))}
    </ContainerGroup>
    <Helmet>
      <title>Ken Fehling - Tools</title>
      <meta name='description'
            content="Tools I use"
      />
      <meta name="keywords"
            content="web, mobile, app, dev, design, development, music"
      />
    </Helmet>
  </div>
)

export default DesktopTools