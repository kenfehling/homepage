import React from 'react'
import PropTypes from 'prop-types'
import {HistoryLink} from 'react-router-nested-history'
import * as styles from './ListItem.scss'

/**
 * Internal link (page) or external link (url)
 */
const ItemLink = ({page, url, className, children}) => (
  page ? <HistoryLink to={page} className={className}>{children}</HistoryLink> :
    url ? <a target='_blank' href={url} className={className}>{children}</a> :
      children
)

const ListItem = ({icon, name, page, url}) => (
  <div className={styles.container}>
    <ItemLink page={page} url={url} className='inner-container'>
      <img className="icon" src={require('img/icons/' + icon)} />
      <div className="name">{name}</div>
    </ItemLink>
  </div>
)

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  page: PropTypes.string,
  url: PropTypes.string
}

export default ListItem