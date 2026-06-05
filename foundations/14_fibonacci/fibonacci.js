const fibonacci = function(num) {
    if (num < 0) return 'OOPS'
    let sum1 = 1
    let sum2 = 0
    let sum3 = 0
    for (let i=0; i<num; i++){    
        sum3 = sum2 + sum1
        sum1 = sum2
        sum2 = sum3
    }
    return sum3
};
//console.log()

// Do not edit below this line
module.exports = fibonacci;
