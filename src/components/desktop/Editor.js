import React from 'react'
import Helmet from 'react-helmet'
import * as styles from './Editor.scss'
import {GITHUB_REPO} from '../../constants/links'
import {gitHubLink as _gitHubLink} from '../../utils/links'

const keyValueItem = (key, value) => (
  <div>
    <span className="key">{key}</span>
    <span className="symbol">:</span> <span className="value">{value}</span>
  </div>
);

const gitHubLink = (name) => _gitHubLink(name, 'title')

const colon = <span className="symbol">:</span>
const period = <span className="symbol">.</span>
const comma = <span className="symbol">,</span>

export default () => (
  <div className={`${styles.container} code-font`}>
    <div>Ken Fehling</div>
    <div>Personal home page</div>
    <br />
    <br />
    <div>
      This site was built using React and some other libraries{comma} two of
      which I authored{colon}
    </div>
    <br />
    {gitHubLink('react-router-nested-history')}
    <div>
      Handles the windows{comma} tabs{comma} browser history{comma} and
      transition animations
    </div>
    <br />
    {gitHubLink('react-designable-audio-player')}
    <div>Used for the desktop and mobile music players</div>
    <br />
    <br />
    {keyValueItem('Source code', <a target="_blank" href={GITHUB_REPO}>GitHub</a>)}
    <Helmet>
      <title>Ken Fehling - About</title>
      <meta name='description'
            content="This site was built using React and some other libraries, two of which I authored:"
      />
      <meta name="keywords"
            content="Ken Fehling, React, libraries"
      />
    </Helmet>
  </div>
);