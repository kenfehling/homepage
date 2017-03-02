import React, { PropTypes } from 'react'
import styles from './Mobile.scss'
import Dashboard from '../mobile/Dashboard'

const TopBar = () => (
  <div className="top-bar">
    <div className="network">
      <div>Network</div>
      <i className="fa fa-wifi" />
    </div>
    <div className="time">
      {new Date().toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'})}
    </div>
    <div className="battery">
      <i className="fa fa-battery-full "/>
      <div>96%</div>
    </div>
  </div>
)

const Mobile = ({useTopBar}) => {
  return (<div className={styles.container}>
    {useTopBar ? <TopBar /> : ''}
    <div className="nav">
      <h1>Ken Fehling</h1>
    </div>
    <div className="content">
      <Dashboard />
    </div>
  </div>)
}

Mobile.propTypes = {
  children: PropTypes.object,
  useTopBar: PropTypes.bool
}

export default Mobile