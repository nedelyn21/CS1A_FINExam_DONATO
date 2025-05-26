// sortingAlgoBubble.js

let numbers = [42, 25, 12, 63, 48, 10, 16, 5, 30, 78];

// Bubble Sort Function
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

// Sort the array
let sortedArray = bubbleSort(numbers);
console.log("Sorted Array:", sortedArray);