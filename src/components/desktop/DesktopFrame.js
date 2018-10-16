import React, {PropTypes} from 'react'
import {apps, backgrounds} from '../../constants/desktop'
import styles from './DesktopFrame.scss'
import {HeaderLink} from 'react-router-nested-history'
import Clock from '../shared/Clock'
import {changeBackground} from '../../actions/UiActions'
import connect from 'react-redux/es/connect/connect'
import MenuItem, {SubMenu} from './DropdownMenuItem'
//import ApAnalogClock from 'apeman-react-clock/lib/ap_analog_clock'
//import ApAnalogClockStyle from 'apeman-react-clock/lib/ap_digital_clock_style'
import {ApAnalogClock, ApAnalogClockStyle} from 'apeman-react-clock'
import {getHost} from '../../utils/tools'

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



const BackgroundSetting = () => (
  <SubMenu text='Background'
           items={backgrounds.map((background, i) => (
             <BackgroundItem key={i} name={background} />
           ))}
  />
)

const Restart = (props, context) => (
  <a href={getHost(context)} className='item'>Restart</a>
)
Restart.contextTypes = {serverRequest: PropTypes.object}

const system = [
  <Restart />
]

const applications = apps.map(app => <AppItem {...app} />)

const settings = [
  <BackgroundSetting />
]

const ClockDropdown = ({top, left}) => (
  <div className='dropdown'>
    <ApAnalogClockStyle scoped
                        width={140}
                        height={120}
                        color='#444'
                        backgroundColor='#F2F2F2'
    />
    <ApAnalogClock />
  </div>
)

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
        <MenuItem text={<Clock format='%A, %B %d &nbsp;%l:%M %p' />}
                  dropdownClassName='time'
                  dropdownAnchor='right'
                  items={[<ClockDropdown />]}
        />
      </div>
    </div>
    <div className='left' />
    <div className='right' />
    <div className='bottom' />
  </div>
)

export default DesktopFrame