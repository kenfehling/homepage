import some from 'lodash/some'

const localPatterns = ['localhost', '127.0.0.1', '192.168', '10.']
export const isLocal = function(req) {
  return some(localPatterns, pattern => req.headers.host.indexOf(pattern) === 0)
}

// const hasHTTPS = function(req) {
//   return req.secure ||
//     (req.headers["x-forwarded-proto"] || '').substring(0, 5) === 'https'
// }

const hasWWW = function(req) {
  return req.headers.host.slice(0, 3) === 'www'
}

export const shouldRedirect = function(req) {
  // return !isLocal(req) && (!hasHTTPS(req) || !hasWWW(req))
  return !isLocal(req) && !hasWWW(req)
}

export const getRedirectUrl = function(req) {
  const host = hasWWW(req) ? req.headers.host.slice(4) : req.headers.host
  // return 'https://www.' + host + req.url
  return 'http://www.' + host + req.url
}

export const isTextBrowser = function(ua) {
  return /(Lynx)|(ELinks)|(Links[ s]\()|(Net-Tamer)|(w3m)/i.test(ua)
}