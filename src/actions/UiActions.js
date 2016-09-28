import { BRING_TO_FRONT } from '../constants/actionTypes';

export const bringToFront = windowName => ({
    type: BRING_TO_FRONT,
    window: windowName
});