import React, {createElement} from 'react'
import {tools} from '../constants/tools'
import range from 'lodash/range'
import {HistoryLink} from 'react-router-nested-history'
import reactStringReplace from 'react-string-replace'
import {HOST} from '../constants/settings'

const starIcon = require('img/icons/star.svg')
const halfStarIcon = require('img/icons/half-star.svg')

function getToolByFullName(fullName) {
  if (fullName) {
    const tool = tools.find(tool => tool.fullName === fullName)
    if (!tool) {
      throw new Error(`Tool '${fullName}' not found`)
    }
    return tool
  }
  else {
    throw new Error('You must pass a fullName parameter')
  }
}

export function getTool(escapedName) {
  const name = unescapeName(escapedName)
  const tool = tools.find(tool => tool.name === name)
  if (!tool) {
    throw new Error(`Tool '${name}' not found`)
  }
  return tool
}

export function renderStars(stars) {
  return (<div className="stars">
    {range(Math.floor(stars)).map(i => <img key={i} alt='Star' src={starIcon} />)}
    {stars % 1 === 0.5 ? <img alt='Half star' src={halfStarIcon} /> : null}
  </div>)
}

export const getMainName = fullName => getToolByFullName(fullName).name

export const escapeName = name => name.replace(' ', '_').replace('#', 'sharp')
export const unescapeName = name => name ? name.replace('_', ' ').replace('sharp', '#') : name

export const getIcon = ({name, iconType}) => (
    <img alt={name}
         className="icon"
         src={require('../../img/icons/tools/' +
                escapeName(name) +'.' + (iconType || 'svg'))} />)

export function linkToTool(name, path, text=name) {
  const names = tools.map(t => t.name)
  const mainName = names.includes(name) ? name : getMainName(name)
  const escapedName = escapeName(mainName)
  const to = `${path}/${escapedName}`
  return (
    <HistoryLink key={mainName + Math.random()}
                 to={to}
                 name={mainName}
    >
      {text}
    </HistoryLink>
  )
}

export const filterTools = (category) =>
    category && category !== 'All' ?
        tools.filter(t => t.categories.includes(category)) : tools

export const replaceLinks = (element, path) => {
  const children = reactStringReplace(element.props.children, /\[\[([\w\s]+)]]/g,
                   (match) => linkToTool(match, path))
  return createElement(element.type, {children})
}

const keepStrings = (items) => items.filter(item => typeof(item) === 'string')

export const toTextDescription = (element) => {
  const children = reactStringReplace(element.props.children, /\[\[([\w\s]+)]]/g,
    (match) => match)
  return keepStrings(children).join('')
}

export const getHost = (context) => {
  if (typeof window !== 'undefined') {
    return window.location.protocol + '//' + window.location.host
  } else if (context.serverRequest) {
    return context.serverRequest.headers.host
  } else {
    return 'http://' + HOST  // Whatever... this is only needed on AWS
  }
}

export const getPathname = (context) => {
  if (typeof window !== 'undefined') {

  } else if (context.serverRequest) {
    return context.serverRequest.url
  } else {
    throw new Error('Cannot find pathname');
  }
}

export const getLocation = (context) => {
  return getHost(context) + getPathname(context)
}