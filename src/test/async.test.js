const fetchProduct = require('../async.js');

describe('Async', () => {
  it('async', () => {
    fetchProduct().then((item) => {
      expect(item).toEqual({ item: 'Pop', price: 200 });
    });
  });
});
