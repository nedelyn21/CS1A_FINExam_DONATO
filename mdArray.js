// mdArray.js

// Create a multi-dimensional array
let subArray1 = ["Genevieve", "Juan", "Luna", "Gabriel", "Elise"];
let subArray2 = [24, 65, 21, 5, 9];

// Restructure the multi-dimensional array
let structuredArray = [];
for (let i = 0; i < subArray1.length; i++) {
    structuredArray.push([subArray1[i], subArray2[i]]);
}

console.log("Restructured Multi-dimensional Array:", structuredArray);
