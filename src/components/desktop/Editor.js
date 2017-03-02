import ReactTooltip from 'react-tooltip'
import styles from './Editor.scss'

const keyValueItem = (key, value) => (
    <div>
        <span className="key">{key}</span>
        <span className="symbol">:</span> <span className="value">{value}</span>
    </div>
);

export default () => (
    <div className={styles.container}>
        <div>Ken Fehling</div>
        <br />
        <div className="title">Education</div>
        <div>Stony Brook University</div>
        {keyValueItem('Major', 'Computer Science')}
        {keyValueItem('Minors', 'Digital Art, Music Technology')}
        <br />
        <div className="title">Work Experience</div>
        <div>
            <a target="_blank" href="https://it.stonybrook.edu/services/teaching-learning-lab">
                TLT Media Lab
            </a>
        </div>
        <div><span data-tip data-for='tll'>Software Developer</span></div>
        <ReactTooltip id='tll'>
            <div className="tooltip">
                <div>Developed educational software systems for faculty.</div>
                <div>Gathered stakeholder requirements and designed a web-based system with feedback from the clients.</div>
                <div>Improved lab operations by introducing tools like Git, NPM, Webpack, Browserify, Gulp, and Trello to the team.</div>
            </div>
        </ReactTooltip>
        <br />
        <div className="title">Projects</div>
        {keyValueItem('Android apps', <a target="_blank" href="http://androidideas.org">androidideas.org</a>)}
        {keyValueItem('GitHub', <a target="_blank" href="https://github.com/kenfehling">kenfehling</a>)}
    </div>
);