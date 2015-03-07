/*
 * rubocoptero-ferminLR
 * user/repo
 *
 * Copyright (c) 2015
 * Licensed under the MIT license.
 */

'use strict';

module.exports.getStringFor = function(number) {

    if (isDisibleBy3(number)) {
        return 'Fizz';
    } else if (number === 5) {
        return 'Buzz';
    }

    return number.toString();

    function isDisibleBy3(number){
        return number%3 === 0;
    }
};
