// Implement a function that compares two objects for deep equality.

const compareDeepEquality = (obj1, obj2) => {
  if (obj1 === obj2) return true;

  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  if (
    obj1 === null ||
    typeof obj1 !== "object" ||
    obj2 === null ||
    typeof obj2 !== "object"
  ) {
    return false;
  }

  if (keys1.length !== keys2.length) return false;

  for (let key of keys1) {
    if (!keys2.includes(key) || !compareDeepEquality(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
};

const obj1 = {
  name: "Sumit",
  age: 23,
  skills: {
    primary: "React",
    secondary: ["Redux", "Node.js"],
  },
};

const obj2 = {
  name: "Sumit",
  age: 23,
  skills: {
    primary: "React",
    secondary: ["Redux", "Node.js"],
  },
};

const result = compareDeepEquality(obj1, obj2);
console.log(result);
