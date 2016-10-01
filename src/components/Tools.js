import Window from './Window';
import styles from './Tools.scss'
import _ from 'lodash';

const ROWS = 2;
const starIcon = require('img/icons/star.svg');
const halfStarIcon = require('img/icons/half-star.svg');

const tools = [
    { name: 'JavaScript', stars: 5 },
    { name: 'React', stars: 4.5 },
    { name: 'Python', stars: 4 },
    { name: 'Java', stars: 3.5 },
    { name: 'Ruby', stars: 3 },
    { name: 'Illustrator', stars: 2 }
];

const Tool = ({name, stars}) => (
    <div className="tool">
        <img className="icon" src={require('img/icons/tools/' + name.replace(' ', '_') + '.svg')} />
        <div className="name">{name}</div>
        <div className="stars">
            {_.map(_.range(Math.floor(stars)), i => <img key={i} src={starIcon} />)}
            {stars % 1 === 0.5 ? <img src={halfStarIcon} /> : ''}
        </div>
    </div>
);

const Menu = () => (
    <div className="menu">
        <div>All</div>
        <div>Languages</div>
        <div>Libraries</div>
        <div>Platforms</div>
        <div>Software</div>
    </div>
);

export default () => (
    <Window name="Tools" bgColor="#FFF" fgColor="#000" usePadding={false}>
        <div className={styles.container}>
            <div className="header">
                <div className="title">Skills</div>
                <Menu />
            </div>
            <div className="tools">
                {_.map(_.range(Math.ceil(_.size(tools) / ROWS)), col =>
                    <div className="col">
                        {_.map(_.range(ROWS), row =>
                            <Tool key={tools[col * ROWS + row].name} {...tools[col * ROWS + row]} />
                        )}
                    </div>
                )}
            </div>
        </div>
    </Window>
);