const assert = require('assert');
const Rooster = require('../index');

describe('Rooster', () => {

    describe('.announceDawn', () => {

        it('returns a rooster call', () => {
            const expected = 'cock-a-doodle-doo!';
            const actual = Rooster.announceDawn();
            assert.equal(actual, expected);
        });

    });

    describe('.timeAtDawn', () => {

        it('returns its argument as a string', () => {
            const expected = '8';
            const actual = Rooster.timeAtDawn(8);
            assert.strictEqual(actual, expected);
        });

        it('throws an error if passed a number less than 0', () => {
            const hour = -5;
            assert.throws(() => {
                Rooster.timeAtDawn(hour);
            }, RangeError);
        });

        it('throws an error if passed a number greater than 23', () => {
            const hour = 30;
            assert.throws(() => {
                Rooster.timeAtDawn(hour);
            }, RangeError);
        });

    });

});