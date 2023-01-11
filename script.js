// complete the given function

function palindrome(str){
	// Convert the string to lowercase for case-insensitive comparison
    str = str.toLowerCase();

    // Use the split, reverse, and join methods to check if the string is the same when reversed
    return str === str.split('').reverse().join('');
}
module.exports = palindrome
