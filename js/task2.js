
const array = [23,1,45,87,4,55,6];
let biggest = array[0];

for (const item of array) {
    if (item > biggest) {
        biggest = item;
    }
}

console.log(`The biggest number of array ${array} is ${biggest}`);