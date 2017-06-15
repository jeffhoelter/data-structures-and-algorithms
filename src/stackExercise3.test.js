const balancedParens = require("./StackExercise3");

test("simple balanced parens", () => {
  expect(balancedParens("(Test1)")).toBe(true);
});

test("advanced balanced parens", () => {
  expect(balancedParens("(T(e)s(t1))")).toBe(true);
});

test("simple left unbalanced parens", () => {
  expect(balancedParens("(Tes(((t1)")).toBe(false);
});

test("simple right unbalanced parens", () => {
  expect(balancedParens("(Test1))))")).toBe(false);
});
