/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let number = n
    let numberOfExecs = 0
    return function() {
            numberOfExecs += 1
        if (numberOfExecs == 1) {
            return number
        } else {
            number += 1
            return number
        }
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */