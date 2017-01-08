import React, { Component, PropTypes } from 'react'
import _ from 'lodash'
import { categories } from '../../constants/tools'
import { switchToContainer } from "react-router-nested-history";

export default class BaseToolsHeader extends Component {
  static propTypes = {
    className: PropTypes.string
  }

  static contextTypes = {
    activePage: PropTypes.object,
    groupIndex: PropTypes.number.isRequired
  }

  onLinkClick(event, i) {
    const { groupIndex } = this.context
    switchToContainer(groupIndex, i)
    event.preventDefault()
  }

  renderLink(category, i, currentCategory) {
    const className = category === currentCategory ? 'current' : ''
    return (<a href={'/tools/' + category} className={className} key={i}
               onClick={e => this.onLinkClick(e, i)}>
      {category}
    </a>)
  }

  render() {
    const {className} = this.props
    const {activePage:{params:{category=categories[0]}={}}={}} = this.context
    return (<div className={className}>
      <div className="title">Skills</div>
      <div className="categories">
        {_.map(categories, (c, i) => this.renderLink(c, i, category))}
      </div>
    </div>)
  }
}