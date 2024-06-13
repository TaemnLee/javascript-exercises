const reverseString = function(reversed) {
    let revString = '';
    for (let i = reversed.length-1; i >= 0; i--){
        revString += reversed[i];
    }
    return revString;
};

// Do not edit below this line
module.exports = reverseString;
