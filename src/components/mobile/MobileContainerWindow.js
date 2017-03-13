import React, {Children, cloneElement} from 'react'
import MobileWindow from './MobileWindow'
import MobilePage from './MobilePage'
import {Container, HistoryRoute} from 'react-router-nested-history'

const toId = name => 'mobile_' + name.toLowerCase()
const toPath = name => `/mobile/${name.toLowerCase()}`
const toPattern = name => `/mobile/:app(${name.toLowerCase()})`

const MobileContainerWindow = ({children, name, isDefault=false,
                                id=toId(name), path=toPath(name)}) => (
  <MobileWindow name={name} children={({isOnTop}) => (
    <Container name={id}
               initialUrl={path}
               patterns={[toPattern(name)]}
               isDefault={isDefault}>
      <MobilePage title={name}>
        <HistoryRoute
          path={path} exact
          children={children instanceof Function ?
            hProps => children({...hProps}) : () => children} />
      </MobilePage>
    </Container>
  )} />
)

export default MobileContainerWindow