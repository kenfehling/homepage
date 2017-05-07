import React, {Component, cloneElement} from 'react'
import PropTypes from 'prop-types'
import onClickOutside from 'react-onclickoutside'
import isEqual from 'lodash/isEqual'
import styles from './DropdownMenuItem.scss'

const Dropdown = ({items, top, left, right, onClick, className=''}) => (
  <div className={styles.container + ' ' + className}
       style={{top, left, right}}
       onClick={onClick}
  >
    {items.map((item, i) => (
      <div key={i}>{cloneElement(item, {onClick})}</div>
    ))}
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

  handleClickOutside() {
    this.hide()
  }

  calculateDimensions(element) {
    if (element) {
      const newState = {
        left: element.offsetLeft,
        right: window.innerWidth - (element.offsetLeft + element.offsetWidth),
        top: element.offsetTop
      }
      const {left, right, top} = this.state
      const oldState = {left, right, top}
      if (!isEqual(oldState, newState)) {
        this.setState(newState)
      }
    }
  }

  getDropdownPosition() {
    const {dropdownPosition='bottom', dropdownAnchor='left'} = this.props
    const {left, right, top} = this.state
    if (dropdownPosition === 'bottom') {
      return dropdownAnchor === 'right' ? {right} : {left}
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

const DropdownMenuItem = onClickOutside(InnerMenuItem)

DropdownMenuItem.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  items: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  dropdownPosition: PropTypes.string,
  dropdownAnchor: PropTypes.string,
  className: PropTypes.string,
  dropdownClassName: PropTypes.string,
  openOnMouseOver: PropTypes.bool
}


export const SubMenu = ({text, items}) => (
  <DropdownMenuItem text={text}
                    className='item'
                    dropdownClassName='submenu'
                    dropdownPosition='right'
                    openOnMouseOver={true}
                    items={items}
  />
)

export default DropdownMenuItem