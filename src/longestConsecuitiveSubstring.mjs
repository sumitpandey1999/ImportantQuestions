const longestConsecuitiveSubstring = (str) => {
  let unqueWord = new Set();
  let maxLength = 0;
  let left = 0;
  for (let right = 0; right < str.length; right++) {
    while (unqueWord.has(str[right])) {
      unqueWord.delete(str[left]);
      left++;
    }

    unqueWord.add(str[right]);

    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
};

const result = longestConsecuitiveSubstring("abcdaabccdeabcdefgh");
console.log(result);
