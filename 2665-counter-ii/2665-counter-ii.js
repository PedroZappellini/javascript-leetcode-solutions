/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let value = init;

    return {
        increment: function increment() {
            value++;
            return value;
        },
        decrement: function decrenment() {
            value--;
            return value;
        },
        reset: function reset() {
            value = init
            return value;
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */