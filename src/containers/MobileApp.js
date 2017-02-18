import React, { PropTypes } from 'react'
import Mobile from '../components/shared/Mobile'

const MobileApp = () => {
  return (<Mobile isDesktop={false}>
    
  </Mobile>)
}

MobileApp.propTypes = {
  children: PropTypes.object.isRequired
}

export default MobileApp