//problem: given an integer 'n', fiond the factorial of thjat integer

// in math, the factorial of a non-negative integer 'n', denoted n!, is the product of all positive integers less than or equal to 'n'
// facotrial of zero is 1

// example: factorial(4) = 4*3*2*1 = 24
// example: factorial(5) = 5*4*3*2*1 = 120

function factorial(n) {
    if (!n) return 1
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