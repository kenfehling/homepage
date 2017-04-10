import React from 'react'
import MobileWindow from './MobileWindow'
import {Container, HistoryRoute} from 'react-router-nested-history'
import {devicePath} from '../../utils/mobile'

const toId = name => 'mobile_' + name.toLowerCase()
const toPattern = (name, isDesktop) => devicePath(`/:app(${name.toLowerCase()})`, isDesktop)
const toPath = (name, isDesktop) => devicePath(`/${name.toLowerCase()}`, isDesktop)

const MobileContainerWindow = ({isDesktop, children, name, title, isDefault=false,
                                id=toId(name), path=toPath(name, isDesktop),
                                patterns=[toPattern(name, isDesktop)]}) => (
  <MobileWindow name={name} title={title}>
    <Container name={id}
               initialUrl={path}
               patterns={patterns}
               isDefault={isDefault}>
      <HistoryRoute path={path} exact children={children} />
    </Container>
  </MobileWindow>
)

export default MobileContainerWindow