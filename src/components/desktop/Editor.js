import React from 'react'
import * as styles from './Editor.scss'
import {GITHUB_REPO} from '../../constants/links'
import {gitHubLink as _gitHubLink} from '../../utils/links'
import Head from '../shared/Head'

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
    <div>
      It has separate desktop and mobile designs.
    </div>
    <br />
    {gitHubLink('react-router-nested-history')}
    <div>
      Handles the windows{comma} tabs{comma} browser history{comma} and
      transition animations
    </div>
    <br />
    {gitHubLink('react-designable-audio-player')}
    <div>Used for both the desktop and mobile music players</div>
    <br />
    <br />
    {keyValueItem('Source code', <a target="_blank" href={GITHUB_REPO}>GitHub</a>)}
    <Head title='Ken Fehling - About'
          description='This site was built using React and some other libraries, two of which I authored:'
          keywords="Ken Fehling, React, libraries"
    />
  </div>
);