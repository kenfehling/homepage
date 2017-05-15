import React from 'react'
import {BackLink} from 'react-router-nested-history'
import {
  renderStars, getTool, replaceLinks, getIcon,
  toTextDescription
} from '../../utils/tools'
import * as styles from './DesktopToolsDetail.scss'
import Head from '../shared/Head'

const DesktopToolsDetail = ({match:{params:{tool, category}}}) => {
  const toolObject = getTool(tool)
  const {name, fullName, stars, description, categories} = toolObject
  const path = `/tools/${category}`
  return (<div className={styles.container} key={name}>
    <Head title={`${fullName || name} - ${categories.join(', ')} tools`}
          description={toTextDescription(description)}
          keywords={[fullName || name, ...categories].join(',')}
    />
    <div className='heading'>
      <div className='inner-heading'>
        <div className='back'>
          <BackLink>
            {({params:{tool, category}}) => (
              <div className='link'>
                <span className="chevron-left" />
                <div className='text'>{tool || category}</div>
              </div>
            )}
          </BackLink>
        </div>
        <div className='icon'>{getIcon(toolObject)}</div>
        <div className="title">{fullName || name}</div>
        <div className="skill">
          <div className="label">Skill level:</div>
          {renderStars(stars)}
        </div>
      </div>
    </div>
    <div className="description">{replaceLinks(description, path)}</div>
  </div>)
}

export default DesktopToolsDetail