import React, {Component, PropTypes} from 'react'
import Helmet from "react-helmet"
import {BackLink} from 'react-router-nested-history'
import {renderStars, getTool, replaceLinks, getIcon} from '../../utils/tools'
import styles from './DesktopToolsDetail.scss'

const DesktopToolsDetail = ({match:{params:{tool, category}}}) => {
  const toolObject = getTool(tool)
  const {name, fullName, stars, description} = toolObject
  const path = `/tools/${category}`
  return (<div className={styles.container} key={name}>
    <Helmet
      title={`${!toolObject ? (category || '') : tool || ''}`}
      titleTemplate="Ken Fehling - %s"
      defaultTitle="Ken Fehling"
    />
    <div className="heading">
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
    <div className="description">{replaceLinks(description, path)}</div>
  </div>)
}

export default DesktopToolsDetail