'use strict';

var FizzBuzz = require('../');
var assert = require('should');

describe('FizzBuzz', function () {

  it('returns 1 for 1', function () {
    FizzBuzz.getStringFor(1).should.equal('1');
  });

  it('returns 2 for 2', function(){
    FizzBuzz.getStringFor(2).should.equal('2');
  });

  it('return Fizz for 3', function () {
    FizzBuzz.getStringFor(3).should.equal('Fizz');
  });
});
