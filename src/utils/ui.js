import _ from 'lodash';
import '../utils/array';

export const getHighestZIndex = zIndexes => _.isEmpty(zIndexes) ? 1 : _.values(zIndexes).max();

export const getWindowZIndex = (zIndexes, windowName) => zIndexes[windowName] ? zIndexes[windowName] : 1;

export const getTopWindow = zIndexes => {
    const highest = getHighestZIndex(zIndexes);
    return _.findKey(zIndexes, val => val === highest);
};

export const isWindowOnTop = (zIndexes, windowName) => getTopWindow(zIndexes) === windowName;

export function incrementWindowZIndex(zIndexes, windowName) {
    const newZIndexes = {...zIndexes};
    newZIndexes[windowName] = getHighestZIndex(zIndexes) + 1;
    return newZIndexes;
}