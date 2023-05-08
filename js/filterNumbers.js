
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filterNumbers(array, callback) {
    const filteredArray = array.filter((num) => num % 2 === 0);
    callback(filteredArray);
};

function callback(array) {
    console.log(array);
};

filterNumbers(arr, callback);