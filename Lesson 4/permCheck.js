/*
A non-empty zero-indexed array A consisting of N integers is given.

A permutation is a sequence containing each element from 1 to N once, and only once.

For example, array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
    A[3] = 2
is a permutation, but array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
is not a permutation, because value 2 is missing.

The goal is to check whether array A is a permutation.

Write a function:

function solution(A);

that, given a zero-indexed array A, returns 1 if array A is a permutation and 0 if it is not.

For example, given array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
    A[3] = 2
the function should return 1.

Given array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
the function should return 0.

Assume that:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [1..1,000,000,000].
Complexity:

expected worst-case time complexity is O(N);
expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).
*/

function solution1(A) {
    A = A.sort(function(a,b) { // Sort the array in ascending order
        return a - b;
    });
    
    var count = 0;
    for(i = 0; i < A.length; i++){
        if(A[i] === i+1){ // If item = iteration+1 add 1 to count
            count++;
        } else {
            break; // Break off if it isn't equal
        }
     } 
    if(count === A.length){ // If 1 item return true
     return 1;   
    }
    else { // If not permutation, return 0
     return 0;   
    } 
}

function solution2(A) {
    const length = A.length;
    
    var result = A.reduce((result, value) => {
        result[value] = true;
        return result;
    }, {})

    for(var i=1; i<=length; i++){
        if(!result[i]){
            return 0;	
        }
    }

    return 1;
}

console.log(solution1([1,5,3,2,4]));