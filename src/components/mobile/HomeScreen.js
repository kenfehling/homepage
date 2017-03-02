import styles from './HomeScreen.scss'
import HomeScreenIcon from './HomeScreenIcon'

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
            <HomeScreenIcon key={name}
                      name={name}
                      onClick={() => onIconClick(name.toLowerCase())}
            />
          ))}
        </div>
      </div>
    </div>
  )
}