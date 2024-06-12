/*
Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

    For example, 121 is a palindrome while 123 is not.

*/
let num1 = 121;
let num2 = -121;
let num3 = 10;

var isPalindrome = function (x) {
    if (x < 0) return false;
    let numString = x.toString();
    let len = Math.floor(numString.length / 2);
    for (let i = 0; i < len; i++) {
        if (numString[i] !== numString[numString.length - i - 1]) {
            return false;
        }
    }
    return true;
};

isPalindrome(num1);
isPalindrome(num2);
isPalindrome(num3);