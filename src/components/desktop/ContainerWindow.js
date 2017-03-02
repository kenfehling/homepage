import React, {Children, cloneElement} from 'react'
import Window from './Window'
import {Container, HistoryRoute} from 'react-router-nested-history'

export default ({children, name, ...windowProps}) => {
  const id = name.toLowerCase()
  const path = `/${id}`
  return (
    <Window {...windowProps} name={name} children={({isOnTop}) => (
      <Container name={id}
                 initialUrl={path}
                 patterns={[path]}
                 className={isOnTop ? 'top-window' : 'background-window'}>
        <HistoryRoute
          path={path} exact
          children={children instanceof Function ?
              hProps => children({...hProps}) : () => children} />
      </Container>
    )} />
  )
}