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

export function getLastPageChange(pageHistories, containerId) {
    return _.last(getPageHistoryAtIndex(pageHistories, containerId, getCurrentIndex(pageHistories, containerId)));
}

export function convertHistoryToStackAtIndex(pageHistories, containerId, index) {
    const pageHistory = getPageHistoryAtIndex(pageHistories, containerId, index);
    return _.reduce(pageHistory, (stack, page) => {
        switch(page.type) {
            case LOAD: return [page];
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

export function getCurrentIndex(pageHistories, containerId) {
    const pageHistory = pageHistories[containerId];
    if (pageHistory) {
        return _.size(pageHistory) - 1;
    }
}

export function getCurrentBackLink(pageHistories, containerId) {
    return getBackLinkAtIndex(pageHistories, containerId, getCurrentIndex(pageHistories, containerId));
}

export function getPageAtIndex(pageHistories, containerId, index) {
    console.log(pageHistories, containerId, index);
    const stack = convertHistoryToStackAtIndex(pageHistories, containerId, index);
    console.log('stack', stack);
    return _.last(stack);
}

export function getCurrentPage(pageHistories, containerId) {
    return getPageAtIndex(pageHistories, containerId, getCurrentIndex(pageHistories, containerId));
}

export function getLastTransitionType(pageHistories, containerId) {
    const last = getLastPageChange(pageHistories, containerId);
    return last ? last.type : undefined;
}