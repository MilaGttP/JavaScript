
const arr = ["Hello World", "Goodbye", "JavaScript", "World of Warcraft"];

function getByWord(array, callback, word) {
    const filteredArr = array.filter(str => str.includes(word));
    callback(filteredArr);
};

function getOut(array) {
    console.log(array);
}

getByWord(arr, getOut, 'World');