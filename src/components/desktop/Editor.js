import ReactTooltip from 'react-tooltip'
import styles from './Editor.scss'

const keyValueItem = (key, value) => (
  <div>
    <span className="key">{key}</span>
    <span className="symbol">:</span> <span className="value">{value}</span>
  </div>
);

const listItem = (text) => (
  <div>
    <span className="symbol">*</span> {text}
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
    <div>Use the dock at the bottom to open more applications{period}</div>
    <br />
    <br />
    <div>
      This site was built using React and some other libraries{comma} two of
      which I authored{colon}
    </div>
    <br />
    <div className='title'>react-router-nested-history</div>
    <div>Handles the windows, tabs, browser history, and transition animations</div>
    <br />
    <div className='title'>react-designable-audio-player</div>
    <div>Used for the desktop and mobile music players</div>
    <br />
    <br />
    {keyValueItem('Source code', <a target="_blank" href="https://github.com/kenfehling/me">GitHub</a>)}
  </div>
);