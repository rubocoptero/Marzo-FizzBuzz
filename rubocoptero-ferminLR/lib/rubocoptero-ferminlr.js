/*
 * rubocoptero-ferminLR
 * user/repo
 *
 * Copyright (c) 2015
 * Licensed under the MIT license.
 */

'use strict';

module.exports.getStringFor = function(number) {

    if (isDivisibleBy3(number)) {
        return 'Fizz';
    } else if (isDivisibleBy5(number)) {
        return 'Buzz';
    }

    return number.toString();

    function isDivisibleBy5 (number) {
      return number % 5 === 0;
    }

    function isDivisibleBy3(number){
        return number%3 === 0;
    }
};
