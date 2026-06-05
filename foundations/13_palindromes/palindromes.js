const palindromes = function (str) {
    let irrelevant =[".",",","."," ",":",";","?","!",")","(","'"]
    let newStr = ""
    for (let i=0; i < str.length; i++){
        if (!irrelevant.includes(str[i])){
            newStr += str[i]
        }
    }
    //bad way:
    /*if (newStr.length % 2 == 0){
        console.log((newStr.slice(0, newStr.length/2)).toLowerCase())
        console.log(((newStr.slice(newStr.length/2)).toLowerCase()))
        if ((newStr.slice(0, newStr.length/2)).toLowerCase()
        == [...(newStr.slice(newStr.length/2)).toLowerCase()].reverse().join("")){
            return true
        }
    }
    console.log((newStr.slice((newStr.length + 1) / 2)).toLowerCase())        
    if ((newStr.slice(0, (newStr.length - 1) / 2)).toLowerCase()
        == [...(newStr.slice((newStr.length + 1) / 2)).toLowerCase()].reverse().join("")){
        
        return true     
    }
    */
    //Much better way. still worse than the proposed solution...
    if (newStr.toLowerCase() == newStr.split('').reverse().join("").toLowerCase()) return true
    return false
};
console.log(palindromes('ZZZZ car, a man, a maracaz.'))
// Do not edit below this line
module.exports = palindromes;
