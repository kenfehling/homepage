import React, {Children, cloneElement} from 'react'
import MobileWindow from './MobileWindow'
import {Container, HistoryRoute} from 'react-router-nested-history'
import {devicePath} from '../../utils/mobile'

const toId = name => 'mobile_' + name.toLowerCase()
const toPattern = (name, isDesktop) => devicePath(`/:app(${name.toLowerCase()})`, isDesktop)
const toPath = (name, isDesktop) => devicePath(`/${name.toLowerCase()}`, isDesktop)

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