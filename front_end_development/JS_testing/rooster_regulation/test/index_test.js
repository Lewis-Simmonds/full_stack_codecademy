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
});