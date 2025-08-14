// 3. Filter out duplicate values from an array.
// Input:
// [1, 2, 2, 3, 4, 4, 5]
// Output:
// [1, 2, 3, 4, 5]
const numbers=[1,2,2,3,4,4,5];
const unique=[...new Set(numbers)];
console.log(unique);
