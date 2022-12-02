
function generateRandom() {
    return Math.floor(Math.random());
}

console.log(generateRandom());
/**
 * Get a Random Number between 1 and 6
 */
function getRandomBetweenGiven(lowestNumber, highestNumber) {
    return Math.round(Math.random() * (highestNumber-lowestNumber) + 1);
}

console.log('Between 1-6: ', getRandomBetweenGiven(1,6));
console.log('Between 1-3: ', getRandomBetweenGiven(1,3));