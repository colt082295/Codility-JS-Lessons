/*
A non-empty zero-indexed array A consisting of N integers is given. Array A represents numbers on a tape.

Any integer P, such that 0 < P < N, splits this tape into two non-empty parts: A[0], A[1], ..., A[P − 1] and A[P], A[P + 1], ..., A[N − 1].

The difference between the two parts is the value of: |(A[0] + A[1] + ... + A[P − 1]) − (A[P] + A[P + 1] + ... + A[N − 1])|

In other words, it is the absolute difference between the sum of the first part and the sum of the second part.

For example, consider array A such that:

  A[0] = 3
  A[1] = 1
  A[2] = 2
  A[3] = 4
  A[4] = 3
We can split this tape in four places:

P = 1, difference = |3 − 10| = 7 
P = 2, difference = |4 − 9| = 5 
P = 3, difference = |6 − 7| = 1 
P = 4, difference = |10 − 3| = 7 
Write a function:

function solution(A);

that, given a non-empty zero-indexed array A of N integers, returns the minimal difference that can be achieved.

For example, given:

  A[0] = 3
  A[1] = 1
  A[2] = 2
  A[3] = 4
  A[4] = 3
the function should return 1, as explained above.

Assume that:

N is an integer within the range [2..100,000];
each element of array A is an integer within the range [−1,000..1,000].
Complexity:

expected worst-case time complexity is O(N);
expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).
*/

function solution1(A) {
    var a = A[0];
    var b = 0;

    for (var i=1; i<A.length; i++){
        b += A[i];
    }

    var min = Infinity;

    for (var j=1; j<A.length; j++){
        var result = Math.abs(a-b);
        if (result < min) {
            min = result;
        }
        a += A[j];
        b -= A[j];
    }

    return min;
}

function solution2(A) {
    var minDiff,
    sumTotal = 0,
    sumLeft = 0;

  if (A.length == 2) {
    return Math.abs(A[0] - A[1]);
  }

  if (A.length == 1) {
    return Math.abs(A[0]);
  }

  for (i = 0; i < A.length; i++) {
    sumTotal += A[i];
  }

  for (p = 0; p < A.length - 1; p++) {
    sumLeft += A[p];
    var sumRight = sumTotal - sumLeft;
    var diff = Math.abs(sumLeft - sumRight);
    minDiff = (diff > minDiff) ? minDiff : diff;
  }

  return minDiff;
}

function solution3(A) {
    var sum1 = 0;
    var sum2 = A.reduce(function(acc, i) {
        return acc + i;
    });

    var minDiff = Number.POSITIVE_INFINITY;
    
    for (var p = 0; p < A.length - 1; p++)
    {
        sum1 += A[p];
        sum2 -= A[p];
        var diff = sum2 - sum1;
        minDiff = Math.min(minDiff, Math.abs(diff));
    }
    
    return minDiff;
}

console.log(solution3([3, 1, 2, 4, 3]))