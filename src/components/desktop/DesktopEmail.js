import React, {Component} from 'react'
import Helmet from 'react-helmet'
import validator from 'validator'
import * as styles from './DesktopEmail.scss'
import {EMAIL} from '../../constants/links'
import serialize from 'form-serialize'
import fetch from 'isomorphic-fetch'
import keys from 'lodash/keys'
import {CSSTransitionGroup} from 'react-transition-group'

const SUCCESS_DURATION = 5000

const Success = () => (
  <div className='success'>
    <div className='title'>Thank you!</div>
    <div>You'll hear from me soon.</div>
  </div>
)

class Form extends Component {
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
    return 'label' + (this.state.invalidFields.includes(el) ? ' invalid' : '')
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
    const invalids = keys(this.validators).filter(k => !this.validators[k]())
    this.setState({invalidFields: invalids})
    return invalids.length === 0
  }

  submit(event) {
    event.preventDefault()
    if (this.validate()) {
      this.submitBtn.disabled = true
      fetch('/api/contact', {
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(serialize(event.target, {hash: true}))
      }).then(response => {
        if (response.status === 200) {
          this.props.onSuccess()
        }
        else {
          alert(response.statusText)
        }
      })
    }
  }

  render() {
    return (
      <div className='form'>
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
                    ref={(el) => {this.body = el}}
                    onChange={this.setOpenInEmailLink.bind(this)}
                    placeholder={'Hi Ken,\n\n' +
                    'I love your website.\n\n' +
                    'I\'d like to hire you for training or contract work.'}
          />
          <br />
          <div className='buttons'>
            <input type='submit'
                   value='Send'
                   ref={(el) => {this.submitBtn = el}}
            />
            <a ref={(el) => {this.openInEmailBtn = el}}>
              <input type='button' value='Open in email' />
            </a>
          </div>
        </form>
      </div>
    )
  }
}

class DesktopEmail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      submitted: false
    }
  }

  showSuccess() {
    this.setState({submitted: true})
    setTimeout(() => this.setState({submitted: false}), SUCCESS_DURATION)
  }

  render() {
    return (
      <div className={styles.container}>
        <CSSTransitionGroup
          transitionName='transition'
          transitionEnterTimeout={0}
          transitionLeaveTimeout={0}>
          {
            this.state.submitted ?
            <Success key='success' /> :
            <Form key='form' onSuccess={this.showSuccess.bind(this)} />
          }
        </CSSTransitionGroup>
        <Helmet>
          <title>Ken Fehling - Contact</title>
          <meta name='description'
                content='Contact me for freelance work or consulting'
          />
          <meta name="keywords"
                content="contact, email"
          />
        </Helmet>
      </div>
    )
  }
}

export default DesktopEmail