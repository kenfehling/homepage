import React, {Children, cloneElement} from 'react'
import MobileWindow from './MobileWindow'
import MobilePage from './MobilePage'
import {Container, HistoryRoute} from 'react-router-nested-history'

const toId = name => 'mobile_' + name.toLowerCase()
const toPath = name => `/mobile/${name.toLowerCase()}`
const toPattern = name => `/mobile/:app(${name.toLowerCase()})`

const MobileContainerWindow = ({children, name, isDefault=false,
                                useTopBar, useNavBar=true, navClassName='',
                                id=toId(name), path=toPath(name),
                                patterns=[toPattern(name)]}) => (
  <MobileWindow name={name}>
    <Container name={id}
               initialUrl={path}
               patterns={patterns}
               isDefault={isDefault}>
      <HistoryRoute path={path} exact>
        <MobilePage title={name}
                    useTopBar={useTopBar}
                    useNavBar={useNavBar}
                    navClassName={navClassName}>
          {children}
        </MobilePage>
      </HistoryRoute>
    </Container>
  </MobileWindow>
)

export default MobileContainerWindow