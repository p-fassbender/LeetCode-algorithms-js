// PROBLEM: given a number 'n', find the first 'n' elements of the fibonacci sequence
// in math, the fibonacci sequence is a sequence in which each number is the sum of the two preceding ones
// the first two numbers in the sequence are 0 and 1
// example: fibonacci(2) = [0,1]
// example: fibonacci(3) = [0,1,1]
// example: fibonacci(7) = [0,1,1,2,3,5,8]

// Time Complexity: O(n)
function fibonacci(n) {
    let fib = [0, 1];

    if (n <= 1) return fib;

    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]
    }
    return fib
}
console.log(fibonacci(1)) // [0,1]
console.log(fibonacci(2)) // [0,1]
console.log(fibonacci(3)) // [0,1,1]
console.log(fibonacci(7)) // [0,1,1,2,3,5,8]


// PROBLEM: Given a number 'n', find the nth element of the fibonacci sequence
// In mathematics, the fibonacci sequence is a sequence in which each number is the sum of the two preceeding ones
// The first two numbers in the sequence are 0 and 1 (0, 1, 1, 2, 3, 5, 8, ...)
// example: recursiveFibonacci(0) = 0
// example: recursiveFibonacci(1) = 1
// example: recursiveFibonacci(6) = 8

// Time Complexity: O(2^n)
function recursiveFibonacci(n) {
    if (n < 2) return n
    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2)
}
console.log(recursiveFibonacci(0)) // 0
console.log(recursiveFibonacci(1)) // 1
console.log(recursiveFibonacci(6)) // 8