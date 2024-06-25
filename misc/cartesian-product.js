// PROBLEM: given two finite non-empty sets, find their cartesian product
// in mathematics, specifically set theory, the cartesian product of two sets A and B, denoted AxB, is the set of all the odered pairs (a,b) where a is in A and b is in B
// const A = [1, 2]
// const B = [3, 4]
// AxB = [[1, 3], [1, 4], [2, 3], [2, 4]]
// const C = [1, 2]
// const D = [3, 4, 5]
// CxD = [[1, 3], [1, 4], [1, 5], [2, 3], [2, 4], [2, 5]]

// time complexity: O(mn)
function cartesianProduct(arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            result.push([arr1[i], arr2[j]])
        }
    }
    return result;
}

const arr1 = [1, 2]
const arr2 = [3, 4, 5]
console.log(cartesianProduct(arr1, arr2)) // [[1, 3], [1, 4], [1, 5], [2, 3], [2, 4], [2, 5]]