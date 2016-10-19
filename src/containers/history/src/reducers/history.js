import { SET_ROUTER, PAGE_CHANGED } from '../constants/ActionTypes';
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
    switch(action.type) {
        case SET_ROUTER:
            const {routes, transitions, history} = action;
            return {...state, router: {routes, transitions, history}};
        case PAGE_CHANGED:
            return {...state, pageHistories: changePage(state.pageHistories, action.containerId, action.link)};
    }
    return state;
}