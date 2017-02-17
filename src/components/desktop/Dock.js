import styles from './Dock.scss'
import DockIcon from './DockIcon'

const icons = [
  'Map',
  'Terminal',
  'Tools',
  'Editor',
  'Social',
  'Audio',
  'PDF',
  'Mobile'
]

export default ({onIconClick}) => {
  return (
    <div className={styles.container}>
      <div className="inner-container">
        <div className="back-container"></div>
        <div className="front-container">
          {icons.map(name => (
            <DockIcon key={name}
                      name={name}
                      onClick={() => onIconClick(name.toLowerCase())}
            />
          ))}
        </div>
      </div>
    </div>
  )
}