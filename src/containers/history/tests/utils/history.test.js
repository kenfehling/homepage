import {changePage, getBackLink, getLastLinkType} from '../../src/utils/history';

test('changes page', () => {
    expect(changePage({}, 'id', {name: 'a', to: '/a', type: 'push'})).toEqual(
        {id: [{name: 'a', to: '/a', type: 'push'}]});

});

test('gets no back link', () => {
    expect(getBackLink({id: [{name: 'a', to: '/a', type: 'push'}]}, 'id')).toEqual(undefined);
});

test('gets back link', () => {
    const stacks = {id: [{name: 'a', to: '/a', type: 'push'}, {name: 'b', to: '/b', type: 'push'}]};
    expect(getBackLink(stacks, 'id')).toEqual({name: 'a', to: '/a', type: 'pop'});
});

test('gets last link type', () => {
    expect(getLastLinkType({id: [{name: 'a', to: '/a', type: 'push'}]}, 'id')).toBe('push');
    const stacks = {id: [{name: 'a', to: '/a', type: 'push'}, {name: 'b', to: '/b', type: 'pop'}]};
    expect(getLastLinkType(stacks, 'id')).toBe('pop');
});