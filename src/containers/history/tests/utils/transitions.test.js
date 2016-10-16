import {getTransitionType} from '../../src/utils/transitions';
import { LOAD, PUSH, POP, TOP } from '../../src/constants/LinkTypes';
import { DEFAULT_TRANSITION_TYPE } from '../../src/constants/Settings';

const transitions = [
    {from: /^\/tools$/, to: /^\/tools\/\w+\/\w+$/, type: PUSH}
];

describe('transitions', () => {
    it('gets transition by regex', () => {
        const f = getTransitionType;
        expect(f(transitions, '/tools', '/tools/large/crane')).toBe(PUSH);
        expect(f(transitions, '/tools', '/tony')).toBe(DEFAULT_TRANSITION_TYPE);
    });
});