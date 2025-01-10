// Reverse Words in a String
// Write a function to reverse the words in a string without reversing the characters.
// reverseWords("Hello World!"); // Output: "World! Hello"

const reverseWord = (str) => {
  let strArray = str.split(" ");
  let resultantArray = [];

  for (let i = 0; i < strArray.length; i++) {
    resultantArray.unshift(strArray[i]);
  }
  return resultantArray.join(" ");
};

const result = reverseWord("Hello World!");
console.log(result);
