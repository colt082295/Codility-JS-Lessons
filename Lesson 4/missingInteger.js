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

console.log(solution1([3]));