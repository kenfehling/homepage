import LinkTypes from '../constants/LinkTypes';
import _ from 'lodash';

export function changePage(pageHistories, containerId, link) {
    const stack = pageHistories[containerId] || [];
    const newHistoryStacks = _.clone(pageHistories);
    newHistoryStacks[containerId] = [...stack, link];
    return newHistoryStacks;
}

export function getPageHistoryAtIndex(pageHistories, containerId, index) {
    return _.take(pageHistories[containerId] || [], index + 1);
}

export function convertHistoryToStackAtIndex(pageHistories, containerId, index) {
    const pageHistory = getPageHistoryAtIndex(pageHistories, containerId, index);
    return _.reduce(pageHistory, (stack, page) => {
        switch(page.type) {
            case LinkTypes.PUSH: return [...stack, page];
            case LinkTypes.POP: return _.initial(stack);
        }
    }, []);
}

export function getBackLinkAtIndex(pageHistories, containerId, index) {
    const stack = convertHistoryToStackAtIndex(pageHistories, containerId, index);
    if (stack.length > 1) {
        return {...stack[stack.length - 2], type: 'pop'};
    }
}

export function getLastTransitionType(lastTransitionTypes, containerId) {
    if (!_.isEmpty(lastTransitionTypes)) {
        return lastTransitionTypes[containerId];
    }
}