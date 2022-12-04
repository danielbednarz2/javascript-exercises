const repeatString = function(val, mult) {
    if (mult < 0) {
        return 'ERROR';
    }
    let stringStorage = [];
    let i = 0;
    while (i < mult) {
        stringStorage.push(val)
        i++;
    }
    let totalString = stringStorage.join("");
    return totalString;
};

// Do not edit below this line
module.exports = repeatString;
