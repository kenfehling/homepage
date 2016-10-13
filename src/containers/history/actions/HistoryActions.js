import { SET_ROUTES, CHANGE_PAGE, PAGE_CHANGED } from '../constants/ActionTypes';
import LinkTypes from '../constants/LinkTypes';
import { browserHistory, match } from 'react-router';

export function setRoutes(routes) {
    return {
        type: SET_ROUTES,
        routes
    }
}

export function changePage({href, name, type}) {
    browserHistory.replace(href);
    return {
        type: CHANGE_PAGE,
        name,
        href,
        linkType: type
    };
}

export function pageChanged({href, name}) {
    return {
        type: PAGE_CHANGED,
        name,
        href
    };
}