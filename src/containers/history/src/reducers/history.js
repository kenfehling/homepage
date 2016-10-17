import { SET_ROUTER, CHANGE_PAGE, PAGE_CHANGED } from '../constants/ActionTypes';
import { changePage } from '../utils/history';

const initialState = {
    pageHistories: {},
    router: {
        routes: [],
        transitions: [],
        history: null
    }
};

export default (state=initialState, action) => {

    console.log('REDUCER', action);

    switch(action.type) {
        case SET_ROUTER:
            const {routes, transitions, history} = action;
            return {...state, router: {routes, transitions, history}};
        case CHANGE_PAGE:
            return {...state};
        case PAGE_CHANGED:

            console.log(changePage(state.pageHistories, action.containerId, action.link));

            return {...state, pageHistories: changePage(state.pageHistories, action.containerId, action.link)};
    }
    return state;
}