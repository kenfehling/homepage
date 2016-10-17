export function addLeadingSlash(url) {
    return url.replace(/\/?(\?|#|$)?/, '/$1')
}