/*
1. write a function that loops through the numbers n down to 0 and adds them??

2. #1 with recursion

3. Write a function 'exponent' that takes two arguments, base and expo, uses a while loop

4. RecursiveExponent

5. Recursive multiplier takes two arguments, array and num, and multiples each

6. Write a function recursiveReverse that takes an array and uses recursion to return its contents in reverse

*/

function addNumbersFromN(n) {
  let sum = 0;
  if (n < 0) {
    return -1;
  }
  while (n !== 0) {
    sum += n;
    n -= 1;
  }
  return sum;
}

function addNumbersFromNRecursive(n) {
  if (n < 0) {
    return -1;
  } else if (n === 0) {
    return 0;
  } else {
    return n + addNumbersFromNRecursive(n - 1);
  }
}

// 6. Write a function recursiveReverse that takes an array and uses recursion to return its contents in reverse

const recursiveReverse = inputArray => {
  if (inputArray.length === 0) {
    return [];
  } else {
    const returnArray = recursiveReverseHelper(new Array(), inputArray);
    return returnArray;
  }
};

const recursiveReverseHelper = (reversedArray, inputArray) => {
  if (inputArray.length === 0) {
    return reversedArray;
  } else {
    reversedArray.push(inputArray.pop());
    return recursiveReverseHelper(reversedArray, inputArray);
  }
};

module.exports = recursiveReverse;
