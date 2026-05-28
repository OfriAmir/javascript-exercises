const removeFromArray = function(arr) {
    let args = []
    for (let i = 1 ; i < arguments.length; i++) {
        args[i-1] = arguments[i]
    }
     let filteredArr = arr.filter(function(item, index, array){
        if (args.includes(item)) return false
        else return true
    })
    return filteredArr
}



//version 2
function removeFromArray2(arr, ...restArgs) {
    for (let item of restArgs){
        while (arr.includes(item)){
            let currentItemIndex = arr.findIndex(arrItem => arrItem == item)
            arr.splice(currentItemIndex, 1)
        }
    }
    return arr
}
// Do not edit below this line
module.exports = removeFromArray;
