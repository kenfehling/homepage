import React, {Component} from 'react'
import validator from 'validator'
import * as styles from './DesktopEmail.scss'
import {EMAIL} from '../../constants/links'
import * as _ from 'lodash'
import serialize from 'form-serialize'
import fetch from 'isomorphic-fetch'

class DesktopEmail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      invalidFields: []
    }

    this.validators = {
      from: () => validator.isEmail(this.from.value),
      subject: () => this.subject.value && this.subject.value.trim() !== '',
      body: () => this.body.value && this.body.value.trim() !== ''
    }
  }

  getLabelClass(el) {
    return 'label' + (_.includes(this.state.invalidFields, el) ? ' invalid' : '')
  }

  setOpenInEmailLink() {
    const subject = this.subject.value
    const body = this.body.value
    this.openInEmailBtn.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
  }

  componentDidMount() {
    this.setOpenInEmailLink()
  }

  validate() {
    const invalids = _.keys(this.validators).filter(k => !this.validators[k]())
    this.setState({invalidFields: invalids})
    return _.isEmpty(invalids)
  }

  submit(event) {
    event.preventDefault()
    if (this.validate()) {
      fetch('/contact', {
        method: "POST",
        body: serialize(event.target, { hash: true })
      }).then(response => {
        if (response.status === 200) {

        }
        else {
          alert(response.statusText)
        }
      })
    }
  }

  render() {
    return (
      <div className={styles.container}>
        <form onSubmit={this.submit.bind(this)}>
          <div>
            <span className='label'>To:</span>
            Ken Fehling &lt;<a href={`mailto:${EMAIL}`}>{EMAIL}</a>&gt;
          </div>
          <br />
          <label>
            <span className={this.getLabelClass('from')}>
              From:
            </span>
            <input type='text'
                   name='from'
                   ref={(el) => {this.from = el}}
                   placeholder='Your email address' />
          </label>
          <br />
          <label>
            <span className={this.getLabelClass('subject')}>Subject:</span>
            <input type='text'
                   name='subject'
                   ref={(el) => {this.subject = el}}
                   onChange={this.setOpenInEmailLink.bind(this)}
                   placeholder="Freelance work/consulting"
            />
          </label>
          <br />
          <span className={this.getLabelClass('body')}>Message:</span>
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