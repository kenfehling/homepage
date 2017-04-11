import React, {Component} from 'react'
import * as styles from './DesktopEmail.scss'
import {EMAIL} from '../../constants/links'

class DesktopEmail extends Component {

  setOpenInEmailLink() {
    const subject = this.subject.value
    const body = this.body.value
    this.openInEmailBtn.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
  }

  componentDidMount() {
    this.setOpenInEmailLink()
  }

  render() {
    return (
      <div className={styles.container}>
        <form action='/contact' method='POST'>
          <div>
            <span className='label'>To:</span>
            Ken Fehling &lt;<a href={`mailto:${EMAIL}`}>{EMAIL}</a>&gt;
          </div>
          <br />
          <label>
            <span className='label'>From:</span>
            <input type='text'
                   name='from'
                   defaultValue='Your email address' />
          </label>
          <br />
          <label>
            <span className='label'>Subject:</span>
            <input type='text'
                   name='subject'
                   ref={(el) => {this.subject = el}}
                   onChange={this.setOpenInEmailLink.bind(this)}
                   defaultValue="Consulting/freelance work"
            />
          </label>
          <br />
          <span className='label'>Message:</span>
          <textarea name='body'
                    rows='10'
                    ref={(el) => {this.body = el}}
                    onChange={this.setOpenInEmailLink.bind(this)}
                    defaultValue={'Hi Ken,\n\n' +
                    'I love your website.\n\n' +
                    'I\'d like to hire you for training or contract work.'}
          />
          <br />
          <div className='buttons'>
            <input type='submit' value='Send' />
            <a ref={(el) => {this.openInEmailBtn = el}}>
              <input type='button' value='Open in email' />
            </a>
          </div>
        </form>
      </div>
    )
  }
}

export default DesktopEmail