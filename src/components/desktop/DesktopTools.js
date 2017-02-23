import React, {Component, PropTypes, createElement} from 'react'
import {Container, ContainerGroup, HistoryRoute} from 'react-router-nested-history'
import DesktopToolsHeader from './DesktopToolsHeader'
import DesktopToolsMaster from './DesktopToolsMaster'
import DesktopToolsDetail from './DesktopToolsDetail'
import {categories} from '../../constants/tools'
import styles from './DesktopTools.scss'
import * as _ from 'lodash'

const regex = c => `:category(${c})`
const scrollLefts = {}
const onMasterScroll = (category, event) => {
  scrollLefts[category] = event.target.scrollLeft
}
const resetMasterScrolls = () => _.each(categories, c => scrollLefts[c] = 0)
resetMasterScrolls()

export default (props) => (
  <div className={styles.container}>
    <ContainerGroup name='tools' gotoTopOnSelectActive={true}>
      <DesktopToolsHeader />
      {categories.map(c => (
          <Container key={c}
                     name={c}
                     resetOnLeave={true}
                     initialUrl={`/tools/${c}`}
                     patterns={[`/tools/${regex(c)}`,
                               `/tools/${regex(c)}/:tool`]}>
            <div className='transition-wrapper'>
              <HistoryRoute path={`/tools/${regex(c)}`}
                            exact children={({ matched, ...rest}) => (
                <DesktopToolsMaster {...rest}
                                    scrollLeft={scrollLefts[c]}
                                    onScroll={e => onMasterScroll(c, e)} />
              )} />
              <HistoryRoute path={`/tools/${regex(c)}/:tool`}
                            component={DesktopToolsDetail} />
            </div>
          </Container>
      ))}
    </ContainerGroup>
  </div>
)