import React, { Component, PropTypes } from 'react'
import * as _ from 'lodash'
import BaseToolsMaster from '../shared/BaseToolsMaster'
import styles from './DesktopToolsMaster.scss'

const ROWS = 2

function saveScrollLeft(event) {
  console.log(event.target.scrollLeft)
  DesktopToolsMaster.lastScrollLeft = event.target.scrollLeft
}

export default class DesktopToolsMaster extends Component {
  static propTypes = {
    category: PropTypes.string,
    tool: PropTypes.string,
    scrollLeft: PropTypes.number,
    onScroll: PropTypes.func
  }

  componentDidMount() {
    if (this.scrollArea) {
      this.scrollArea.scrollLeft = this.props.scrollLeft
    }
  }

  arrangeTools(tools) {
    const {onScroll, scrollLeft} = this.props
    const n = _.size(tools)
    return (<div className={styles.container} ref={(ref) => this.scrollArea = ref}
    onScroll={onScroll}>
      <div className="scroll-area">
        {_.range(Math.ceil(n / ROWS)).map(col =>
          <div className="col" key={col}>
            {_.range(ROWS).map(row =>
                n >= col * ROWS + row + 1 ? tools[col * ROWS + row] : '')}
          </div>
        )}
      </div>
    </div>)
  }

  render() {
    return (<BaseToolsMaster {...this.props} className={styles.container}
                             arrangeTools={this.arrangeTools.bind(this)} />)
  }
}