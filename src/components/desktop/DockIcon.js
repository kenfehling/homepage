import styles from './DockIcon.scss'
import ReactTooltip from 'react-tooltip'

const DockIcon = ({name, onClick}) => (
  <div className={styles.container}>
    <img data-tip data-for={name} src={require('img/icons/dock/' + name + '.svg')} onClick={onClick} />
    <ReactTooltip id={name} type="light" place="top" effect="solid">
      <div className="tooltip">{name}</div>
    </ReactTooltip>
  </div>
)

export default DockIcon