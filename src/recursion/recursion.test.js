const recursiveReverse = require("./recursion");

// test("single item test", () => {
//   expect(addNumbersFromN(1)).toBe(1);
//   expect(addNumbersFromN(2)).toBe(3);
//   expect(addNumbersFromN(3)).toBe(6);
// });
//
// test("single item test", () => {
//   expect(addNumbersFromNRecursive(1)).toBe(1);
//   expect(addNumbersFromNRecursive(2)).toBe(3);
//   expect(addNumbersFromNRecursive(3000)).toBe(6);
// });

test("array reversing", () => {
  expect(recursiveReverse([])).toBe([]);
  expect(recursiveReverse([1, 2, 3])).toBe([3, 2, 1]);
});
