const findTheOldest = function(arr) {
    let Oldest = arr.reduce((currentOldest, current) => {
        let currentAge = 0
        if (!current.yearOfDeath) currentAge = (new Date()).getFullYear() - current.yearOfBirth
        else currentAge = current.yearOfDeath - current.yearOfBirth
        let currentOldestAge = 0
        if (!currentOldest.yearOfDeath) currentOldestAge = (new Date()).getFullYear() - currentOldest.yearOfBirth
        else currentOldestAge = currentOldest.yearOfDeath - currentOldest.yearOfBirth
        if (currentAge > currentOldestAge) return current
        else return currentOldest
    })
    return Oldest
};
// Do not edit below this line
module.exports = findTheOldest;
