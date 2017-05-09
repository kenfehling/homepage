import React from 'react'
import Helmet from 'react-helmet'
import {withRouter} from 'react-router'
import {WhenActive} from 'react-router-nested-history'
import {BASE_URL, FACEBOOK_APP_ID, NAKED_DOMAIN} from '../../constants/links'

const img = BASE_URL + '/static/Ken_Fehling.jpg'

const Head = ({title, description, keywords, location}) => {
  const url = BASE_URL + location.pathname
    return (
      <WhenActive>
        <Helmet>
          <title>{title}</title>
          <link rel="canonical" href={url} />
          <meta name="description" content={description}/>
          <meta name="keywords" content={keywords}/>
          <meta itemprop="name" content={title}/>
          <meta itemprop="description" content={description}/>
          <meta itemprop="image" content={img}/>
          <meta itemprop="url" content={url}/>
          <meta itemprop="keywords" content={keywords}/>
          <meta property='fb:app_id' content={FACEBOOK_APP_ID}/>
          <meta property="og:title" content={title}/>
          <meta property="og:type" content="website"/>
          <meta property="og:url" content={url}/>
          <meta property="og:image" content={img}/>
          <meta property="og:description" content={description}/>
          <meta property="og:site_name" content={NAKED_DOMAIN} />
          <meta name="twitter:card" content="summary"/>
          <meta name="twitter:site" content="@kenfehling"/>
          <meta name="twitter:title" content={title}/>
          <meta name="twitter:description" content={description}/>
          <meta name="twitter:image" content={img}/>
        </Helmet>
    </WhenActive>
  )
}

export default withRouter(Head)