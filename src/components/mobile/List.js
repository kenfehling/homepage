import _ from 'lodash';
import styles from './List.scss';

const req = require.context("img/icons", true, /^\.\/.*$/);

const ListItem = ({icon, name}) => (
  <div className="item">
    <img className="icon" src={req(icon)} />
    <div className="name">{name}</div>
  </div>
);

export default ({items}) => {
  return (<div className={styles.list}>
    {_.map(items, item => <ListItem key={item.name} {...item} />)}
  </div>);
};
