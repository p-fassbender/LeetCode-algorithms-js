// PROBLEM: given an array of integers, sort the array
// const arr = [-6, 20, 8, -2, 4]
// quickSort(arr) => should return [-6, -2, 4, 8, 20]

// worst case time complexity (array already sorted): O(n^2)
// average case time complexity: O(nlogn)
function quickSort(arr) {
    if (arr.length < 2) return arr

    let pivot = arr[arr.length - 1]
    let left = []
    let right = []
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}

const arr = [-6, 20, 8, -2, 4]
console.log(quickSort(arr)) // should return [-6, -2, 4, 8, 20]