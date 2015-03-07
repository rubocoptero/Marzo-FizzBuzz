'use strict';

var FizzBuzz = require('../');
var assert = require('should');

describe('FizzBuzz', function () {

  it('returns 1 for 1', function () {
    FizzBuzz.getStringFor(1).should.equal('1');
  });

});
