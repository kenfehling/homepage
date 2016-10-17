import { SET_ROUTER, CHANGE_PAGE, PAGE_CHANGED } from '../constants/ActionTypes';

export function setRouter({routes, transitions, history}) {
    return {
        type: SET_ROUTER,
        routes,
        transitions,
        history
    }
}

export function changePage(link, containerId) {
    return (dispatch, getState) => {
        dispatch({
            type: CHANGE_PAGE,
            containerId,
            link
        });
        const state = getState();
        const {history} = state.history.router;
        history.replace(link.to);
    };
}

export function pageChanged(link, containerId) {
    return {
        type: PAGE_CHANGED,
        containerId,
        link
    };
}