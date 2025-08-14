// 5. Increase the age of all users in an array of objects.
// Input:
// [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 30 },
//     { name: "Charlie", age: 22 }
// ];
// Output:
// { name: "Alice", age: 26 },
// { name: "Bob", age: 31 },
// { name: "Charlie", age: 23 }

let students = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 22 }
];

students.forEach(student => {
    student.age += 1;
    console.log(student);
});