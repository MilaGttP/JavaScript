
function findMax(...args) {
    const flattened = args.flat();
    return Math.max(...flattened);
}

console.log(findMax(1, 4, 2, 8, 5)); // поверне 8
console.log(findMax([1, 4, 2], 8, 5)); // поверне 8
console.log(findMax(1, 4, [2, 8, 5])); // поверне 8