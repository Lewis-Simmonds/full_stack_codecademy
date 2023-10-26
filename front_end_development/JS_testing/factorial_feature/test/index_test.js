var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {

    describe('.factorial', () => {

        it('will calculate 5! is equal to 120', () => {
            const expected = 120;
            const actual = Calculate.factorial(5);
            assert.strictEqual(actual, expected);
        });

        it('will calculate 3! is equal to 6', () => {
            const expected = 6;
            const actual = Calculate.factorial(3);
            assert.strictEqual(actual, expected);
        });

        it('will calculate 0! is equal to 1', () => {
            const expected = 1;
            const actual = Calculate.factorial(0);
            assert.strictEqual(actual, expected);
        });

    });

});