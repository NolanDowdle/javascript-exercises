const reverseString = function(original) {
    var reversed = "";
    for (var i = original.length; i >= 0; i--) {
        reversed += original.charAt(i);
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
