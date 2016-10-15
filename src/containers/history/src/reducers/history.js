import { SET_ROUTES, CHANGE_PAGE, PAGE_CHANGED } from '../constants/ActionTypes';
import _ from 'lodash';
import { changePage, getLastTransitionType } from '../utils/history';

const initialState = {
    routes: null,
    transitions: [],
    historyStacks: {},
    lastTransitionTypes: {}
};

export default (state=initialState, action) => {
    switch(action.type) {
        case SET_ROUTES:
            return {...state, ..._.pick(action, ['routes', 'transitions'])};
        case CHANGE_PAGE:
            const id = action.containerId;
            const lastTransitionTypes = _.clone(state.lastTransitionTypes);
            lastTransitionTypes[id] = action.link.type;
            const historyStacks = changePage(state.historyStacks, action.containerId, action.link);
            return {...state, historyStacks, lastTransitionTypes};
        case PAGE_CHANGED:
            return {...state};
    }
    return state;
}