import { LOAD, PUSH, POP, TOP } from '../../src/constants/LinkTypes';
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
            case PUSH: return [...stack, page];
            case POP: return _.initial(stack);
            case TOP: return [page]
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

export function getCurrentIndex(pageHistories, containerId) {
    const pageHistory = pageHistories[containerId];
    if (pageHistory) {
        return _.size(pageHistory) - 1;
    }
}

export function getCurrentBackLink(pageHistories, containerId) {
    return getBackLinkAtIndex(pageHistories, containerId, getCurrentIndex(pageHistories, containerId));
}