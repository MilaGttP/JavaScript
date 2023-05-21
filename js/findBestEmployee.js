
const findBestEmployee = function (employees) {
    const entries = Object.entries(employees);
    const maxTasks = Math.max(...entries.map(([_, tasks]) => tasks));
    const [bestEmployee] = entries.find(([_, tasks]) => tasks === maxTasks);
    return bestEmployee;
};

console.log(
    findBestEmployee({
        ann: 29,
        david: 35,
        helen: 1,
        lorence: 99,
    })
); // lorence

console.log(
    findBestEmployee({
        poly: 12,
        mango: 17,
        ajax: 4,
    })
); // mango

console.log(
    findBestEmployee({
        lux: 147,
        david: 21,
        kiwi: 19,
        chelsy: 38,
    })
); // lux