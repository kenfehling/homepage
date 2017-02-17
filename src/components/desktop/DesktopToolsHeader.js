import React from 'react'
import {categories} from '../../constants/tools'
import {HeaderLink} from 'react-router-nested-history'
import styles from './DesktopToolsHeader.scss'

export default () => (
  <div className={styles.container}>
    <div className="title">Skills</div>
    <div className="categories">
      {categories.map(c => (
        <HeaderLink key={c}
                    toContainer={c}
                    className='header-item'
                    activeClassName='active-header-item'>
          {c}
        </HeaderLink>
      ))}
    </div>
  </div>
)