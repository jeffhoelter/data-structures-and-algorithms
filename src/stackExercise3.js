"use strict";
const Stack = require("./Stack");

const balancedParens = function(inputStr) {
  let myStack = new Stack();

  for (var i = 0; i < inputStr.length; i++) {
    let input = inputStr[i];
    //console.log("element of string: " + input);
    if (input === "(") {
      myStack.push("Paren");
    } else if (input === ")") {
      let returnValue = myStack.pop();
      if (returnValue === -1) {
        //console.log("false");
        return false;
      }
    }
  }

  //console.log("true");

  if (myStack.count() > 0) {
    return false;
  } else {
    return true;
  }
};

// Time complexity:

module.exports = balancedParens;

/*

3. Given a string, determine if the parenthesis in the string are balanced.
Ex: balancedParens( 'sqrt(5*(3+8)/(4-2))' ) => true
Ex: balancedParens( 'Math.min(5,(6-3))(' ) => false

 */
