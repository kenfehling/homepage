import React, { Component, PropTypes, createElement } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Container, ContainerGroup, HistoryMatch } from 'react-router-nested-history'
import reactStringReplace from 'react-string-replace'
import Helmet from "react-helmet";
import styles from './Tools.scss';
import _ from 'lodash';
import {tools, categories} from '../constants/tools'
import {linkToTool, linkToCategory, backLinkToTool, backLinkToCategory, getTool} from "../utils/tools";

const ROWS = 2;
const starIcon = require('img/icons/star.svg');
const halfStarIcon = require('img/icons/half-star.svg');

let detailsHistory = [];

const escapeName = name => name.replace(' ', '_').replace('#', 'sharp');

const getIcon = ({name, iconType}) =>
    <img className="icon" src={require('img/icons/tools/' +
        escapeName(name) +'.' + (iconType || 'svg'))} />;

const externalLink = (name, href='http://' + name) =>
    <a target="_blank" href={href}>{name} <i className="fa fa-external-link" /></a>;

class Tools extends Component {
  replaceLinks(element) {
    const {category} = this.props;
    const children = reactStringReplace(element.props.children, /\[\[(\w+)]]/g,
        match => linkToTool(match, category));
    return createElement(element.type, {children});
  }

  constructor(props) {
    super(props);
    this.state = {
      lastScrollLeft: 0
    };
  }

  componentDidUpdate() {
    if (this.scrollArea) {
      this.scrollArea.scrollLeft = this.state.lastScrollLeft;
    }
  }

  renderTool(tool) {
    const {name, category, stars} = tool;
    return linkToTool(name, category, (<div className="tool">
      {getIcon(tool)}
      <div className="name">{name}</div>
      <div className="stars">
          {_.map(_.range(Math.floor(stars)), i => <img key={i} src={starIcon} />)}
          {stars % 1 === 0.5 ? <img src={halfStarIcon} /> : ''}
      </div>
    </div>));
  }

  renderTools(category) {
    const filteredTools = category === 'All' ? tools : _.filter(tools, t => _.includes(t.categories, category));
    const n = _.size(filteredTools);
    return (<div className="tools" key="tools">
      <div className="scroll-area" ref={(ref) => this.scrollArea = ref}
           onScroll={e => this.setState({lastScrollLeft: e.target.scrollLeft})}>
        {_.map(_.range(Math.ceil(n / ROWS)), col =>
          <div className="col" key={col}>
              {_.map(_.range(ROWS), row =>
                  n >= col * ROWS + row + 1 ? this.renderTool(filteredTools[col * ROWS + row]) : '')}
          </div>
        )}
      </div>
    </div>);
  }

  renderDetails(currentCategory, tool) {
    const {name, fullName, stars, category, description} = getTool(tool);
    return (<div className="details" key={name}>
      <div className="title">{fullName || name}</div>
      <div className="body">{this.replaceLinks(description)}</div>

      <br />
      <br />

      {detailsHistory.length > 1 ?
          backLinkToTool(detailsHistory[detailsHistory.length - 2], category) :
          backLinkToCategory(category, currentCategory)}
    </div>);
  }

  render() {
    const {params: {category=categories[0], tool}, lastAction} = this.props
    return (<div className={styles.container}>
      <Helmet
          title={`${!tool ? (category || '') : tool || ''}`}
          titleTemplate="Ken Fehling - %s"
          defaultTitle="Ken Fehling"
      />
      <div className="header">
        <div className="title">Skills</div>
        <div className="categories">
          {_.map(categories, c => linkToCategory(c, category))}
        </div>
      </div>
      <div className="transition-wrapper">
        <ReactCSSTransitionGroup
            component="div"
            className={`transition-group${lastAction === 'back' ? ' back' : ''}`}
            transitionName="tool"
            transitionEnter={true}
            transitionLeave={true}
            transitionEnterTimeout={0}
            transitionLeaveTimeout={0}>
          {tool ? this.renderDetails(category, tool) : this.renderTools(category)}
        </ReactCSSTransitionGroup>
      </div>
    </div>)
  }
}

export default () => (
  <ContainerGroup>
    <Container initialUrl='/tools'
               patterns={['/tools', '/tools/:category', '/tools/:category/:tool']}>
      <HistoryMatch pattern='/tools' exactly component={Tools} />
      <HistoryMatch pattern='/tools/:category' exactly component={Tools} />
      <HistoryMatch pattern='/tools/:category/:tool' component={Tools} />
    </Container>
  </ContainerGroup>
)