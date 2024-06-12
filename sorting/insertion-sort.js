// PROBLEM: given an array of integers, sort the array
// const arr = [-6, 20, 8, -2, 4]
// insertionSort(arr) => should return [-6, -2, 4, 8, 20]

// time complexity: O(n^2)
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let numberToInsert = arr[i]
        let j = i - 1
        while (j >= 0 && arr[j] > numberToInsert) {
            arr[j + 1] = arr[j]
            j = j - 1
        }
        arr[j + 1] = numberToInsert
    }
}

const arr = [-6, 20, 8, -2, 4]
insertionSort(arr)
console.log(arr) // should return [-6, -2, 4, 8, 20]