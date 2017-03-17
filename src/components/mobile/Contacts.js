import {Container, HistoryRoute} from 'react-router-nested-history'
import List from './List'
import Page from './MobilePage'
import Contact from './Contact'
import * as _ from 'lodash'

const escapeName = name => name.replace('_', ' ')
const findContact = name => _.find(contacts, c => c.name === escapeName(name))

const contacts = [{
  name: 'Ken Fehling',
  icon: 'mobile/contacts/Ken_Fehling.jpg',
  page: '/mobile/contacts/Ken_Fehling',
  email: 'ken@androidideas.org',
  website: 'kenfehling.com',
  twitter: 'kenfehling'
}]

const Contacts = ({useTopBar}) => (
  <Container name='mobile_contacts'
             initialUrl='/mobile/contacts'
             patterns={[
               '/mobile/:app(contacts)',
               '/mobile/:app(contacts)/:name'
             ]}
  >
    <HistoryRoute path='/mobile/:app(contacts)' exact>
      <Page title='Contacts' useTopBar={useTopBar}>
        <List items={contacts} />
      </Page>
    </HistoryRoute>

    <HistoryRoute path='/mobile/:app(contacts)/:name' exact>
      {({match:{params:{name}}}) => (
        <Page useTopBar={useTopBar}>
          <Contact contact={findContact(name)} />
        </Page>
      )}
    </HistoryRoute>
  </Container>
)

export default Contacts