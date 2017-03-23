import React, {Component, PropTypes} from 'react'
import {ScrollArea} from 'react-router-nested-history'
import * as _ from 'lodash'
import {linkToTool, getIcon, renderStars, filterTools} from '../../utils/tools'
import styles from './DesktopToolsMaster.scss'
import Helmet from 'react-helmet'

const ROWS = 2

const renderTool = (tool, category) => {
  const {name, stars} = tool
  return linkToTool(name, `/tools/${category}`, (
    <div className="tool">
      {getIcon(tool)}
      <div className="name">{name}</div>
      {renderStars(stars)}
    </div>
  ))
}

const arrangeTools = (tools) => {
  const n = _.size(tools)
  return (
    <ScrollArea resetOnLeave={true} className={styles.container} horizontal={true}>
      <div className="scroll-area">
        {_.range(Math.ceil(n / ROWS)).map(col =>
          <div className="col" key={col}>
            {_.range(ROWS).map(row =>
              n >= col * ROWS + row + 1 ? tools[col * ROWS + row] : '')}
          </div>
        )}
      </div>
    </ScrollArea>
  )
}

const DesktopToolsMaster = ({match:{params:{category}}}) => (
  <div className={styles.container}>
    {arrangeTools(_.map(filterTools(category), t => renderTool(t, category)))}
    <Helmet title={category} titleTemplate="Ken Fehling - %s" />
  </div>
)


export default DesktopToolsMaster