import {BackLink} from 'react-router-nested-history'
import styles from './MobilePage.scss'

const MobilePage = ({title, children}) => (
  <div className={styles.container}>
    <div className='nav'>
      <div className='back'>
        <BackLink>
          {({page='Home'}) => (
            <div className='link'>
              <i className="fa fa-chevron-left" />
              <div className='text'>{page}</div>
            </div>
          )}
        </BackLink>
      </div>
      <h1 className='title'>{title}</h1>
    </div>
    <div className='content'>
      {children}
    </div>
  </div>
)

export default MobilePage