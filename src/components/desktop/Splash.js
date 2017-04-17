import React, {Component} from 'react'
import {Line} from 'rc-progress';
import * as styles from './Splash.scss'
import {SPLASH_DURATION} from '../../constants/settings'

const hideAfter = 0.5

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
        setTimeout(() => this.setState({show: false}), hideAfter * 1000)
      }
      else {
        this.setState({progress: this.state.progress + 1})
      }
    }, (SPLASH_DURATION - hideAfter) * 10)
  }

  render() {
    const {show, progress} = this.state
    return (
      <div className={styles.container}
           style={{display: show ? 'block' : 'none'}}>
        <img className='ken' src={require('img/Ken_Fehling.jpg')} />
        <Line percent={progress} className='progress' />
      </div>
    )
  }
}