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