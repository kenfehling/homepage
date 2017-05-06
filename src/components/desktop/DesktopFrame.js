import React, {Component, cloneElement} from 'react'
import PropTypes from 'prop-types'
import onClickOutside from 'react-onclickoutside'
import {apps, backgrounds} from '../../constants/desktop'
import styles from './DesktopFrame.scss'
import {HeaderLink} from 'react-router-nested-history'
import Clock from '../shared/Clock'
import {changeBackground} from '../../actions/UiActions'
import connect from 'react-redux/es/connect/connect'
import AnalogClock, { Themes } from 'react-analog-clock'

const AppItem = ({name, onClick, container=`desktop_${name.toLowerCase()}`}) => (
  <HeaderLink toContainer={container} onClick={onClick} className='item'>
    {name}
  </HeaderLink>
)

const InnerBackgroundItem = ({name, isActive, onClick}) => (
  <div onClick={onClick} className='item'>
    {name} {isActive ? <span className='current' /> : ''}
  </div>
)

const BackgroundItem = connect(
  (state, ownProps) => ({
    isActive: state.background === ownProps.name
  }),
  (dispatch, ownProps) => ({
    onClick: (event) => {
      dispatch(changeBackground(ownProps.name))
      ownProps.onClick(event)
    }
  })
)(InnerBackgroundItem)

const SubMenu = ({text, items}) => (
  <MenuItem text={text}
            className='item'
            dropdownClassName='submenu'
            dropdownPosition='right'
            openOnMouseOver={true}
            items={items}
  />
)

const BackgroundSetting = () => (
  <SubMenu text='Background'
           items={backgrounds.map((background, i) => (
             <BackgroundItem key={i} name={background} />
           ))}
  />
)

const Restart = () => (
  <a href={'http://' + window.location.host} className='item'>Restart</a>
)

const system = [
  <Restart />
]

const applications = apps.map(app => <AppItem {...app} />)

const settings = [
  <BackgroundSetting />
]

const Dropdown = ({items, top, left, onClick, className=''}) => (
  <div className={className + ' dropdown'}
       style={{top, left}}
       onClick={onClick}
  >
    {items.map((item, i) => (
      <div key={i}>{cloneElement(item, {onClick})}</div>
    ))}
  </div>
)

const ClockDropdown = ({top, left}) => (
  <div className='dropdown'>
    <AnalogClock theme={Themes.light} />
  </div>
)

class InnerMenuItem extends Component {

  constructor(props) {
    super(props)
    this.state = {
      active: false,
      left: 0,
      right: 0,
      top: 0
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

  calculateDimensions(element) {
    if (element) {
      const left = element.offsetLeft
      const right = element.offsetLeft + element.offsetWidth
      const top = element.offsetTop
      if (left > this.state.left || right > this.state.right || top > this.state.top) {
        this.setState({left, right, top})
      }
    }
  }

  getDropdownPosition() {
    const {dropdownPosition='bottom'} = this.props
    const {left, right, top} = this.state
    if (dropdownPosition === 'bottom') {
      return {left}
    }
    else if (dropdownPosition === 'right') {
      return {top, left: right}
    }
    else {
      throw new Error(`Position ${dropdownPosition} not supported`)
    }
  }

  createDropdown() {
    const {items, dropdownClassName} = this.props
    const position = this.getDropdownPosition()
    return (
      <Dropdown items={items}
                className={dropdownClassName}
                onClick={() => this.hide()}
                {...position}
      />
    )
  }

  render() {
    const {icon, text, className='', openOnMouseOver} = this.props
    const {active} = this.state
    return (
      <div className={className + ' ' + (active ? 'active' : '')}
           onClick={() => this.toggle()}
           onMouseOver={() => openOnMouseOver && this.show()}
           ref={(el) => this.calculateDimensions(el)}
      >
        <div>
          {icon && <span className={'icon ' + icon} />}
          {text && <span className='text'>{text}</span>}
        </div>
        {active && this.createDropdown()}
      </div>
    )
  }
}

const MenuItem = onClickOutside(InnerMenuItem)

MenuItem.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  dropdownPosition: PropTypes.string,
  className: PropTypes.string,
  dropdownClassName: PropTypes.string,
  openOnMouseOver: PropTypes.bool
}

const DesktopFrame = () => (
  <div className={styles.container}>
    <div className='menu'>
      <div className='logo'>
        <MenuItem icon='KF' items={system} />
      </div>
      <div className='left'>
        <MenuItem text='Applications' items={applications} />
        <MenuItem text='Settings' items={settings} />
      </div>
      <div className='right'>
        <div className='time'>
          <Clock format='dddd MMMM D [&nbsp;] h:mm A' />
        </div>
      </div>
    </div>
    <div className='left' />
    <div className='right' />
    <div className='bottom' />
  </div>
)

export default DesktopFrame