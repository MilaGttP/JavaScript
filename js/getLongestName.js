
const names = ["Андрій", "Олександр", "Максим", "Юлія", "Наталія"];

function getLongestName(array, callback) {
    let longestName = names.reduce((acc, curr) => {
        return acc.length > curr.length ? acc : curr;
    });
    callback(longestName);
};

function callback(name) {
    console.log(name);
};

getLongestName(names, callback);