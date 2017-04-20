import React from 'react'
import {ScrollArea, HistoryLink} from 'react-router-nested-history'
import {
  getIcon, renderStars, filterTools, getMainName, escapeName
} from '../../utils/tools'
import * as styles from './DesktopToolsMaster.scss'
import {neverUpdate} from '../../enhancers'
import {tools} from '../../constants/tools'
import Head from '../shared/Head'

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

const DesktopToolsMaster = ({match:{params:{category}}}) => {
  const ts = filterTools(category)
  return (
    <div className={styles.container}>
      {arrangeTools(ts.map(t => renderTool(t, category)))}
      <Head title={`${category} tools`}
            description={`${category} tools that I use`}
            keywords={[category, ...ts].join(',')}
      />
    </div>
  )
}


export default neverUpdate(DesktopToolsMaster)