import { SET_ROUTER, PAGE_CHANGED } from '../constants/ActionTypes';

export function setRouter({routes, transitions, history}) {
    return {
        type: SET_ROUTER,
        routes,
        transitions,
        history
    }
}

export function pageChanged(link, containerId) {
    return {
        type: PAGE_CHANGED,
        containerId,
        link
    };
}