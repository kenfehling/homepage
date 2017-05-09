const _sites = [
  {name: 'Twitter', color: '#00AAEC', url: 'http://twitter.com/kenfehling'},
  {name: 'Facebook', color: '#3B5998', url: 'http://facebook.com/kenfehling.dev'},
  {name: 'GitHub', color: '#333', url: 'http://github.com/kenfehling'},
  {name: 'LinkedIn', color: '#0077B5', url: 'http://linkedin.com/in/kenfehling'},
  {name: 'Medium', color: '#00C963', url: 'http://medium.com/@kenfehling'},
  {name: 'Stack Overflow', color: '#FF8000', url: 'http://stackoverflow.com/users/591530/ken-fehling'}
]

const escapeName = name => name.replace(' ', '_')
const getIcon = name => `social/${escapeName(name)}.svg`
export const sites = _sites.map(s => ({...s, icon: getIcon(s.name)}))