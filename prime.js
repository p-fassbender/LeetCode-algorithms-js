// problem: given a natural number 'n', determine if the number is prime or not

// a prime number is a natural number greater then 1 tha is not a product of two smaller natural numbers
// example: isPrime(5) = true (1*5 or 5*1)
// example: isPrime(4) = false (1*4 or 2*2 or 4*1)

// time complexity: O(n)
function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return true
}
console.log(isPrime(1)) // false (1*5 or 5*1)
console.log(isPrime(5)) // true (1*5 or 5*1)
console.log(isPrime(4)) // false (1*4 or 2*2 or 4*1)



// time complexity: O(sqrt(n))
function isPrimeAgain(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true
}
console.log(isPrimeAgain(1)) // false (1*5 or 5*1)
console.log(isPrimeAgain(5)) // true (1*5 or 5*1)
console.log(isPrimeAgain(4)) // false (1*4 or 2*2 or 4*1)