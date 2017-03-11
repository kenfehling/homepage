import React, {Component, PropTypes} from 'react'
import Helmet from "react-helmet"
import _ from 'lodash'
import {linkToTool, getIcon, renderStars, filterTools} from '../../utils/tools'

export default class BaseToolsMaster extends Component {
  static propTypes = {
    arrangeTools: PropTypes.func,
    category: PropTypes.string,
    tool: PropTypes.string,
    className: PropTypes.string
  }
  
  renderTool(tool) {
    const {match:{params:{category}}} = this.props
    const {name, stars} = tool
    return linkToTool(name, category, (<div className="tool">
      {getIcon(tool)}
      <div className="name">{name}</div>
      {renderStars(stars)}
    </div>))
  }

  render() {
    const {arrangeTools, match:{params:{category}}, tool, className} = this.props
    const renderedTools = _.map(filterTools(category), this.renderTool.bind(this))
    return (<div className={className}>
      <Helmet
          title={`${!tool ? (category || '') : tool || ''}`}
          titleTemplate="Ken Fehling - %s"
          defaultTitle="Ken Fehling"
      />
      <div className="tools">
        {arrangeTools ? arrangeTools(renderedTools) : renderedTools}
      </div>
    </div>)
  }
}