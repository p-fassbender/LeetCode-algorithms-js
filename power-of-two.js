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