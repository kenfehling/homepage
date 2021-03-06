import React from 'react'
import Typist from 'react-typist'
import * as styles from './Terminal.scss'

const menuItems = [
  { name: 'File' }
]

export default () => (
  <div className={`${styles.container} code-font`}>
    <div className="menu">
      <div>Terminal</div>
      {menuItems.map(item => <div key={item.name}>{item.name}</div>)}
    </div>
    <Typist className="content">
      <span className="my-custom-class">Hello</span>
      <br />
      <div className="container">
        <p>I'm not sure what to do with this component yet</p>
      </div>
    </Typist>
  </div>
)