import React from 'react'
import {ScrollArea, HistoryLink} from 'react-router-nested-history'
import {
  getIcon, renderStars, filterTools, getMainName, escapeName
} from '../../utils/tools'
import * as styles from './DesktopToolsMaster.scss'
import Helmet from 'react-helmet'
import {neverUpdate} from '../../enhancers'
import {tools} from '../../constants/tools'

const renderTool = (tool, category) => {
  const {name, stars} = tool

  const names = tools.map(t => t.name)
  const mainName = names.includes(name) ? name : getMainName(name).name
  const escapedName = escapeName(mainName)

  const to = `/tools/${category}/${escapedName}`
  return (
    <HistoryLink key={mainName + Math.random()}
                 to={to}
                 name={mainName}
                 className='tool'
    >
      {getIcon(tool)}
      <div className="name">{name}</div>
      {renderStars(stars)}
    </HistoryLink>
  )
}

const arrangeTools = (tools) => {
  return (
    <ScrollArea resetOnLeave={true} className={styles.container} vertical={true}>
      <div className='scroll-area'>
        {tools}
      </div>
    </ScrollArea>
  )
}

const DesktopToolsMaster = ({match:{params:{category}}}) => (
  <div className={styles.container}>
    {arrangeTools(filterTools(category).map(t => renderTool(t, category)))}
    <Helmet title={category} titleTemplate="Ken Fehling - Tools: %s" />
  </div>
)


export default neverUpdate(DesktopToolsMaster)