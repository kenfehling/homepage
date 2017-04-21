import React from 'react'

export const gitHubLink = (name, className='') => (
  <a target="_blank"
     className={className}
     href={`https://www.github.com/kenfehling/${name}`}
  >
    {name}
  </a>
)