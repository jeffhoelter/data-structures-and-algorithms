const Queue = require("./queueExercise1");

test("single item test", () => {
  var myQueue = new Queue();
  myQueue.enqueue("Test1");
  expect(myQueue.count()).toBe(1);
  expect(myQueue.peek()).toBe("Test1");
  expect(myQueue.dequeue()).toBe("Test1");
});

test("peek simple test", () => {
  var myQueue = new Queue();
  myQueue.enqueue("Test1");
  expect(myQueue.peek()).toBe("Test1");
  myQueue.enqueue("Test2");
  expect(myQueue.peek()).toBe("Test1");
  myQueue.enqueue("Test3");
  expect(myQueue.peek()).toBe("Test1");
  myQueue.enqueue("Test4");
  expect(myQueue.peek()).toBe("Test1");
  myQueue.dequeue();
  expect(myQueue.peek()).toBe("Test2");
});

test("dequeue test", () => {
  var myQueue = new Queue();
  myQueue.enqueue("Test1");
  myQueue.enqueue("Test2");
  myQueue.enqueue("Test3");
  myQueue.enqueue("Test4");
  expect(myQueue.dequeue()).toBe("Test1");
  expect(myQueue.count()).toBe(3);
});

test("dequeue test 2", () => {
  var myQueue = new Queue();
  myQueue.enqueue("Test1");
  myQueue.enqueue("Test2");
  myQueue.enqueue("Test3");
  myQueue.enqueue("Test4");
  expect(myQueue.dequeue()).toBe("Test1");
  expect(myQueue.count()).toBe(3);
  expect(myQueue.dequeue()).toBe("Test2");
  expect(myQueue.count()).toBe(2);
});

test("dequeue test with no elements", () => {
  var myQueue = new Queue();
  myQueue.enqueue("Test1");
  expect(myQueue.dequeue()).toBe("Test1");
  expect(myQueue.count()).toBe(0);
  expect(myQueue.dequeue()).toBe(-1);
  expect(myQueue.count()).toBe(0);
});

test("dequeue test complicated", () => {
  var myQueue = new Queue();
  myQueue.enqueue("Test1");
  myQueue.enqueue("Test2");
  myQueue.enqueue("Test3");
  myQueue.enqueue("Test4");
  expect(myQueue.dequeue()).toBe("Test1");
  expect(myQueue.count()).toBe(3);
  expect(myQueue.dequeue()).toBe("Test2");
  expect(myQueue.count()).toBe(2);
  expect(myQueue.dequeue()).toBe("Test3");
  expect(myQueue.count()).toBe(1);
  expect(myQueue.dequeue()).toBe("Test4");
  expect(myQueue.count()).toBe(0);
});

test("count simple test", () => {
  var myQueue = new Queue();
  expect(myQueue.count()).toBe(0);
  myQueue.enqueue("Test1");
  expect(myQueue.count()).toBe(1);
  myQueue.enqueue("Test2");
  expect(myQueue.count()).toBe(2);
  myQueue.enqueue("Test3");
  expect(myQueue.count()).toBe(3);
  myQueue.enqueue("Test4");
  expect(myQueue.count()).toBe(4);
  myQueue.dequeue();
  expect(myQueue.count()).toBe(3);
  myQueue.dequeue();
  expect(myQueue.count()).toBe(2);
  myQueue.dequeue();
  expect(myQueue.count()).toBe(1);
  myQueue.dequeue();
  expect(myQueue.count()).toBe(0);
});
