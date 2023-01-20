import some from 'lodash/some'

const localPatterns = ['localhost', '127.0.0.1', '192.168', '10.']
export const isLocal = function(req) {
  return some(localPatterns, pattern => req.headers.host.indexOf(pattern) === 0)
}

// const hasHTTPS = function(req) {
//   return req.secure ||
//     (req.headers["x-forwarded-proto"] || '').substring(0, 5) === 'https'
// }

export const isTextBrowser = function(ua) {
  return /(Lynx)|(ELinks)|(Links[ s]\()|(Net-Tamer)|(w3m)/i.test(ua)
}