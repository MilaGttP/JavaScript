
const arr = ["hello", "world", "javascript", "callback"];

function filterStrings(array, callback, symbol) {
    const filtered = array.filter((item) => item.includes(symbol));
    callback(filtered);
};

function callback(array) {
    console.log(array);
};

filterStrings(arr, callback, 'a');