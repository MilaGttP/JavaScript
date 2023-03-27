
const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];

const twoArrays = array1.concat(array2);
let sum = 0;

for (const item of twoArrays) {
    sum += item;
}

console.log(sum);