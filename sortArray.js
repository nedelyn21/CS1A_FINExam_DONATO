// sortArray.js

// Create a single dimensional array
let numbers = [24, 65, 21, 5, 9, 32, 42, 80, 57];
let names = ["Zenvo", "Erica", "Jordie", "Alicia", "Redon"];

// Merge the arrays
let mergedArray = numbers.concat(names);
console.log("Merged Array:", mergedArray);

// Sort numbers in reverse
numbers.sort((a, b) => b - a);
console.log("Sorted numbers in reverse:", numbers);

// Sort names alphabetically
names.sort();
console.log("Sorted names alphabetically:", names);