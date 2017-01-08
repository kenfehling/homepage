import { BRING_TO_FRONT } from '../constants/ActionTypes';

export const bringToFront = windowName => ({
    type: BRING_TO_FRONT,
    window: windowName
});