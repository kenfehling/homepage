import React, { Component, PropTypes } from 'react'
import Helmet from "react-helmet"
import _ from 'lodash'
import { tools, categories } from '../../constants/tools'
import { linkToTool, getIcon, renderStars } from '../../utils/tools'

export default class BaseToolsMaster extends Component {
  static propTypes = {
    arrangeTools: PropTypes.func,
    category: PropTypes.string,
    tool: PropTypes.string,
    className: PropTypes.string
  }
  
  renderTool(tool) {
    const {category=categories[0]} = this.props
    const {name, stars} = tool
    return linkToTool(name, category, (<div className="tool">
      {getIcon(tool)}
      <div className="name">{name}</div>
      {renderStars(stars)}
    </div>))
  }

  render() {
    const {arrangeTools, params:{category}, tool, className} = this.props
    const filteredTools = !category || category === 'All' ? tools :
        _.filter(tools, t => _.includes(t.categories, category))
    const renderedTools = _.map(filteredTools, this.renderTool.bind(this))
    return (<div className={className}>
      <Helmet
          title={`${!tool ? (category || '') : tool || ''}`}
          titleTemplate="Ken Fehling - %s"
          defaultTitle="Ken Fehling"
      />
      <div className="tools">{arrangeTools ? arrangeTools(renderedTools) : renderedTools}</div>
    </div>)
  }
}