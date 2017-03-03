import {Window, Container, HistoryRoute} from 'react-router-nested-history'
import styles from './MobileWindow.scss'

const toId = name => name.toLowerCase()
const toPath = name => `/mobile/${toId(name)}`

const MobileWindow = ({name, path=toPath(name), component, children, isDefault=false}) => (
  <Window forName={toId(name)} className={styles.container}>
    <Container name={toId(name)}
               initialUrl={path}
               patterns={[path]}
               isDefault={isDefault}
               animate={false}
    >
      {component ? <HistoryRoute path={path} exact component={component}/> :
        <HistoryRoute path={path} exact
                      children={children instanceof Function ?
                        hProps => children({...hProps}) : () => children}
        />}
    </Container>
  </Window>
)

export default MobileWindow