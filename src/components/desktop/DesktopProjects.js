import React from 'react'
import {HistoryRoute, HistoryLink, Container} from 'react-router-nested-history'
import * as styles from './DesktopProjects.scss'
import Head from '../shared/Head'

const folders = [
  { 
    id: 'viz',
    name: 'Data Visualization',
  }, {
    id: 'web-design',
    name: 'Website design'
  }, {
    id: 'web-tooling',
    name: 'Web agency tooling'
  }
];

const projects = {
  'viz': [{
    name: 'Statistipedia Explore',
    description: 'An interactive data visualization tool for the Statistipedia project',
    tools: ['React', 'D3', 'Pandas', 'PostgreSQL', 'PostGIS'],
    url: 'https://statistipedia.org/explore',
    image: 'statistipedia-explore.png'
  }, {
    name: 'NYC Real Estate',
    description: 'My first foray into data visualization, for a class project',
    tools: ['D3', 'scikit-learn', 'Pandas'],
    url: 'https://kenfehling.github.io/nyc-real-estate/',
    image: 'nyc-real-estate.png'
  }],
  'web-design': [{
    name: 'Mars Records',
    description: 'Open source example record store website, with CMS integration',
    tools: ['Django', 'Vue', 'Petite Vue'],
    url: 'https://kenfehling.github.io/mars-records/',
    image: 'mars-records.png'
  }, {
    name: 'Venus Cats',
    description: 'Open source example cat cafe website, with CMS integration',
    tools: ['Django', 'Vue', 'Petite Vue'],
    url: 'https://kenfehling.github.io/venus-cats/',
    image: 'venus-cats.png'
  }], 
  'web-tooling': [{
    name: 'Django Micro CMS/SSG',
    description: 'Simple CMS built on Django Admin, with static generation and optimization features',
    tools: ['Django', 'django-distill'],
    url: 'https://github.com/kenfehling/django-micro-cms-ssg-starter',
    image: 'django-micro-cms-ssg.png'
  }]
};

const toId = name => 'projects_' + name.replace(' ', '_').toLowerCase()

const Project = ({name, description, url, image}) => (
  <a key={name} target='_blank' href={url} className='project'>
    <img alt={name} src={require('img/projects/' + image)} />
    <div className='name'>{name}</div>
    <div className='description'>{description}</div>
  </a>
)

const Folders = ({items}) => (
  <div>
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
)

const DesktopProjects = () => (
  <div className={styles.container}>
    <Container name='desktop_projects'
              initialUrl='/projects'
              animate={false}
              patterns={[`projects`, `/projects/viz`, '/projects/web']}>
        <HistoryRoute path='/projects' exact>
          <Folders items={folders} />
        </HistoryRoute>
        {folders.map(folder => (
          <HistoryRoute key={folder.id} path={`/projects/${folder.id}`} exact>
            <div>
            {projects[folder.id].map(project => (
                <Project key={project.name} {...project} />
            ))}
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