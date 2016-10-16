import {getTransitionType} from '../../src/utils/transitions';

const transitions = [
    {from: /^\/tools$/, to: /^\/tools\/\w+\/\w+$/, type:'push'}
];

describe('transitions', () => {
    it('gets transition by regex', () => {
        expect(getTransitionType(transitions, '/tools', '/tools/large/crane')).toBe('push');
        expect(getTransitionType(transitions, '/tools', '/tony')).toBe(undefined);
    });
});