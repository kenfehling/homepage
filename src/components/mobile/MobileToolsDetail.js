import React from 'react'
import {
  renderStars, getTool, replaceLinks, getIcon,
  toTextDescription
} from '../../utils/tools'
import * as styles from './MobileToolsDetail.scss'
import {devicePath} from '../../utils/mobile'
import Head from '../shared/Head'

const MobileToolsDetail = ({match:{params:{tool, category}}, isDesktop}) => {
  const toolObject = getTool(tool)
  const {name, fullName, stars, description, categories} = toolObject
  const path = devicePath(`/tools/${category}`, isDesktop)
  return (<div className={styles.container} key={name}>
    <Head title={`${fullName} - ${categories.join(', ')} tools`}
          description={toTextDescription(description)}
          keywords={[fullName, ...categories].join(',')}
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