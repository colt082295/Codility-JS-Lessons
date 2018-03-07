/*
A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps.

Write a function:

function solution(N);

that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.

For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5.
*/

function binaryGap(N) {
    let binary = N.toString(2); // Convert the number to binary
    let longest = 0; // Longest binary gap - set to 0 by default
    let current = 0; // The current binary gap - set to 0 by default
    
    for(let i = 0; i < binary.length; i++) { // Loop through the binary characters
        if(binary[i] == 0) { // If the character is a 0, then add to the current variable
            current++;
        } else { // If the character is a 1
            if(current > longest) { // Check if the current binary gap is bigger than the longest
                longest = current; // If so, set longest = to current
            }
            current = 0; // Reset the current binary gap
        }
    }
    return longest;
}

console.log(binaryGap(Math.floor(Math.random() * 400000))); // Argument is a random #.