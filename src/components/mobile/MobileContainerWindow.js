import React, {Children, cloneElement} from 'react'
import MobileWindow from './MobileWindow'
import {Container, HistoryRoute} from 'react-router-nested-history'

const toId = name => 'mobile_' + name.toLowerCase()
const toPath = name => `/mobile/${name.toLowerCase()}`
const toPattern = name => `/mobile/:app(${name.toLowerCase()})`

const MobileContainerWindow = ({children, name, isDefault=false,
                                id=toId(name), path=toPath(name),
                                patterns=[toPattern(name)]}) => (
  <MobileWindow name={name}>
    <Container name={id}
               initialUrl={path}
               patterns={patterns}
               isDefault={isDefault}>
      <HistoryRoute path={path} exact children={children} />
    </Container>
  </MobileWindow>
)

export default MobileContainerWindow