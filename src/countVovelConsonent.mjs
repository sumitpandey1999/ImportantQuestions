// Count Vovel and Consonent of the given String

const countVovelConsonent = (str) => {
  const strArray = str.toLowerCase().split("");
  let vovel = 0;
  let consonent = 0;
  console.log(strArray);
  for (let i = 0; i < strArray.length; i++) {
    if (["a", "e", "i", "o", "u"].includes(strArray[i])) {
      vovel++;
    } else if (strArray[i] >= "a" && strArray[i] <= "z") {
      consonent++;
    }
  }

  return {
    vovel,
    consonent,
  };
};

const result = countVovelConsonent("My name is Sumit Pandey");
console.log(result);
