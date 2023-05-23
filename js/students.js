
const students = [
    { name: 'John', age: 21, rating: 100 },
    { name: 'Mary', age: 19, rating: 86 },
    { name: 'Tom', age: 22, rating: 92 },
    { name: 'Jenny', age: 23, rating: 47 },
    { name: 'Ismail', age: 20, rating: 56 },

];

console.group(`Students: `)
console.table(students);

students.forEach(function (student) {
    student.greet = function () {
        return 'Greetings, ' + this.name + '!';
    };
});

var greetings = students.map(function (student) {
    return student.greet();
});

console.group(`Greetings: `);
console.log(greetings);

var higherRatedStudents = students.filter(function (student) {
    return student.rating > 85;
});

console.group(`Higher rated`);
console.table(higherRatedStudents);

function addRating(points) {
    this.rating += points;
}

students.forEach(function (student) {
    addRating.call(student, 10);
});

console.group(`New ratings: `)
console.table(students);