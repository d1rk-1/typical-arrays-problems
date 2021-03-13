exports.min = function min(array) {
    if (array.length === 0 || array === undefined || array === null) {
        return 0;
    } else {
        return Math.min(...array);
    }
};

exports.max = function max(array) {
    if (array.length === 0 || array === undefined || array === null) {
        return 0;
    } else {
        return Math.max(...array);
    }
};

exports.avg = function avg(array){ if (array.length === 0 || array === undefined || array === null) {
        return 0;
    } else {
            let sum = array.reduce((a, b) => a + b, 0);
            let result = sum / array.length;
            return result;
        }
    };
