/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    return function(x) {
        let totalValue = x;

        if (functions.length === 0) {
            return totalValue;
        }

        for (i = functions.length - 1; i >= 0; i--) {
            totalValue = functions[i](totalValue);
        }

        return totalValue;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */