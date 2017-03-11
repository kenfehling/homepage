import {HistoryWindow, Container, HistoryRoute} from 'react-router-nested-history'
import styles from './MobileWindow.scss'

const toId = name => name.toLowerCase()
const toPath = name => `/mobile/${toId(name)}`

const MobileWindow = ({name, path=toPath(name), patterns=[path],
                      component, children, isDefault=false}) => (
  <HistoryWindow forName={toId(name)} className={styles.container}>
    <Container name={toId(name)}
               initialUrl={path}
               patterns={patterns}
               isDefault={isDefault}
    >
      {component ?
        <HistoryRoute path={path} exact component={component}/> :
        <HistoryRoute path={path} exact children={children} />
      }
    </Container>
  </HistoryWindow>
)

export default MobileWindow