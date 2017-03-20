import styles from './DesktopSocial.scss'

const escapeName = name => name.replace(' ', '_')

const Icon = ({name, link, color}) => (
  <a target='_blank' href={link} className='icon'>
    <img src={require(`img/icons/social/${escapeName(name)}.svg`)} />
    <div className='text' style={{color}}>{name}</div>
  </a>
)

const DesktopSocial = () => (
  <div className={styles.container}>
    <Icon name='Twitter' color='#00AAEC' link='http://twitter.com/kenfehling' />
    <Icon name='LinkedIn' color='#0077B5' link='http://linkedin.com/in/kenfehling' />
    <Icon name='GitHub' color='#000' link='http://github.com/kenfehling' />
    <Icon name='Stack Overflow' color='#FF8000' link='http://stackoverflow.com/users/591530/ken-fehling' />
  </div>
)

export default DesktopSocial