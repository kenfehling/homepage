import React, { Component, PropTypes } from 'react'
import _ from 'lodash'
import { categories } from '../../constants/tools'
import { linkToCategory } from '../../utils/tools'

export default class BaseToolsHeader extends Component {
  static propTypes = {
    category: PropTypes.string,
    className: PropTypes.string
  }

  static contextTypes = {
    activePage: PropTypes.object.isRequired
  }

  render() {
    const {className} = this.props
    const {activePage:{params:{category}}} = this.context

    return (<div className={className}>
      <div className="title">Skills</div>
      <div className="categories">
        {_.map(categories, c => linkToCategory(c, category))}
      </div>
    </div>)
  }
}