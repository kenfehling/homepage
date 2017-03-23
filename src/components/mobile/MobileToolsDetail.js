import React, {Component, PropTypes} from 'react'
import Helmet from "react-helmet"
import {renderStars, getTool, replaceLinks, getIcon} from '../../utils/tools'
import styles from './MobileToolsDetail.scss'
import {devicePath} from '../../utils/mobile'

const MobileToolsDetail = ({match:{params:{tool, category}}, isDesktop}) => {
  const toolObject = getTool(tool)
  const {name, fullName, stars, description} = toolObject
  const path = devicePath(`/tools/${category}`, isDesktop)
  return (<div className={styles.container} key={name}>
    <Helmet
      title={`${!toolObject ? (category || '') : tool || ''}`}
      titleTemplate="Ken Fehling - %s"
      defaultTitle="Ken Fehling"
    />
    <div className="heading">
      <div className='icon'>{getIcon(toolObject)}</div>
      <div>
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

export default MobileToolsDetail