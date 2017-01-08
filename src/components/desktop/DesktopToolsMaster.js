import React, { Component, PropTypes } from 'react';
import * as _ from 'lodash';
import BaseToolsMaster from '../shared/BaseToolsMaster';
import styles from './DesktopToolsMaster.scss';

const ROWS = 2;

export default class DesktopTools extends Component {
  static propTypes = {
    category: PropTypes.string,
    tool: PropTypes.string
  }

  constructor(props) {
    super(props);
    this.state = {
      lastScrollLeft: 0
    }
  }

  componentDidUpdate() {
    if (this.scrollArea) {
      this.scrollArea.scrollLeft = this.state.lastScrollLeft;
    }
  }

  arrangeTools(tools) {
    const n = _.size(tools)
    return (<div className="scroll-area" ref={(ref) => this.scrollArea = ref}
    onScroll={e => this.setState({lastScrollLeft: e.target.scrollLeft})}>
      {_.range(Math.ceil(n / ROWS)).map(col =>
        <div className="col" key={col}>
          {_.range(ROWS).map(row =>
              n >= col * ROWS + row + 1 ? tools[col * ROWS + row] : '')}
        </div>
      )}
    </div>)
  }

  render() {
    return (<BaseToolsMaster {...this.props} className={styles.container}
                             arrangeTools={this.arrangeTools.bind(this)} />)
  }
}