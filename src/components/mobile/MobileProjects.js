import React from 'react'
import PropTypes from 'prop-types'
import {HistoryRoute, HistoryLink, Container} from 'react-router-nested-history'
import MobilePage from './MobilePage'
import List from './List'
import * as styles from './MobileProjects.scss'
import {devicePath} from '../../utils/mobile'
import Head from '../shared/Head'
import { projects, folders } from '../../constants/projects'

const Page = ({title, backLinkText, children, isDesktop}) => (
  <MobilePage title={title}
              backLinkText={backLinkText}
              navClassName={styles.nav}
              isDesktop={isDesktop}
  >
    {children}
  </MobilePage>
)

const Project = ({name, description, url, image}) => (
  <a key={name} target='_blank' href={url} className='project'>
    <img alt={name} src={require('img/projects/' + image)} />
    <div className='name'>{name}</div>
    <div className='description'>{description}</div>
  </a>
)

const Folders = ({items, isDesktop}) => (
  <div className='folders'>
    {items.map(item => (
      <HistoryLink key={item.id}
                 to={devicePath(`projects/${item.id}`, isDesktop)}
                 name={item.id}
                 className='folder'
    >
            <img alt={item.name}
                className='icon'
                 src={require('img/icons/desktop/dock/Projects.svg')}
            />
            <div className='name'>{item.name}</div>
      </HistoryLink>
    ))}
  </div>
)

const MobileProjects = ({isDesktop}) => (
  <div className={styles.container}>
    <Container name='mobile_projects'
              initialUrl={devicePath('projects', isDesktop)}
              patterns={[
                devicePath(`projects`, isDesktop),
                ...folders.map(f => devicePath(`projects/${f.id}`, isDesktop))
              ]}>
      <HistoryRoute path={devicePath('projects', isDesktop)} exact>
        <Page title='Projects' isDesktop={isDesktop}>
          <Folders items={folders} isDesktop={isDesktop} />
        </Page>
      </HistoryRoute>
      {folders.map(folder => (
        <HistoryRoute key={folder.id}
                      path={devicePath(`projects/${folder.id}`, isDesktop)} 
                      exact>
          <Page title={folder.name} isDesktop={isDesktop}>
            {projects[folder.id].map(project => (
              <Project key={project.name} {...project} />
            ))}
          </Page>
        </HistoryRoute>
      ))}
    </Container>
    <Head title='Ken Fehling - Projects'
          description="Various projects I've worked on"
          keywords="Projects, Software, Programming, Code"
    />
  </div>
)

MobileProjects.propTypes = {
  isDesktop: PropTypes.bool
}

export default MobileProjects
