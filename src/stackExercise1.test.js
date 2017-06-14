const StackExercise1 = require("./StackExercise1");

test("peek simple test", () => {
  var myStack = new StackExercise1();
  myStack.push("Test1");
  expect(myStack.peek()).toBe("Test1");
  myStack.push("Test2");
  expect(myStack.peek()).toBe("Test2");
  myStack.push("Test3");
  expect(myStack.peek()).toBe("Test3");
  myStack.push("Test4");
  expect(myStack.peek()).toBe("Test4");
});

test("pop test", () => {
  var myStack = new StackExercise1();
  myStack.push("Test1");
  myStack.push("Test2");
  myStack.push("Test3");
  myStack.push("Test4");
  expect(myStack.pop()).toBe("Test4");
  expect(myStack.count()).toBe(3);
});

test("pop test complicated", () => {
  var myStack = new StackExercise1();
  myStack.push("Test1");
  myStack.push("Test2");
  myStack.push("Test3");
  myStack.push("Test4");
  expect(myStack.pop()).toBe("Test4");
  expect(myStack.count()).toBe(3);
  expect(myStack.pop()).toBe("Test3");
  expect(myStack.count()).toBe(2);
  expect(myStack.pop()).toBe("Test2");
  expect(myStack.count()).toBe(1);
  expect(myStack.pop()).toBe("Test1");
  expect(myStack.count()).toBe(0);
});

test("min test", () => {
  var myStack = new StackExercise1();
  myStack.push("3");
  myStack.push("2");
  myStack.push("4");
  expect(parseInt(myStack.min())).toBe(2);
  myStack.push("1");
  expect(parseInt(myStack.min())).toBe(1);
  myStack.pop();
  expect(parseInt(myStack.min())).toBe(2);
  myStack.pop();
  expect(parseInt(myStack.min())).toBe(2);
  myStack.pop();
  expect(parseInt(myStack.min())).toBe(3);
});
