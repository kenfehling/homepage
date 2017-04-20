import React from 'react'
import Helmet from 'react-helmet'

const img = "http://www.kenfehling.com/static/Ken_Fehling.jpg"

const Head = ({title, description, keywords}) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <meta itemprop="name" content={title} />
    <meta itemprop="description" content={description} />
    <meta itemprop="image" content={img} />
    <meta itemprop="url" content={window.location.href} />
    <meta itemprop="keywords" content={keywords} />
    <meta property="og:title" content={title} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={window.location.href} />
    <meta property="og:image" content={img} />
    <meta property="og:description" content={description} />
    <meta property="og:site_name" content="kenfehling.com" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="@kenfehling" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={img} />
  </Helmet>
)

export default Head