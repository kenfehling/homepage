import React, {Component} from 'react'
import validator from 'validator'
import * as styles from './DesktopEmail.scss'
import {EMAIL} from '../../constants/links'

class DesktopEmail extends Component {

  constructor(props) {
    super(props)
    this.state = {
      valid: true
    }
  }

  setOpenInEmailLink() {
    const subject = this.subject.value
    const body = this.body.value
    this.openInEmailBtn.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
  }

  componentDidMount() {
    this.setOpenInEmailLink()
  }

  validate(e) {

    alert('Not implemented yet. Please send an email!')
    e.preventDefault()

    const valid = validator.isEmail(this.from.value)
    if (!valid) {
      e.preventDefault()
    }
    this.setState({valid})
  }

  render() {
    return (
      <div className={styles.container}>
        <form action='/contact'
              method='POST'
              onSubmit={this.validate.bind(this)}
        >
          <div>
            <span className='label'>To:</span>
            Ken Fehling &lt;<a href={`mailto:${EMAIL}`}>{EMAIL}</a>&gt;
          </div>
          <br />
          <label>
            <span className={['label', this.state.valid ? '' : 'invalid'].join(' ')}>
              From:
            </span>
            <input type='text'
                   name='from'
                   ref={(el) => {this.from = el}}
                   placeholder='Your email address' />
          </label>
          <br />
          <label>
            <span className='label'>Subject:</span>
            <input type='text'
                   name='subject'
                   ref={(el) => {this.subject = el}}
                   onChange={this.setOpenInEmailLink.bind(this)}
                   placeholder="Freelance work/consulting"
            />
          </label>
          <br />
          <span className='label'>Message:</span>
          <textarea name='body'
                    rows='10'
                    ref={(el) => {this.body = el}}
                    onChange={this.setOpenInEmailLink.bind(this)}
                    placeholder={'Hi Ken,\n\n' +
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