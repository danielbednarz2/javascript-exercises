const reverseString = function(word) {
    let wordSplit = [];
    for (let i = word.length - 1; i >=0; i--){
        wordSplit.push(word[i]);
    }
    return wordSplit.join("");
};

// Do not edit below this line
module.exports = reverseString;
