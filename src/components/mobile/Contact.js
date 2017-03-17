import React, {PropTypes} from 'react'
import styles from './Contact.scss'

const Contact = ({contact:{name, icon, email, website, twitter}}) => (
  <div className={styles.container}>
    <div className='heading'>
      <div className='icon'><img src={require('img/icons/' + icon)} /></div>
      <div className='name'>{name}</div>
    </div>
    <div className='section email'>
      <div className='label'>Email</div>
      <a href={`mailto:${email}`}>{email}</a>
    </div>
    <div className='section website'>
      <div className='label'>Website</div>
      <a target='_blank' href={'http://www.' + website}>{website}</a>
    </div>
    <div className='section twitter'>
      <div className='label'>Twitter</div>
      <a target='_blank' href={`http://twitter.com/${twitter}`}>@{twitter}</a>
    </div>
  </div>
)

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
    twitter: PropTypes.string.isRequired
  }).isRequired
}

export default Contact