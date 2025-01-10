// Compare Objects by Keys: Write a function to compare two objects based on a subset of their keys.

const compareSubSetKeys = (obj1, obj2, subSetArray) => {
  for (let j = 0; j < subSetArray.length; j++) {
    if (!(subSetArray[j] in obj1) || !(subSetArray[j] in obj2)) {
      return false; // If key is missing from either object, return false
    }
  }

  for (let i = 0; i < subSetArray.length; i++) {
    if (obj1[subSetArray[i]] !== obj2[subSetArray[i]]) {
      return false;
    }
  }
  return true;
};

const result = compareSubSetKeys({ a: 1, b: 2 }, { a: 1, b: 3 }, ["c"]);
console.log(result);
