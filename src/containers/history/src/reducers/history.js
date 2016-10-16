import { SET_ROUTES, CHANGE_PAGE, PAGE_CHANGED } from '../constants/ActionTypes';
import _ from 'lodash';
import { changePage } from '../utils/history';

const initialState = {
    routes: null,
    transitions: [],
    pageHistories: {},
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
            const pageHistories = changePage(state.pageHistories, action.containerId, action.link);
            return {...state, pageHistories, lastTransitionTypes};
        case PAGE_CHANGED:
            return {...state};
    }
    return state;
}