import { SET_ROUTER, CHANGE_PAGE, PAGE_CHANGED } from '../constants/ActionTypes';
import _ from 'lodash';
import { changePage } from '../utils/history';

const initialState = {
    pageHistories: {},
    lastTransitionTypes: {},
    router: {
        routes: [],
        transitions: [],
        history: null
    }
};

export default (state=initialState, action) => {
    console.log(action);
    switch(action.type) {
        case SET_ROUTER:
            const {routes, transitions, history} = action;
            return {...state, router: {routes, transitions, history}};
        case CHANGE_PAGE:
            const lastTransitionTypes = _.clone(state.lastTransitionTypes);
            lastTransitionTypes[action.containerId] = action.link.type;

            console.log('state', state);
            console.log('lastTransitionTypes (reducer)', lastTransitionTypes);

            return {...state, lastTransitionTypes};
        case PAGE_CHANGED:
            return {...state, pageHistories: changePage(state.pageHistories, action.containerId, action.link)};
    }
    return state;
}