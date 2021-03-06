/*
A zero-indexed array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.

Your goal is to find that missing element.

Write a function:

function solution(A);

that, given a zero-indexed array A, returns the value of the missing element.

For example, given array A such that:

  A[0] = 2
  A[1] = 3
  A[2] = 1
  A[3] = 5
the function should return 4, as it is the missing element.

Assume that:

N is an integer within the range [0..100,000];
the elements of A are all distinct;
each element of array A is an integer within the range [1..(N + 1)].
Complexity:

expected worst-case time complexity is O(N);
expected worst-case space complexity is O(1), beyond input storage (not counting the storage required for input arguments).
*/

function solution1(A) {
    if (A.length === 0){
        return 1;
    }
    
    var actualSum = A.reduce(function (actualSum, i) {
        return actualSum + i;
    })
    console.log("Actual Sum:", actualSum);
    
    var requiredSum = (A.length + 1) * (A.length + 2) / 2;
    
    return requiredSum - actualSum;
}

function solution2(A) {
    A.sort(function(a, b) {
        return a - b;
    });
    
    var next = 1;
    var i=0;
    while(next === A[i]) {
        next++;
        i++;
    }
    
    return next;
}

console.log(solution1([1,3,2,5]));