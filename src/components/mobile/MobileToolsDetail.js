import React from 'react'
import Helmet from "react-helmet"
import {
  renderStars, getTool, replaceLinks, getIcon,
  removeLinks
} from '../../utils/tools'
import * as styles from './MobileToolsDetail.scss'
import {devicePath} from '../../utils/mobile'

const MobileToolsDetail = ({match:{params:{tool, category}}, isDesktop}) => {
  const toolObject = getTool(tool)
  const {name, fullName, stars, description} = toolObject
  const path = devicePath(`/tools/${category}`, isDesktop)
  return (<div className={styles.container} key={name}>
    <Helmet title={tool} titleTemplate="Ken Fehling - Tools: %s">
      <meta name='description'
            content={removeLinks(description)}
      />
      <meta name="keywords"
            content={fullName}
      />
    </Helmet>
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