let getLargestNumber = require("./largest-number");

test("returns largest number in array", function () {
  // Arrange
  const input = [3, 21, 88, 4, 36];
const output = getLargestNumber(input);
  // Act
  const sorted = input.sort((a, b) => a - b);
  const lastIndex = sorted[sorted.length - 1];
  // Assert
  
  expect(lastIndex).toEqual(output);
});

// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
