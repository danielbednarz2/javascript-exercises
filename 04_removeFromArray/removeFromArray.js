const removeFromArray = function(...args) {
    arr = args[0];
    for (let i = 1; i <= args.length - 1; i++) {
        if (arr.indexOf(args[i]) != -1) {
            arr.splice(arr.indexOf(args[i]), 1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
