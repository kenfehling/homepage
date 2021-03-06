import React, {Component} from 'react'
import PropTypes from 'prop-types'
import strftime from 'strftime'

const ONE_MINUTE = 60000

class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: null
    }
  }

  setTime() {
    this.setState({time: new Date()})
  }

  componentDidMount() {
    this.setTime()
    this.intervalId1 = setTimeout(() => {
      this.setTime()
      this.intervalId2 = setInterval(() => this.setTime(), ONE_MINUTE)
    }, ONE_MINUTE - (new Date().getTime() % 60000))
  }

  componentWillUnmount(){
    clearInterval(this.intervalId1)
    clearInterval(this.intervalId2)
  }

  render() {
    const {format} = this.props
    const {time} = this.state
    return (
      <div>
        {time && strftime(format)}
      </div>
    )
  }
}

Clock.propTypes = {
  format: PropTypes.string.isRequired
}

export default Clock