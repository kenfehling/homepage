import React, {Children, cloneElement} from 'react'
import DesktopWindow from './DesktopWindow'
import {Container, HistoryRoute} from 'react-router-nested-history'

export default ({children, name, ...windowProps}) => {
  const id = 'desktop_' + name.toLowerCase()
  const path = `/${name.toLowerCase()}`
  return (
    <DesktopWindow {...windowProps}
                   name={name}
                   className='background-window'
                   topClassName='top-window'
  >
      <Container name={id} initialUrl={path} patterns={[path]}>
        <HistoryRoute
          path={path} exact
          children={children instanceof Function ?
              hProps => children({...hProps}) : () => children} />
      </Container>
    </DesktopWindow>
  )
}