import React from 'react'
import {tools, categories} from '../constants/tools'
import * as _ from 'lodash'
import { HistoryLink, BackLink } from 'react-router-nested-history'

//const req = require.context("img/icons/tools", true, /^\.\/.*$/)

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

function getToolByName(name) {
  if (name) {
    return _.find(tools, tool => tool.name === name)
  }
  else {
    throw new Error('You must pass a name parameter')
  }
}

export function getTool(unescapedName) {
  return getToolByName(escapeName(unescapedName))
}

export function renderStars(stars) {
  return (<div className="stars">
    {_.map(_.range(Math.floor(stars)), i => <img key={i} src={starIcon} />)}
    {stars % 1 === 0.5 ? <img src={halfStarIcon} /> : ''}
  </div>)
}

export const getMainName = fullName => getToolByFullName(fullName).name

export const escapeName = name => name.replace(' ', '_').replace('#', 'sharp')

export const getIcon = ({name, iconType}) => (
    <img className="icon" src={require('../../img/icons/tools/' +
        escapeName(name) +'.' + (iconType || 'svg'))} />)

function toolLink(fn, name, category=categories[0]) {
  const names = _.map(tools, t => t.name)
  const mainName = _.includes(names, name) ? name : getMainName(name).name
  const escapedName = escapeName(mainName)
  const to = `/tools/${category}/${escapedName}`
  return fn(to, mainName)
}

export function linkToTool(name, category, text=name) {
  const fn = (to, mainName) =>
      <HistoryLink key={to + Math.random()} to={to}>{text}</HistoryLink>
  return toolLink(fn, name, category)
}

export function backLinkToTool(name, category, text=name) {
  const fn = (to, mainName) =>
      <BackLink key={to + Math.random()} to={to}>{text}</BackLink>
  return toolLink(fn, name, category)
}

function categoryLink(fn, name, currentCategory=categories[0]) {
  const to = '/tools' + (name === categories[0] ? '' : '/' + name)
  const className = name === currentCategory ? 'current' : ''
  return fn(to, className)
}

export function linkToCategory(name, currentCategory, text=name) {
  const fn = (to, className) =>
      <HistoryLink key={to + Math.random()} to={to} className={className}>{text}</HistoryLink>
  return categoryLink(fn, name, currentCategory)
}

export function backLinkToCategory(name, currentCategory, text=name) {
  const fn = (to, className) =>
      <BackLink key={to + Math.random()} to={to} className={className}>{text}</BackLink>
  return categoryLink(fn, name, currentCategory)
}

