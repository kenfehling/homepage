import React, {Component} from 'react'
import onClickOutside from 'react-onclickoutside'
import {apps} from '../../constants/desktop'
import styles from './DesktopFrame.scss'
import {HeaderLink} from 'react-router-nested-history'

const AppItem = ({name, container=`desktop_${name.toLowerCase()}`}) => (
  <HeaderLink key={name} toContainer={container}>{name}</HeaderLink>
)

const applications = apps.map(app => <AppItem {...app} />)

const settings = [

]

const Dropdown = ({items, onClick}) => (
  <div className='dropdown' onClick={onClick}>
    {items.map((item, i) => <div key={i} onClick={onClick}>{item}</div>)}
  </div>
)

class InnerMenuItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false
    }
  }

  show() {
    this.setState({active: true})
  }

  hide() {
    this.setState({active: false})
  }

  toggle() {
    this.setState({active: !this.state.active})
  }

  handleClickOutside(event) {
    this.hide()
  }

  render() {
    const {text, items} = this.props
    const {active} = this.state
    return (
      <div className={active ? 'active' : ''} onClick={() => this.toggle()}>
        <div>
          {text}
        </div>
        {active && <Dropdown items={items} onClick={() => this.hide()} />}
      </div>
    )
  }
}
const MenuItem = onClickOutside(InnerMenuItem)

const DesktopFrame = () => (
  <div className={styles.container}>
    <div className='menu'>
      <div className='logo'>
        <img src={require('img/icons/desktop/KF.svg')} />
      </div>
      <div className='left'>
        <MenuItem text='Applications' items={applications} />
        <MenuItem text='Settings' items={settings} />
      </div>
      <div className='right'>
        <div className='time'>
          Fri May 5&nbsp;
          12:32 PM
        </div>
      </div>
    </div>
    <div className='left' />
    <div className='right' />
    <div className='bottom' />
  </div>
)

export default DesktopFrame