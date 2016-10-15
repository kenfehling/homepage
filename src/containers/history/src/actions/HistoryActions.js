import { SET_ROUTES, CHANGE_PAGE, PAGE_CHANGED } from '../constants/ActionTypes';
import { browserHistory, match } from 'react-router';

export function setRoutes(routes, transitions) {
    return {
        type: SET_ROUTES,
        routes,
        transitions
    }
}

export function changePage(link, containerId) {
    browserHistory.replace(link.to);
    return {
        type: CHANGE_PAGE,
        containerId,
        link
    };
}

export function pageChanged(link) {
    return {
        type: PAGE_CHANGED,
        link
    };
}