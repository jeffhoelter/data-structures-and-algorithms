const Stack = require("../Stack");

var QueueWithStacks = function QueueWithStacks() {
  this.dataStack = new Stack();
  this.helperStack = new Stack();
};

QueueWithStacks.prototype.enqueue = function(value) {
  if (this.dataStack.count() === 0) {
    this.dataStack.push(value);
  } else {
    // take all elements in dataStack and move them to helperStack
    while (this.dataStack.count() > 0) {
      this.helperStack.push(this.dataStack.pop());
    }

    // push new value onto dataStack
    this.dataStack.push(value);

    // posh all values from helperStack onto dataStack
    while (this.helperStack.count() > 0) {
      this.dataStack.push(this.helperStack.pop());
    }
  }
};
// Time complexity: BAD

QueueWithStacks.prototype.dequeue = function() {
  return this.dataStack.pop();
};
// Time complexity:

QueueWithStacks.prototype.peek = function() {
  if (this.dataStack.count() > 0) {
    return this.dataStack.peek();
  }
  return -1;
};

QueueWithStacks.prototype.count = function() {
  return this.dataStack.count();
};
// Time complexity:

module.exports = QueueWithStacks;

/*
*** Exercises:

1. Implement a queue using two stacks.

2. Implement a double-ended queue, with the following methods: enqueueLeft, dequeueLeft, enqueueRight, dequeueRight.

3. Given a tree, print out the value of each node in breadth-first order using a queue data structure.


 */
