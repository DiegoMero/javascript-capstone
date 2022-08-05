import getNumberComments from '../commentCounterTest.js';

jest.mock('../getComments.js');

test('The number of comments of the item 0 is 1', () => {
  getNumberComments().then((comments) => {
    expect(comments).toBe(1);
  });
});