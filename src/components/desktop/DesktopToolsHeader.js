import React from 'react'
import {categories} from '../../constants/tools'
import {HeaderLink} from 'react-router-nested-history'
import * as styles from './DesktopToolsHeader.scss'
import {neverUpdate} from '../../enhancers'

const DesktopToolsHeader = () => (
  <div className={styles.container}>
    <div className="categories">
      {categories.map(c => (
        <HeaderLink key={c}
                    toContainer={c + '_tools'}
                    className='header-item'
                    activeClassName='active-header-item'>
          {c}
        </HeaderLink>
      ))}
    </div>
  </div>
)

export default DesktopToolsHeader