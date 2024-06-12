// PROBLEM: given an array of 'n' elements and a target element 't', find the index of 't' in the array. Return -1 if the target element is not found
// example: arr=[-5, 2, 10, 4, 6], t=10 -> should return 2
// example: arr=[-5, 2, 10, 4, 6], t=6 -> should return 4
// example: arr=[-5, 2, 10, 4, 6], t=20 -> should return -1

// time complexity: O(n)
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1
}

console.log(linearSearch([-5, 2, 10, 4, 6], 10)) // should return 2
console.log(linearSearch([-5, 2, 10, 4, 6], 6)) // should return 4
console.log(linearSearch([-5, 2, 10, 4, 6], 20)) // should return -1