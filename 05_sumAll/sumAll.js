const sumAll = function(...args) {
    // sort numbers in parameter array
    args.sort(function(a, b) {
        return a - b;
      });

    // filter out any negative and non-number params  
    for (let i = 0; i < args.length; i++) {
        if (args[i] < 0) {
            return "ERROR"
        } else if (isNaN(args[i])) {
            return "ERROR"
        } else if (typeof args[i] === 'string') {
            return "ERROR"    
        }
    }

    // Add all numbers exponenetial from the lowest to highest params
    let addNums = (start, end) => {
        let currentNum = 0;
        while (start <= end) {
            currentNum += start;
            start++;
        };
        return currentNum;
    }

   return addNums(args[0], args[1]); 
};

// Do not edit below this line
module.exports = sumAll;
