const getTheTitles = function(arr) {
    //one way:
    /*let arrTitles = []
    for (let obj of arr){
        arrTitles.push(obj.title)
    }
    return arrTitles*/
    //easier:
    return arr.map(obj => obj.title)
};

// Do not edit below this line
module.exports = getTheTitles;
