var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {

  describe('.factorial', () => {

    it('will calculate 5! is equal to 120', () => {
        const expected = 120;
        const actual = Calculate.factorial(5);
        assert.strictEqual(actual, expected);
    });

  });

});