/*

*/

function solution1(A) {
    var map = {};
    var min = 1;
    
    for(var i=0; i<A.length; i++) {
        if(A[i] > 0) { // Checks if the number is positive
            map[A[i]] = true; // Set the key to the array value, and the value = to true
        }
    }
    
    if(!map[min]) return 1; // If only one value in array
    
    while(map[min]) min++; // While the object @ map[min] exists, add 1 to min
    
    return min;
}

function solution2(A) {
    if(A.length === 0) {
        return 1;
    }
    
    let charMap = {};
    for(let i = 0; i < A.length; i++) {
        if(charMap[A[i]]) {
           charMap[A[i]]++; 
        } else {
            charMap[A[i]] = 1;
        }
    }
    
    let i = 1;
    
    while(charMap[i]) {
        i++;
    }
    return i;
}

console.log(solution2([3,5,-1,1,8]));