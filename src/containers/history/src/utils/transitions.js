import _ from 'lodash';

export function getTransitionType(transitions, from, to) {
    if (_.isEmpty(transitions)) {
        return undefined;
    }
    for (let i = 0; i < _.size(transitions); i++) {
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
}