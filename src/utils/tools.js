import React from 'react'
import {tools, categories} from '../constants/tools'
import * as _ from 'lodash'
import { HistoryLink } from 'react-router-nested-history'

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

export function getToolByName(name) {
  if (name) {
    const unescapedName = unescapeName(name)
    return _.find(tools, tool => tool.name === unescapedName)
  }
  else {
    throw new Error('You must pass a name parameter')
  }
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

export function linkToTool(name, category=categories[0], text=name) {
  const names = _.map(tools, t => t.name)
  const mainName = _.includes(names, name) ? name : getMainName(name).name
  const escapedName = escapeName(mainName)
  const to = `/tools/${category}/${escapedName}`
  return <HistoryLink key={mainName + Math.random()} to={to} name={mainName}>
    {text}
  </HistoryLink>
}