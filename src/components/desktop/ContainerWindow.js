import Window from './Window'
import {Container, HistoryMatch} from 'react-router-nested-history'

export default ({children, name, ...windowProps}) => {
  const id = name.toLowerCase()
  const path = `/${name}`
  return (
    <Window {...windowProps} name={name}>
      <Container name={id} initialUrl={path} patterns={[path]}>
        <HistoryMatch pattern={path} exactly
                      children={children instanceof Function ? children : () => children} />
      </Container>
    </Window>
  )
}