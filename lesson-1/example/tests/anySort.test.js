const anySort = require('../src/anySort.js');

describe('anySort', () => {
  test('sort massiv +', () => {
    expect(anySort([3, 5, 7, 2, 11, 6, 10])).toEqual([2, 3, 5, 6, 7, 10, 11]);
  });

  test('sort massiv with -', () => {
    expect(anySort([-3, -1, -2])).toEqual([-3, -2, -1]);
  });

  test('sort massiv with dublicate numbers', () => {
    expect(anySort([5, 5, 5, 2, 2, 1])).toEqual([1, 2, 2, 5, 5, 5]);
  });
});