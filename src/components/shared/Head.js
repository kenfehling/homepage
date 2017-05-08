import React from 'react'
import Helmet from 'react-helmet'
import {HistoryRoute} from 'react-router-nested-history'
import {DOMAIN} from '../../constants/links'

const img = `http://www.${DOMAIN}/static/Ken_Fehling.jpg`

const Head = ({title, description, keywords, location}) => {
  const href = DOMAIN + location.pathname
  const url = 'http://' +  href
  const canonicalUrl = 'http://www.' + href
  return (
    <Helmet>
      <title>{title}</title>
      <link rel="canonical" href={canonicalUrl} />
      <meta name="description" content={description}/>
      <meta name="keywords" content={keywords}/>
      <meta itemprop="name" content={title}/>
      <meta itemprop="description" content={description}/>
      <meta itemprop="image" content={img}/>
      <meta itemprop="url" content={url}/>
      <meta itemprop="keywords" content={keywords}/>
      <meta property="og:title" content={title}/>
      <meta property="og:type" content="website"/>
      <meta property="og:url" content={url}/>
      <meta property="og:image" content={img}/>
      <meta property="og:description" content={description}/>
      <meta property="og:site_name" content={DOMAIN} />
      <meta name="twitter:card" content="summary"/>
      <meta name="twitter:site" content="@kenfehling"/>
      <meta name="twitter:title" content={title}/>
      <meta name="twitter:description" content={description}/>
      <meta name="twitter:image" content={img}/>
    </Helmet>
  )
}

export default props => <HistoryRoute render={routeComponentProps => (
  <Head {...props} {...routeComponentProps} />
)} />