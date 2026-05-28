const sumAll = function(a, b) {
    if (a < 1 || b < 1 || typeof(a) !== "number" || typeof(b) !== "number" ||
    a % 1 !== 0 || b % 1 !== 0){
    return 'ERROR'
    }
    let c, d
    if (a < b) {
        c = a
        d = b
    } else {
        c = b
        d = a
    }
    let sum = 0
    do {
        sum += c
        c++ 
    } while (c <= d)
    return sum
};

// Do not edit below this line
module.exports = sumAll;
