import styles from './HomeScreenIcon.scss'

const HomeScreenIcon = ({name, onClick}) => (
  <div className={styles.container}>
    <img className='icon'
         src={require('img/icons/dock/' + name + '.svg')}
         onClick={onClick}
    />
  </div>
)

export default HomeScreenIcon