import * as ui from '../../src/utils/ui';

test('gets highest z-index (empty)', () => {
    expect(ui.getHighestZIndex({})).toBe(1);
});

test('gets highest z-index (1)', () => {
    expect(ui.getHighestZIndex({a: 1, b: 1})).toBe(1);
});

test('gets highest z-index (2)', () => {
    expect(ui.getHighestZIndex({a: 1, b: 2})).toBe(2);
});

test('increments z-index', () => {
    expect(ui.incrementWindowZIndex({a: 2, b: 2}, 'a')).toEqual({a: 3, b: 2});
});

test('gets top window 1', () => {
    let zIndexes = ui.incrementWindowZIndex({}, 'a');
    expect(zIndexes).toEqual({a: 2});
    expect(ui.getTopWindow(zIndexes)).toBe('a');
    zIndexes = ui.incrementWindowZIndex(zIndexes, 'b');
    expect(zIndexes).toEqual({a:2, b: 3});
    expect(ui.getTopWindow(zIndexes)).toBe('b');
});

test('gets top window 2', () => {
   expect(ui.getTopWindow({Map: 11, PDF: 5})).toBe('Map');
});

test('is window on top', () => {
    let zIndexes = ui.incrementWindowZIndex({}, 'a');
    expect(zIndexes).toEqual({a: 2});
    expect(ui.isWindowOnTop(zIndexes, 'a')).toBe(true);
    zIndexes = ui.incrementWindowZIndex(zIndexes, 'b');
    expect(zIndexes).toEqual({a:2, b: 3});
    expect(ui.isWindowOnTop(zIndexes, 'b')).toBe(true);
});