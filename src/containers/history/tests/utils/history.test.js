import {changePage, getPageHistoryAtIndex, convertHistoryToStackAtIndex, getBackLinkAtIndex} from '../../src/utils/history';

describe('history', () => {
    it('pushes page', () => {
        const expected = {id: [{name: 'a', to: '/a', type: 'push'}]};
        expect(changePage({}, 'id', {name: 'a', to: '/a', type: 'push'})).toEqual(expected);
    });

    it('pops page', () => {
        const expected = {id: [{name: 'a', to: '/a', type: 'pop'}]};
        expect(changePage({}, 'id', {name: 'a', to: '/a', type: 'pop'})).toEqual(expected);
    });

    it('gets page history at index', () => {
        const pageHistories = {id: [
            {name: 'a', to: '/a', type: 'push'},
            {name: 'b', to: '/b', type: 'push'},
            {name: 'b', to: '/b', type: 'pop'}
        ]};
        expect(getPageHistoryAtIndex(pageHistories, 'id', 0)).toEqual([{name: 'a', to: '/a', type: 'push'}]);
        expect(getPageHistoryAtIndex(pageHistories, 'id', 1).length).toEqual(2);
        expect(getPageHistoryAtIndex(pageHistories, 'id', 2).length).toEqual(3);
    });

    it('converts page history to stack at a certain index', () => {
        const pageHistories = {id: [
            {name: 'a', to: '/a', type: 'push'},
            {name: 'b', to: '/b', type: 'push'},
            {name: 'b', to: '/b', type: 'pop'}
        ]};
        const expected1 = [{name: 'a', to: '/a', type: 'push'}];
        const expected2 = [{name: 'a', to: '/a', type: 'push'}, {name: 'b', to: '/b', type: 'push'}];
        expect(convertHistoryToStackAtIndex(pageHistories, 'id', 0)).toEqual(expected1);
        expect(convertHistoryToStackAtIndex(pageHistories, 'id', 1)).toEqual(expected2);
        expect(convertHistoryToStackAtIndex(pageHistories, 'id', 2)).toEqual(expected1);
    });

    it('gets no back link', () => {
        const pageHistories = {id: [{name: 'a', to: '/a', type: 'push'}]};
        expect(getBackLinkAtIndex(pageHistories, 'id', 0)).toBeUndefined();
        expect(getBackLinkAtIndex(pageHistories, 'id', 1)).toBeUndefined();
    });

    it.only('gets back link at index', () => {
        const pageHistories = {id: [
            {name: 'a', to: '/a', type: 'push'},
            {name: 'b', to: '/b', type: 'push'},
            {name: 'b', to: '/b', type: 'pop'},
            {name: 'c', to: '/c', type: 'push'},
            {name: 'd', to: '/d', type: 'push'},
        ]};
        expect(getBackLinkAtIndex(pageHistories, 'id', 1)).toEqual({name: 'a', to: '/a', type: 'pop'});
        expect(getBackLinkAtIndex(pageHistories, 'id', 2)).toBeUndefined();
        expect(getBackLinkAtIndex(pageHistories, 'id', 3)).toEqual({name: 'a', to: '/a', type: 'pop'});
        expect(getBackLinkAtIndex(pageHistories, 'id', 4)).toEqual({name: 'c', to: '/c', type: 'pop'});
    });
});