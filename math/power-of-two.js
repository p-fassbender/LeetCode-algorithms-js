// problem: given a positive integer 'n', determine if the number is a power of 2 or not

// an integer is a power of 2 if there exists an integer 'x' such that 'n' === 2^x
// example: isPowerOfTwo(1) = true (2^0)
// example: isPowerOfTwo(2) = true (2^1)
// example: isPowerOfTwo(5) = false

//time complexity = O(logn)
function isPowerOfTwo(n) {
    if (n < 1) return false;

    while (n > 1) {
        if (n % 2 != 0) return false
        n = n / 2;
    }

    return true;
}

console.log(isPowerOfTwo(1)) // true (2^0)
console.log(isPowerOfTwo(2)) // true (2^1)
console.log(isPowerOfTwo(5)) // false



//time complexity = O(1)
function isPowerOfTwoBitwise(n) {
    if (n < 1) return false;    
    return (n & (n-1)) === 0;
}

console.log(isPowerOfTwoBitwise(1)) // true (2^0)
console.log(isPowerOfTwoBitwise(2)) // true (2^1)
console.log(isPowerOfTwoBitwise(5)) // false