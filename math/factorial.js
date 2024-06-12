// PROBLEM: given an integer 'n', fiond the factorial of that integer
// in math, the factorial of a non-negative integer 'n', denoted n!, is the product of all positive integers less than or equal to 'n'
// factorial of zero is 1
// example: factorial(4) = 4*3*2*1 = 24
// example: factorial(5) = 5*4*3*2*1 = 120

// count down from n
function factorial(n) {
    let result = 1;
    for (let i = n; i > 0; i--) {
        result *= i
    }
    return result
}

console.log(factorial(0)) // 1
console.log(factorial(1)) // 1
console.log(factorial(4)) // 4*3*2*1 = 24
console.log(factorial(5)) // 5*4*3*2*1 = 120

// count up to n
function factorialAgain(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result = result * i;
    }
    return result;
}

console.log(factorialAgain(0)) // 1
console.log(factorialAgain(1)) // 1
console.log(factorialAgain(4)) // 4*3*2*1 = 24
console.log(factorialAgain(5)) // 5*4*3*2*1 = 120



// PROBLEM: Given an integer 'n', find the factorial of that integer
// The factorial of a non-negative integer 'n', denoted n!, is the product of all positive inegers less than or equal to 'n'
// Factorial of zero is 1
// example: recursiveFactorial(4) = 4*3*2*1 = 24
// example: recursiveFactorial(5) = 5*4*3*2*1 = 120

// time complexity: O(n)
function recursiveFactorial(n) {
    if (n === 0) return 1
    return n * recursiveFactorial(n - 1)
}
console.log(recursiveFactorial(0)) // 1
console.log(recursiveFactorial(1)) // 1
console.log(recursiveFactorial(4)) // 4*3*2*1 = 24
console.log(recursiveFactorial(5)) // 5*4*3*2*1 = 120