import React from 'react'
import {HistoryRoute, BackLink, HistoryLink, Container} from 'react-router-nested-history'
import * as styles from './DesktopProjects.scss'
import Head from '../shared/Head'
import { projects, folders } from '../../constants/projects'

const Header = ({title, backText=null}) => (
  <div className='header'>
    <div className='back-container'>
    <BackLink className='back'>
        <span className="chevron-left" />
        <span className="text">{backText}</span>
    </BackLink>
    </div>
    <div className='title'>{title}</div>
  </div>
)

const Project = ({name, description, url, image}) => (
  <a key={name} target='_blank' href={url} className='project'>
    <img alt={name} src={require('img/projects/' + image)} />
    <div className='name'>{name}</div>
    <div className='description'>{description}</div>
  </a>
)

const Folders = ({items}) => (
  <div>
    <Header title='Projects' />
    <div className='files-body'>
      {items.map(item => (
        <HistoryLink key={item.id}
                  to={`/projects/${item.id}`}
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
  </div>
)

const DesktopProjects = () => (
  <div className={styles.container}>
    <Container name='desktop_projects'
              initialUrl='/projects'
              patterns={[`/projects`, `/projects/viz`, '/projects/web']}>
        <HistoryRoute path='/projects' exact>
          <Folders items={folders} />
        </HistoryRoute>
        {folders.map(folder => (
          <HistoryRoute key={folder.id} path={`/projects/${folder.id}`} exact>
            <div>
              <Header title={folder.name} backText='Projects' />
              <div class='files-body'>
                {projects[folder.id].map(project => (
                    <Project key={project.name} {...project} />
                ))}
              </div>
            </div>
          </HistoryRoute>
        ))}
    </Container>
    <Head title='Ken Fehling - Projects'
          description="Various projects I've worked on"
          keywords="Projects, Software, Programming, Code"
    />
  </div>
)

export default DesktopProjects