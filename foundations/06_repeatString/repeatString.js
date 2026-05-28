//version 1
const repeatString = function(string, num) {
    if (num<0) return 'ERROR'
    let repeatedString = ''
    while (num) {
        repeatedString += string
        num--
    }
    return repeatedString
};

//version 2
function repeatString2(str, num){
    if (num < 0) return 'ERROR'
    let newStr = ''
    for (let i = 0; i < num; i++){
        newStr += str
    }
    return newStr
}

// Do not edit below this line
module.exports = repeatString;
