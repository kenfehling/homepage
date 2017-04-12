import React from 'react'
import * as styles from './Editor.scss'
import {GITHUB_REPO} from '../../constants/links'

const keyValueItem = (key, value) => (
  <div>
    <span className="key">{key}</span>
    <span className="symbol">:</span> <span className="value">{value}</span>
  </div>
);

const gitHubLink = (name) => (
  <div className='title'>
    <a target="_blank" href={`https://www.github.com/kenfehling/${name}`}>
      {name}
    </a>
  </div>
)

const colon = <span className="symbol">:</span>
const period = <span className="symbol">.</span>
const comma = <span className="symbol">,</span>

export default () => (
  <div className={styles.container}>
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
    <div>Handles the windows, tabs, browser history, and transition animations</div>
    <br />
    {gitHubLink('react-designable-audio-player')}
    <div>Used for the desktop and mobile music players</div>
    <br />
    <br />
    {keyValueItem('Source code', <a target="_blank" href={GITHUB_REPO}>GitHub</a>)}
  </div>
);