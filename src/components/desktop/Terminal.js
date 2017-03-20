import Typist from 'react-typist'
import styles from './Terminal.scss'

export default () => (
  <Typist className={styles.container}>
      <span className="my-custom-class"> First Sentence </span>
      <br />
      <div className="container">
          <p> This will be animated after first sentence is complete </p>
      </div>
      Final sentence
  </Typist>
)