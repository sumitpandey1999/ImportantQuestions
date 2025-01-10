// Create a function to group an array of objects by a key.

// const arr = [{ category: 'A' }, { category: 'B' }, { category: 'A' }];
// groupBy(arr, 'category');
// // { A: [{ category: 'A' }, { category: 'A' }], B: [{ category: 'B' }] }

const groupByKey = (array, key) => {
  let resultantObject = array.reduce((accumulator, current) => {
    let groupKey = current[key];

    if (!accumulator[groupKey]) {
      accumulator[groupKey] = [];
    }

    accumulator[groupKey].push(current);

    return accumulator;
  }, {});

  return resultantObject;
};

const arr = [{ category: "A" }, { category: "B" }, { category: "A" }];
const result = groupByKey(arr, "category");
console.log(result);
