// IF an array doesn't contain an even number of items, make its
// middle number the sum of the two elemnts whose index numbers when counting from the beginning and from the end of the array differ by one
function replaceMiddle(arr) {
    // If the array contains an even amount of items
    // then it doesn't have one center item, but two
    if((arr.length % 2) === 0){
        // Calculate the left middle number
        var newLeftMid = arr[((arr.length/2) - 1)]
        // Calculate the right middle number
        var newRightMid = arr[(arr.length/2)];
        // Calculate what the new middle number will be
        var newMid = newLeftMid + newRightMid;
        // Assign the new middle number to the current right middle number
        arr[(arr.length/2)] = newMid;
        // Remove the left middle number creating the new middle number
        arr.splice((arr.length/2)-1, 1)
    }
    return arr;
}
