export const folders = [{ 
    id: 'viz',
    name: 'Data Visualization',
}, {
    id: 'web-design',
    name: 'Website design'
}, {
    id: 'web-agency-tools',
    name: 'Web agency tools'
}];

export const projects = {
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
  'web-agency-tools': [{
    name: 'Django Micro CMS/SSG',
    description: 'Simple CMS built on Django Admin, with static generation and optimization features',
    tools: ['Django', 'django-distill'],
    url: 'https://github.com/kenfehling/django-micro-cms-ssg',
    image: 'django-micro-cms-ssg.png'
  }]
};
