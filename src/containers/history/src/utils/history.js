import LinkTypes from '../constants/LinkTypes';
import _ from 'lodash';

export function changePage(historyStacks, containerId, link) {
    const {type} = link;
    const stack = historyStacks[containerId] || [];
    const newHistoryStacks = _.clone(historyStacks);
    switch (type) {
        case LinkTypes.PUSH:
            newHistoryStacks[containerId] = [...stack, link];
            return newHistoryStacks;
        case LinkTypes.POP:
            newHistoryStacks[containerId] = _.initial(stack);
            return newHistoryStacks;
    }
}

export function setLastTransitionType(historyStacks, containerId, link) {
    const {type} = link;
    switch (type) {
        case LinkTypes.PUSH:
            return type;
        case LinkTypes.POP:
            return LinkTypes.POP;
    }
}

export function getBackLink(historyStacks, containerId) {
    if (historyStacks) {
        const stack = historyStacks[containerId];
        if (stack && stack.length > 1) {
            return {...stack[stack.length - 2], type: 'pop'};
        }
    }
}

export function getLastTransitionType(lastTransitionTypes, containerId) {
    if (!_.isEmpty(lastTransitionTypes)) {
        return lastTransitionTypes[containerId];
    }
}