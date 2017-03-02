import styles from './MobilePage.scss'

export default ({title, children}) => (
  <div className={styles.container}>
    <div className="nav">
      <h1>{title}</h1>
    </div>
    <div className='content'>
      {children}
    </div>
  </div>
)