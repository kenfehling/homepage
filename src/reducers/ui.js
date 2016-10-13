import { BRING_TO_FRONT } from '../constants/ActionTypes';
import { incrementWindowZIndex, isWindowOnTop } from '../utils/ui';

const initialState = {
    windowZIndexes: {}
};

export default function ui(state=initialState, action) {
    switch(action.type) {
        case BRING_TO_FRONT:
            if (isWindowOnTop(state.windowZIndexes, action.window)) {
                return state;
            }
            else {
                return {...state, windowZIndexes: incrementWindowZIndex(state.windowZIndexes, action.window)};
            }
        default: return state;
    }
}