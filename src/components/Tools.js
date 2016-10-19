import React, { Component, PropTypes } from 'react';
import Helmet from "react-helmet";
import styles from './Tools.scss';
import _ from 'lodash';
import { connectNavigator, HistoryLink, BackLink, ContentArea } from '../containers/history/src/components/HistoryComponent';
import {connectComponent} from "../containers/history/src/components/HistoryComponent";
import {tools, categories, getIcon, escapeName, linkToTool} from '../constants/tools';

const ROWS = 2;
const starIcon = require('img/icons/star.svg');
const halfStarIcon = require('img/icons/half-star.svg');

class Tools extends Component {
    getSelectedTool() {
        return _.find(this.tools, tool => escapeName(tool.name) === this.props.selectedTool);
    }

    renderStars(stars) {
        return <div className="stars">
            {_.map(_.range(Math.floor(stars)), i => <img key={i} src={starIcon} />)}
            {stars % 1 === 0.5 ? <img src={halfStarIcon} /> : ''}
        </div>;
    }

    renderTool(tool) {
        const {name, stars} = tool;
        return linkToTool(name, (<div className="tool">
            {getIcon(tool)}
            <div className="name">{name}</div>
            {this.renderStars(stars)}
        </div>));
    }

    renderTools() {
        const {category=categories[0]} = this.props;
        const filteredTools = category === 'All' ? tools :
            _.filter(tools, t => _.includes(t.categories, category));
        const n = _.size(filteredTools);
        return (<div className="tools">
            {_.map(_.range(Math.ceil(n / ROWS)), col =>
                <div className="col" key={col}>
                    {_.map(_.range(ROWS), row =>
                        n >= col * ROWS + row + 1 ? this.renderTool(filteredTools[col * ROWS + row]) : '')}
                </div>
            )}
        </div>);
    }

    renderDetails() {
        const {name, fullName, stars, description} = this.getSelectedTool();
        return (<div className="details">
            <div className="heading">
                <BackLink />
                <div className="title">{fullName || name}</div>
                <div className="skill">
                    <div className="label">Skill level:</div>
                    {this.renderStars(stars)}
                </div>
            </div>
            <div className="body">{description()}</div>
        </div>);
    }

    render() {
        const {category, selectedTool} = this.props;
        return (<div className={styles.container}>
            <Helmet
                title={`${!selectedTool ? (category || '') : selectedTool || ''}`}
                titleTemplate="Ken Fehling - %s"
                defaultTitle="Ken Fehling"
            />
            <div className="header">
                <div className="title">Skills</div>
                <div className="categories">
                    {_.map(this.categories, c => this.linkToCategory(c))}
                </div>
            </div>
            <ContentArea scrollAreaClassName="scroll-area">
                {selectedTool ? this.renderDetails() : this.renderTools()}
            </ContentArea>
        </div>);
    }
}

Tools.propTypes = {
    category: PropTypes.string,
    selectedTool: PropTypes.string
};

export default connectComponent(Tools, 'tools');