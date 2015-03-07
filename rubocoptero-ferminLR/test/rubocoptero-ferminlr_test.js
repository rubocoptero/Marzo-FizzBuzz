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

  it('returns Fizz for 3', function () {
    FizzBuzz.getStringFor(3).should.equal('Fizz');
  });

  it('returns Buzz for 5', function () {
    FizzBuzz.getStringFor(5).should.equal('Buzz');
  });

  it('returns Fizz for 6', function () {
    FizzBuzz.getStringFor(6).should.equal('Fizz');
  });

  it('returns Buzz for 10', function () {
    FizzBuzz.getStringFor(10).should.equal('Buzz');
  });

  it('returns FizzBuzz for 15', function () {
    FizzBuzz.getStringFor(15).should.equal('FizzBuzz');
  });



});
