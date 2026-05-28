//version 1
const reverseString = function(string) {
    let reversedString = ''
    for (let i = string.length - 1; i > -1; i--) {
        reversedString += string[i]
    }
    return reversedString
};

//version 2
function reverseString2(str){
    let arrOfCharacters = str.split("")
    return arrOfCharacters.reverse().join("") 
}
// Do not edit below this line
module.exports = reverseString;
