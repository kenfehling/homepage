import {BackLink} from 'react-router-nested-history'
import styles from './MobilePage.scss'

export default ({title, children}) => (
  <div className={styles.container}>
    <div className='nav'>
      <div className='back'>
        <BackLink nameFn={({page='Home'}) => (
          <div className='link'>
            <i className="fa fa-chevron-left" />
            <div className='text'>{page}</div>
          </div>
        )} />
      </div>
      <h1 className='title'>{title}</h1>
    </div>
    <div className='content'>
      {children}
    </div>
  </div>
)