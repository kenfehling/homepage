import React, {Component} from 'react'
import {HeaderLink} from 'react-router-nested-history'
import ReactTooltip from 'react-tooltip'
import bowser from 'bowser'
import * as styles from './Dock.scss'

const noop = () => {}

class BouncingDockItem extends Component {
  constructor(props) {
    super(props)
    const {bounce, isActive} = props
    this.state = {
      bouncing: bounce && !isActive
    }
  }

  turnOffBounce() {
    this.setState({bouncing: false})
  }

  componentWillReceiveProps(newProps) {
    if (newProps.isActive) {
      this.turnOffBounce()
    }
  }

  render() {
    const {children} = this.props
    const {bouncing} = this.state
    return (
      <div className={`icon ${bouncing ? 'bounce' : ''}`}
           onClick={bouncing ? () => this.turnOffBounce() : noop} >
        {children}
      </div>
    )
  }
}

const DockItem = ({name, container=`desktop_${name.toLowerCase()}`,
                   bounce=false}) => (
  <HeaderLink key={name} toContainer={container}>
    {({isActive}) => (
      <BouncingDockItem bounce={bounce} isActive={isActive}>
        <img data-tip data-for={`${name}-dock`}
             src={require('img/icons/desktop/dock/' + name + '.svg')} />
        {!bowser.tablet &&
        <ReactTooltip id={`${name}-dock`} type="light" place="top"
                      effect="solid">
          <div className="tooltip">{name}</div>
        </ReactTooltip>
        }
      </BouncingDockItem>
    )}
  </HeaderLink>
)

const Dock = ({windows}) => {
  return (
    <div className={styles.container}>
        <div className="inner-container">
            <div className="back-container" />
            <div className="front-container">
              {windows.map(props => <DockItem key={props.name} {...props} />)}
            </div>
        </div>
    </div>
  )
}

export default Dock