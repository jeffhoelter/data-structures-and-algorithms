const Stack = require("./Stack");

test("peek simple test", () => {
  var myStack = new Stack();
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
  var myStack = new Stack();
  myStack.push("Test1");
  myStack.push("Test2");
  myStack.push("Test3");
  myStack.push("Test4");
  expect(myStack.pop()).toBe("Test4");
  expect(myStack.count()).toBe(3);
});

test("pop test with no elements", () => {
  var myStack = new Stack();
  myStack.push("Test1");
  expect(myStack.pop()).toBe("Test1");
  expect(myStack.count()).toBe(0);
  expect(myStack.pop()).toBe(-1);
  expect(myStack.count()).toBe(0);
});

test("pop test complicated", () => {
  var myStack = new Stack();
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
