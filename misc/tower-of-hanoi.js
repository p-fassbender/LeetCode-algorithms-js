// PROBLEM: the objective of the puzzle is to move the entire stack to the last rod, obeying the following rules
// only one disk may be moved at a time
// each move consists of taking hte opper disk from one of the stacks and placing it on top of another stack or on an empty rod
// no disk may be placed on top of a disk that is smaller

// time complexity: O(2^n)
function towerOfHanoi(n, fromRod, toRod, usingRod) {
    if (n == 1) {
        console.log(`Move disk 1 from ${fromRod} to ${toRod}`)
        return
    }
    towerOfHanoi(n - 1, fromRod, usingRod, toRod)
    console.log(`Move disk ${n} from ${fromRod} to ${toRod}`)
    towerOfHanoi(n - 1, usingRod, toRod, fromRod)
}

towerOfHanoi(3, 'A', 'C', 'B')

console.log("--------------------")

// rewritten to help me visualize
function towerOfHanoi2(n, left, right, center) {
    if (n == 1) {
        console.log(`Move disk 1 from ${left} to ${right}`)
        return
    }
    towerOfHanoi2(n - 1, left, center, right)
    console.log(`Move disk ${n} from ${left} to ${right}`)
    towerOfHanoi2(n - 1, center, right, left)
}

towerOfHanoi2(3, 'A', 'C', 'B')