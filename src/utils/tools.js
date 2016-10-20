import {tools} from '../constants/tools';
import _ from 'lodash';

const req = require.context("img/icons/tools", true, /^\.\/.*$/);

const getToolByFullName = fullName => {
    if (fullName) {
        return _.find(tools, tool => tool.fullName === fullName);
    }
    else {
        throw new Error('You must pass a fullName parameter');
    }
};

export const getMainName = fullName => {
    return getToolByFullName(fullName).name;
};

export const escapeName = name => name.replace(' ', '_').replace('#', 'sharp');

export const getIcon = ({name, iconType}) =>
    <img className="icon" src={req('./' + escapeName(name) +'.' + (iconType || 'svg'))} />;