import _ from 'lodash';
import { DEFAULT_TRANSITION_TYPE } from '../constants/Settings';

export function getTransitionType(transitions, from, to) {
    if (_.isEmpty(transitions)) {
        return undefined;
    }
    for (let i = _.size(transitions) - 1; i >= 0; i--) {
        const transition = transitions[i];
        if (!transition.from) {
            if (!transition.from && !from && transition.to.test(to)) {
                return transition.type;
            }
        }
        else {
            if (transition.from.test(from) && transition.to.test(to)) {
                return transition.type;
            }
        }
    }
    return DEFAULT_TRANSITION_TYPE;
}