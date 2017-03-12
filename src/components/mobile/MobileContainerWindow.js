import React, {Children, cloneElement} from 'react'
import MobileWindow from './MobileWindow'
import {Container, HistoryRoute} from 'react-router-nested-history'

const toId = name => 'mobile_' + name.toLowerCase()
const toPath = name => `/mobile/${name.toLowerCase()}`

const MobileContainerWindow = ({children, name, isDefault=false,
                                id=toId(name), path=toPath(name)}) => (
  <MobileWindow name={name} children={({isOnTop}) => (
    <Container name={id}
               initialUrl={path}
               patterns={[path]}
               isDefault={isDefault} >
      <HistoryRoute
        path={path} exact
        children={children instanceof Function ?
          hProps => children({...hProps}) : () => children} />
    </Container>
  )} />
)

export default MobileContainerWindow