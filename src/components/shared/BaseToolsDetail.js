import React, { Component, PropTypes, createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import reactStringReplace from 'react-string-replace'
import Helmet from "react-helmet"
import _ from 'lodash'
import { BackLink } from 'react-router-nested-history'
import { tools } from '../../constants/tools'
import { escapeName, linkToTool, renderStars, getToolByName} from '../../utils/tools'

export default class BaseToolsDetail extends Component {
  replaceLinks(element) {
    const {params:{category}} = this.props
    const children = reactStringReplace(element.props.children, /\[\[(\w+)]]/g,
        match => linkToTool(match, category))
    return createElement(element.type, {children})
  }

  render() {
    const {params:{tool, category}, className} = this.props
    const {name, fullName, stars, description} = getToolByName(tool)
    return (<div className={className} key={name}>
      <Helmet
          title={`${!tool ? (category || '') : tool || ''}`}
          titleTemplate="Ken Fehling - %s"
          defaultTitle="Ken Fehling"
      />
      <div className="heading">
        <BackLink />
        <div className="title">{fullName || name}</div>
        <div className="skill">
          <div className="label">Skill level:</div>
          {renderStars(stars)}
        </div>
      </div>
      <div className="body">{this.replaceLinks(description)}</div>
    </div>)
  }
}

BaseToolsDetail.propTypes = {
  category: PropTypes.string,
  tool: PropTypes.string,
  className: PropTypes.string
}