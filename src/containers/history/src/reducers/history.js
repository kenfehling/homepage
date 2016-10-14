import { SET_ROUTES, CHANGE_PAGE, PAGE_CHANGED } from '../constants/ActionTypes';
import LinkTypes from '../constants/LinkTypes';
import _ from 'lodash';

const initialState = {
    routes: null,
    transitions: [],
    historyStacks: {

    },
    lastLinkType: LinkTypes.LOAD
};

export default (state=initialState, action) => {
    console.log(action);
    switch(action.type) {
        case SET_ROUTES: return {...state, ..._.pick(action, ['routes', 'transitions'])};
        case CHANGE_PAGE: return {...state, lastLinkType: action.linkType};
        case PAGE_CHANGED: return {...state};
    }
    return state;
}