import styles from './DockIcon.scss';

export default ({name, onClick}) => (
  <div className={styles.container}>
    <img src={require('img/icons/dock/' + name + '.svg')} onClick={onClick} />
  </div>
);