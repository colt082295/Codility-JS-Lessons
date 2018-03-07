function oddOccurrences(A) {
    return A.slice(1).reduce(function (odd, current) {
        return odd ^ current;
    }, A[0]);
}

console.log(oddOccurrences([9, 3, 9, 3, 9, 7, 9] ));