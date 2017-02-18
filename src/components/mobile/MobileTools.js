import React, { PropTypes } from 'react'
import List from './List'
import BaseTools from '../shared/BaseTools'
import styles from './MobileTools.scss'

function renderTools(tools) {
  return <List items={tools} />
}

const Tools = props => (
  <BaseTools
    {...props}
    renderTools={renderTools}
    className={styles.container}
  />
)

Tools.propTypes = {
  category: PropTypes.string,
  selectedTool: PropTypes.string
}

export default Tools
