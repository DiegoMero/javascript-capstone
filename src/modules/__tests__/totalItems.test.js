test('Check the total number of items on the page', () => {
  const items = [
    {
      item1: 1,
    },

    {
      item2: 2,
    },
  ];
  const lengths = items.length;
  expect(lengths).toEqual(2);
});