const repeatString = function(string, num) {
    tempString = "";
    for (var i = 0; i < num; i++) {
        tempString = tempString + string
    }
    if(num < 0) {
        return 'ERROR';
    }
    return tempString;
};

// Do not edit below this line
module.exports = repeatString;
