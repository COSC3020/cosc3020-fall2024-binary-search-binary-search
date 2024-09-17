function binarySearch(list, element) {
    let left = 0;
    let right = list.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (list[mid] === element) {
            return mid; 
        } else if (list[mid] < element) {
            left = mid + 1; 
        } else {
            right = mid - 1; 
        }
    }
    return -1;
}
console.log(binarySearch([1, 2, 3], 2));
