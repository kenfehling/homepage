import React, {Component} from 'react'
import {Line} from 'rc-progress';
import * as styles from './Splash.scss'
import {HIDE_SPLASH_AFTER, SPLASH_DURATION} from '../../constants/settings'

const SLICES = 50

const SLICE_SIZE = 1000 / SLICES
const STEP_SIZE = 100 / SLICES
const INTERVAL = (SPLASH_DURATION - HIDE_SPLASH_AFTER) * SLICE_SIZE
const HIDE_AFTER = HIDE_SPLASH_AFTER * 1000

export default class Splash extends Component {
  constructor(props) {
    super(props)
    this.state = {
      progress: 0,
      show: true
    }
  }

  componentDidMount() {
    const interval = setInterval(() => {
      if (this.state.progress === 100) {
        clearInterval(interval)
        setTimeout(() => this.setState({show: false}), HIDE_AFTER)
      }
      else {
        this.setState({progress: this.state.progress + STEP_SIZE})
      }
    }, INTERVAL)
  }

  render() {
    const {show, progress} = this.state
    return (
      <div className={styles.container}
           style={{display: show ? 'block' : 'none'}}>
        <img className='ken'
             alt='Ken Fehling'
             src={require('img/Ken_Fehling.jpg')}
        />
        <Line percent={progress} className='progress' />
      </div>
    )
  }
}