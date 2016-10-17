import * as util from '../../src/utils/history';
import { LOAD, PUSH, POP, TOP } from '../../src/constants/LinkTypes';

describe('history', () => {
    it('pushes page', () => {
        const expected = {id: [{name: 'a', to: '/a', type: PUSH}]};
        expect(util.changePage({}, 'id', {name: 'a', to: '/a', type: PUSH})).toEqual(expected);
    });

    it('pops page', () => {
        const expected = {id: [{name: 'a', to: '/a', type: POP}]};
        expect(util.changePage({}, 'id', {name: 'a', to: '/a', type: POP})).toEqual(expected);
    });

    it('gets page history at index', () => {
        const f = util.getPageHistoryAtIndex;
        const pageHistories = {id: [
            {name: 'a', to: '/a', type: PUSH},
            {name: 'b', to: '/b', type: PUSH},
            {name: 'c', to: '/c', type: POP}
        ]};
        expect(f(pageHistories, 'id', 0)).toEqual([{name: 'a', to: '/a', type: PUSH}]);
        expect(f(pageHistories, 'id', 1).length).toEqual(2);
        expect(f(pageHistories, 'id', 2).length).toEqual(3);
    });

    it('converts page history to stack at a certain index', () => {
        const f = util.convertHistoryToStackAtIndex;
        const pageHistories = {id: [
            {name: 'a', to: '/a', type: PUSH},
            {name: 'b', to: '/b', type: PUSH},
            {name: 'c', to: '/c', type: POP}
        ]};
        const expected1 = [{name: 'a', to: '/a', type: PUSH}];
        const expected2 = [{name: 'a', to: '/a', type: PUSH}, {name: 'b', to: '/b', type: PUSH}];
        expect(f(pageHistories, 'id', 0)).toEqual(expected1);
        expect(f(pageHistories, 'id', 1)).toEqual(expected2);
        expect(f(pageHistories, 'id', 2)).toEqual(expected1);
    });

    it('converts page history to stack at a certain index 2', () => {
        const f = util.convertHistoryToStackAtIndex;
        const pageHistories = {id: [
            {name: 'a', to: '/a', type: PUSH},
            {name: 'b', to: '/b', type: PUSH},
            {name: 'c', to: '/c', type: POP},
            {name: 'd', to: '/d', type: PUSH}
        ]};
        const expected1 = [{name: 'a', to: '/a', type: PUSH}];
        const expected2 = [{name: 'a', to: '/a', type: PUSH}, {name: 'b', to: '/b', type: PUSH}];
        expect(f(pageHistories, 'id', 0)).toEqual(expected1);
        expect(f(pageHistories, 'id', 1)).toEqual(expected2);
        expect(f(pageHistories, 'id', 2)).toEqual(expected1);
    });

    it('gets current page', () => {
        const pageHistories = {id: [
            {name: 'a', to: '/a', type: PUSH},
            {name: 'b', to: '/b', type: PUSH}
        ]};
        expect(util.getCurrentPage(pageHistories, 'id')).toEqual({name: 'b', to: '/b', type: PUSH});
    });

    it('gets no back link', () => {
        const f = util.getBackLinkAtIndex;
        const pageHistories = {id: [{name: 'a', to: '/a', type: PUSH}]};
        expect(f(pageHistories, 'id', 0)).toBeUndefined();
        expect(f(pageHistories, 'id', 1)).toBeUndefined();
    });

    it('gets back link at index', () => {
        const f = util.getBackLinkAtIndex;
        const pageHistories = {id: [
            {name: 'a', to: '/a', type: PUSH},
            {name: 'b', to: '/b', type: PUSH},
            {name: 'a', to: '/a', type: POP},
            {name: 'd', to: '/d', type: PUSH},
            {name: 'e', to: '/e', type: PUSH},
            {name: 'f', to: '/f', type: TOP}
        ]};
        expect(f(pageHistories, 'id', 0)).toBeUndefined();
        expect(f(pageHistories, 'id', 1)).toEqual({name: 'a', to: '/a', type: POP});
        expect(f(pageHistories, 'id', 2)).toBeUndefined();
        expect(f(pageHistories, 'id', 3)).toEqual({name: 'a', to: '/a', type: POP});
        expect(f(pageHistories, 'id', 4)).toEqual({name: 'd', to: '/d', type: POP});
        expect(f(pageHistories, 'id', 6)).toBeUndefined();
    });
});