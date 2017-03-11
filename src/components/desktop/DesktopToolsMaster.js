import React, {Component, PropTypes} from 'react'
import {ScrollArea} from 'react-router-nested-history'
import * as _ from 'lodash'
import BaseToolsMaster from '../shared/BaseToolsMaster'
import styles from './DesktopToolsMaster.scss'

const ROWS = 2

const arrangeTools = (tools) => {
  const n = _.size(tools)
  return (
    <ScrollArea resetOnLeave={true} className={styles.container}>
      <div className="scroll-area">
        {_.range(Math.ceil(n / ROWS)).map(col =>
          <div className="col" key={col}>
            {_.range(ROWS).map(row =>
              n >= col * ROWS + row + 1 ? tools[col * ROWS + row] : '')}
          </div>
        )}
      </div>
    </ScrollArea>
  )
}

const DesktopToolsMaster = props => (
  <BaseToolsMaster {...props}
                   className={styles.container}
                   arrangeTools={arrangeTools}
  />
)

export default DesktopToolsMaster