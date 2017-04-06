import React, {createElement} from 'react'
import {tools, categories} from '../constants/tools'
import * as _ from 'lodash'
import {HistoryLink} from 'react-router-nested-history'
import reactStringReplace from 'react-string-replace'

const starIcon = require('../../img/icons/star.svg')
const halfStarIcon = require('../../img/icons/half-star.svg')

function getToolByFullName(fullName) {
  if (fullName) {
    return _.find(tools, tool => tool.fullName === fullName)
  }
  else {
    throw new Error('You must pass a fullName parameter')
  }
}

export function getTool(escapedName) {
  const name = unescapeName(escapedName)
  return _.find(tools, tool => tool.name === name)
}

export function renderStars(stars) {
  return (<div className="stars">
    {_.map(_.range(Math.floor(stars)), i => <img key={i} src={starIcon} />)}
    {stars % 1 === 0.5 ? <img src={halfStarIcon} /> : ''}
  </div>)
}

export const getMainName = fullName => getToolByFullName(fullName).name

export const escapeName = name => name.replace(' ', '_').replace('#', 'sharp')
export const unescapeName = name => name.replace('_', ' ').replace('sharp', '#')

export const getIcon = ({name, iconType}) => (
    <img className="icon" src={require('../../img/icons/tools/' +
        escapeName(name) +'.' + (iconType || 'svg'))} />)

export function linkToTool(name, path, text=name) {
  const names = _.map(tools, t => t.name)
  const mainName = _.includes(names, name) ? name : getMainName(name).name
  const escapedName = escapeName(mainName)
  const to = `${path}/${escapedName}`
  return (
    <HistoryLink key={mainName + Math.random()} to={to} name={mainName}>
      {text}
    </HistoryLink>
  )
}

export const filterTools = (category) =>
    category && category !== 'All' ?
        _.filter(tools, t => _.includes(t.categories, category)) : tools

export const replaceLinks = (element, path) => {
  const children = reactStringReplace(element.props.children, /\[\[(\w+)]]/g,
                   (match) => linkToTool(match, path))
  return createElement(element.type, {children})
}