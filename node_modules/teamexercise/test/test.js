var assert = require('assert');
var bingo = require('./index');

describe('bingo test', function() {
    it('init mechanism to start', function() {
        bingo.init();
        assert.equal(bingo.getExtracted().length, 0);
        assert.equal(bingo.getBag().length, 90);
    });
    it('init mechanism after first extraction', function() {
        bingo.init();
        bingo.extract();
        assert.equal(bingo.getExtracted().length, 1);
        assert.equal(bingo.getBag().length, 89);
    }); 

    it('init extract 90 times', function() {
        bingo.init();
        for (var i=0; i<90; i++) {
            bingo.extract();
        }
        assert.equal(bingo.getExtracted().length, 90);
        assert.equal(bingo.getBag().length, 0);
    }); 
    it('init extract 1000 times', function() {
        bingo.init();
        for (var i=0; i<1000; i++) {
            bingo.extract();
        }
        assert.equal(bingo.getExtracted().length, 90);
        assert.equal(bingo.getBag().length, 0);
    });
});