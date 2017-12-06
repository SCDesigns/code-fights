/*
Ratiorg got statues of different sizes as a present from CodeMaster for his birthday,
each statue having an non-negative integer size. Since he likes to make things perfect,
he wants to arrange them from smallest to largest so that each statue will be bigger than
the previous one exactly by 1. He may need some additional statues to be able to accomplish that.
Help him figure out the minimum number of additional statues needed.


Example

For statues = [6, 2, 3, 8], the output should be
makeArrayConsecutive2(statues) = 3.

Ratiorg needs statues of sizes 4, 5 and 7.

Input/Output

[time limit] 4000ms (js)
[input] array.integer statues

An array of distinct non-negative integers.

Guaranteed constraints:
1 ≤ statues.length ≤ 10,
0 ≤ statues[i] ≤ 20.

[output] integer

The minimal number of statues that need to be added to existing statues such that
it contains every integer size from an interval [L, R] (for some L, R) and no other sizes.
*/

// My Solution:

function makeArrayConsecutive2(statues) {
    let statuesNeeded = 0
    var sort = statues.sort((a,b)=>{return a-b})
    for (i = 0; i < sort.length - 1; i++){
        statuesNeeded += Math.abs((sort[i+1] - sort[i])-1)
    }
    return statuesNeeded
}

/*
CodeGolf - Best Solution
Takes max - min, adds 1 to account for already owned statue
in difference, subtracts length (convenient given the params)
*/
function makeArrayConsecutive2(sequence) {
  return Math.max(...sequence)-Math.min(...sequence)+1-sequence.length
}
