import {HeaderLink} from 'react-router-nested-history'
import ReactTooltip from 'react-tooltip'
import styles from './Dock.scss'

const icons = [
  {name: 'Map'},
  {name: 'Terminal'},
  {name: 'Tools'},
  {name: 'Editor'},
  {name: 'Social'},
  {name: 'Audio'},
  {name: 'PDF'},
  {name: 'Mobile', container: 'mobile'}
]

export default () => {
  return (
    <div className={styles.container}>
        <div className="inner-container">
            <div className="back-container"></div>
            <div className="front-container">
              {icons.map(({name, container}) => (
                <HeaderLink className='icon'
                            key={name}
                            toContainer={container || `desktop_${name.toLowerCase()}`}>
                  <img data-tip data-for={name}
                       src={require('img/icons/dock/' + name + '.svg')} />
                  <ReactTooltip id={name} type="light" place="top" effect="solid">
                    <div className="tooltip">{name}</div>
                  </ReactTooltip>
                </HeaderLink>
              ))}
            </div>
        </div>
    </div>
  )
}