/*

*/

function solution1(A, B, K) {
    return (Math.floor(B/K) - Math.floor((A-1)/K));
}

console.log(solution1(6,11,2));