import React from 'react'
import {Container, HistoryRoute} from 'react-router-nested-history'
import List from './List'
import Page from './MobilePage'
import Contact from './MobileContact'
import * as styles from './Contacts.scss'
import {devicePath} from '../../utils/mobile'
import {EMAIL} from '../../constants/links'
import Head from '../shared/Head'

const escapeName = name => name.replace('_', ' ')

const Contacts = ({isDesktop}) => {
  const contacts = [{
    name: 'Ken Fehling',
    icon: 'mobile/contacts/Ken_Fehling.jpg',
    page: devicePath('contacts/Ken_Fehling', isDesktop),
    email: EMAIL,
    website: 'kenfehling.com',
    twitter: 'kenfehling'
  }]

  const findContact = name => contacts.find(c => c.name === escapeName(name))

  return (
    <div style={{width: '100%', height: '100%'}}>
      <Container name='mobile_contacts'
               initialUrl={devicePath('contacts', isDesktop)}
               patterns={[
                 devicePath(':app(contacts)', isDesktop),
                 devicePath(':app(contacts)/:name', isDesktop)
               ]}
      >
        <HistoryRoute path={devicePath(':app(contacts)', isDesktop)} exact>
          <Page title='Contacts' isDesktop={isDesktop} navClassName={styles.nav}>
            <List items={contacts}/>
          </Page>
        </HistoryRoute>

        <HistoryRoute path={devicePath(':app(contacts)/:name', isDesktop)} exact>
          {({match:{params:{name}}}) => (
            <Page isDesktop={isDesktop} navClassName={styles.nav}>
              <Contact contact={findContact(name)}/>
            </Page>
          )}
        </HistoryRoute>
      </Container>
      <Head title='Ken Fehling - Contacts'
            description='Important contacts in the web development industry'
            keywords="Ken Fehling, contacts, rolodex"
      />
    </div>
  )
}

export default Contacts