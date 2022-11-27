let removeVowels = require("./remove-vowels-in-array");

// console.log(word);
// console.log(removed);
// console.log(noVowels, "---->");
// console.log(removed === noVowels);

// console.log(removeVowelsFromWords())

test("remove vowels from all words in array", function () {
//Arrange
const word = ["Irina", "Etza", "Daniel"];
const noVowels = new removeVowels(word);
const removed = [];
//Act
word.forEach((e) => removed.push(e.replace(/[aoiueAOIUE]/g, "")));
//Assert
expect(noVowels).toEqual(removed);
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
