import React from 'react'
import Helmet from "react-helmet"
import {BackLink} from 'react-router-nested-history'
import {
  renderStars, getTool, replaceLinks, getIcon,
  removeLinks
} from '../../utils/tools'
import * as styles from './DesktopToolsDetail.scss'

const DesktopToolsDetail = ({match:{params:{tool, category}}}) => {
  const toolObject = getTool(tool)
  const {name, fullName, stars, description} = toolObject
  const path = `/tools/${category}`
  return (<div className={styles.container} key={name}>
    <Helmet title={tool} titleTemplate='Ken Fehling - Tools: %s'>
      <meta name='description'
            content={removeLinks(description)}
      />
      <meta name="keywords"
            content={fullName}
      />
    </Helmet>
    <div className='heading'>
      <div className='inner-heading'>
        <div className='back'>
          <BackLink>
            {({params:{tool, category}}) => (
              <div className='link'>
                <i className="fa fa-chevron-left" />
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